'use strict';


function DashboardController($scope, $http, $log, config, $compile, $timeout, SweetAlert, env, $base64, configService, $cookies, $window) {

var logged_in = sessionStorage.getItem('user_logged_in');
  $scope.loggedIn = false;
  if (logged_in) {
    $scope.loggedIn = true;
  }
  $scope.muted = true;
  $scope.mutebutton = "assets/images/volume_1.png";

  $scope.turn_vol = function() {
    if ($scope.muted == true) {
      $scope.mutebutton = "assets/images/volume_2.png";
      myPlayer.muted(false);
      $scope.muted = false;
    } else {
      $scope.mutebutton = "assets/images/volume_1.png";
      myPlayer.muted(true);
      $scope.muted = true;
    }
  };

  var itemsProcessed = 0;
  var geocoder;

  $scope.locationflag = true;
  var bounds = new google.maps.LatLngBounds();


  $scope.check_login_stat = function($event) {
    var logged_in = sessionStorage.getItem('user_logged_in');
    if (logged_in) {
      $event.preventDefault();
      SweetAlert.swal({
        title: "Are you sure?",
        text: "You are already logged in",
        type: "warning",
        showCancelButton: false,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "OK",
        closeOnConfirm: false
      });
      return false;
    } else {
      return true;
    }

    // if ($cookies.get("token")) {
    //   $event.preventDefault();
    //   return false;
    // }
    // return true;
  }


  $scope.getparking_locations_coordinates = function(lat, long) {
    $http({
      method: "GET",
      url: configService.getEnvConfig().apiURL + "/parkingAreas/searchByCoordinate?latitude=59.349102&longitude=18.113243&radius=100&limit=3",
      headers: configService.getAuthoriseHeader()
    }).then(function mySucces(response) {

      for (var l = 0; l < response.data.length; l++) {
        // $scope.areacoordinate.push(response.data[l].id);
        // $scope.get_locations(response.data[l].id); 
        //$scope.get_KM(response.data[l].id);
        $scope.get_locations(response.data[l].id);
        itemsProcessed++;
      }
      if (itemsProcessed == response.data.length) {
        //$scope.get_KM();         
      }

    }, function myError(response) {
      $scope.myWelcome = response.statusText;
      $log.info($scope.myWelcome);
    });
  };

  $scope.create_marker = function(lat, lon) {
    return new MarkerWithLabel({
      map: map,
      position: new google.maps.LatLng(lat, lon),
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 0, //tamaño 0
      },
      labelContent: '<div class="dot"></div><div class="pulse"></div>',
      labelClass: "labels" // the CSS class for the label
        //labelStyle: {opacity: 0.75},
    });
  };

  /* fetching latitude and longitude */
  $scope.get_locations = function(id) {

    $http({
      method: "GET",
      url: configService.getEnvConfig().apiURL + "/parkingAreas/" + id + "?includeLocation=true",
      headers: configService.getAuthoriseHeader()
    }).then(function mySucces(response) {
      console.log(response.data.location.geoJsons.length);
      if (response.data.location.geoJsons.length > 1) {
        for (var h = 0; h < response.data.location.geoJsons.length; h++) {

          var lon = response.data.location.geoJsons[h].centroid.x;
          var lat = response.data.location.geoJsons[h].centroid.y;
          $log.info(lat);
          $log.info(lon);

          var marker = $scope.create_marker(lat, lon);
        }
      } else {

        var lon = response.data.location.geoJsons[0].centroid.x;
        var lat = response.data.location.geoJsons[0].centroid.y;
        $log.info(lat);
        $log.info(lon);

        var marker = $scope.create_marker(lat, lon);
      }
    }, function myError(response) {
      $scope.myWelcome = response.statusText;
      $log.info($scope.myWelcome);
    });
  };

  $scope.getparking_locations_rectangle = function() {
    $http({
      method: "GET",
      url: configService.getEnvConfig().apiURL + "/parkingAreas/searchByRectangle?latitude1=59.3671709&longitude1=18.0546067&latitude2=58.3671709&longitude2=19.0546067&limit=3",
      headers: configService.getAuthoriseHeader()
    }).then(function mySucces(response) {

      for (var l = 0; l < response.data.length; l++) {
        //$scope.arearectangle.push(response.data[l].areaName);
        $scope.get_locations(response.data[l].id);
        itemsProcessed++;
      }
      if (itemsProcessed == response.data.length) {
        $log.info($scope.arearectangle);
      }
    }, function myError(response) {
      $scope.myWelcome = response.statusText;
      $log.info($scope.myWelcome);
    });

  };

  /*getting current location of user using Geolocation API*/
  $scope.getcoordinates = function() {

    $scope.timeIsPassing = true;

    navigator.geolocation.getCurrentPosition($scope.showPosition, $scope.showError, {
      maximumAge: 30000,
      timeout: 10000,
      enableHighAccuracy: true
    });

    setTimeout(
      function() {
        if ($scope.timeIsPassing) {
          $scope.timeIsPassig = false;
          $log.info("Waiting too much... Or did you say not now? :-P");
          $scope.locationflag = false;
          $scope.getparking_locations_rectangle();
        }
      }, 10000);
  };

  /*Geolocation Api error Handler*/
  $scope.showError = function(error) {
    $scope.timeIsPassing = false;
    $log.info(error);
    switch (error.code) {
      case error.PERMISSION_DENIED:
        $scope.locationflag = false;
        $scope.getparking_locations_rectangle();
        break;
      case error.POSITION_UNAVAILABLE:
        $scope.locationflag = false;
        $scope.getparking_locations_rectangle();
        break;
      case error.TIMEOUT:
        $scope.locationflag = false;
        $scope.getparking_locations_rectangle();
        break;
      case error.UNKNOWN_ERROR:
        $scope.locationflag = false;
        $scope.getparking_locations_rectangle();
        break;
    }
  };
  /*Geolocation Api success handler*/

  $scope.showPosition = function(position) {
    localStorage.setItem("home", "");
    localStorage.setItem("work", "");
    localStorage.setItem("hotel", "");
    $scope.timeIsPassing = false;
    $scope.see = true;
    $log.info("lattt" + position.coords.latitude);
    $log.info("long" + position.coords.longitude);

    $scope.getparking_locations_coordinates(position.coords.latitude,
      position.coords.longitude);

  };

  $scope.init = function() {
    // $scope.getaccess_token();
    $timeout(function() {
      // var owl = jQuery("#main-slider");
      //   owl.owlCarousel({
      //       itemsCustom : [
      //         [0, 1],
      //         [450, 1],
      //         [600, 1],
      //         [700, 1],
      //         [1000, 1]
      //       ],
      //       autoPlay: 3000,
      //       navigation : false ,
      // });
      $scope.getcoordinates();
    }, 500);

  };
  $scope.phone_number = '';
  $scope.sendSms = function() {
    var smsOptions = {};
    var sampleParams = {};
    var phone = $scope.phone_number;


    var sampleParams = {
      tags: ['tag1', 'tag2'],
      channel: 'Easy Park',
      feature: 'http://bja4.app.link/Uu9XOICzrt',
      stage: 'http://bja4.app.link/Uu9XOICzrt',
      type: 1,
      data: {
        mydata: 'bar',
        '$desktop_url': 'http://bja4.app.link/Uu9XOICzrt',
        '$og_title': 'Easy Park',
        '$og_description': 'Easy Park',
        '$og_image_url': ''
      }
    };

    if (!phone) {
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application
      // to prevent interaction outside of dialog

      SweetAlert.swal("Please enter your phone number.");
      return false;
    }
    if (phone.indexOf('+') != 0) {
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application
      SweetAlert.swal("Please add your country code with + sign.");
      return false;
    }
    branch.sendSMS(phone, sampleParams, smsOptions, function(err) {
      console.log('Test BRANCH : s', err);
      //console.log(err || JSON.stringify(data) || 'undefined');
      // alert(data);
      if (!err) {
        $scope.phone_number = '';
        SweetAlert.swal("Sent!", "Thank you for your interest!", "success");
      } else {
        SweetAlert.swal("Some error occured! Please check your number.");
      }
    });
  };

}
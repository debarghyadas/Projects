'use strict';


function logincont($scope, $http, $log, config, $compile, $timeout, SweetAlert, env, $base64, configService, $cookies, $window) {
$scope.rememberMe = false;
  var logged_in = sessionStorage.getItem('user_logged_in');
  $scope.loggedIn = false;
  if (logged_in) {
    $scope.loggedIn = true;
  }

  if (sessionStorage.getItem('user_logged_in')) {
    SweetAlert.swal({
        title: "Are you sure?",
        text: "You are already logged in",
        type: "warning",
        showCancelButton: false,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Go Home",
        closeOnConfirm: false
      },
      function() {
        window.location.href = 'index';
      });
    return false;
  }

  $scope.inputType = 'password';

  $scope.invisible_png = 'assets/images/invisible-btn.png';
  $scope.visible_png = 'assets/images/visible.png';
  $scope.default_png = 'assets/images/visible.png';

  $scope.hideShowPassword = function() {
    if ($scope.inputType == 'password') {
      $scope.inputType = 'text';
      $scope.default_png = $scope.invisible_png;
    } else {
      $scope.inputType = 'password';
      $scope.default_png = $scope.visible_png;
    }
  };


  $scope.checked = false;
  $scope.init = function() {
  
    if (localStorage.getItem("rememberMe")) {
      $("#first_field").intlTelInput("setNumber", localStorage.getItem("username"));
      $scope.phoneNumber = localStorage.getItem("username");
      $scope.pass = localStorage.getItem("password");
      $scope.checked = true;
      $scope.rememberMe = true;
    }
  };

  // $scope.phoneNumber = 9860976272;
  // $scope.pass = "Pass@1234";

  $scope.login = function(form) {

var phone;
    var error = $("#first_field").intlTelInput("getValidationError");
    var countryData = $("#first_field").intlTelInput("getSelectedCountryData");
    var dialCode = countryData.dialCode;

    if (error == intlTelInputUtils.validationError.TOO_SHORT) {
      // the number is too short
      console.log("Too Short");
      swal("Number Entered is too short");
    } else if (error == intlTelInputUtils.validationError.INVALID_COUNTRY_CODE) {
      console.log(" INVALID_COUNTRY_CODE");
      swal("Invalid Country Code");
    } else if (error == intlTelInputUtils.validationError.TOO_LONG) {

      console.log("TOO_LONG");
      swal("Number is too long");
    }
    // else if (error == intlTelInputUtils.validationError.NOT_A_NUMBER && $scope.phoneNumber) {

    //   console.log("TOO_LONG");
    //   swal("Not a number");

    // } 
    else if ($scope.phoneNumber && $scope.pass) {

     console.log($scope.phoneNumber);
      if($scope.phoneNumber.indexOf('+') > -1)
    {
            phone = $scope.phoneNumber;
    }
    else{
       phone = "+" + dialCode + $scope.phoneNumber;

    }
      
      console.log(encodeURIComponent($scope.phoneNumber));
      console.log($scope.pass);

      $http({
        'url': configService.getEnvConfig().OauthUrl,
        'method': 'POST',
        'data': 'grant_type=password&username=' + encodeURIComponent(phone) + '&password=' + $scope.pass,
        'headers': configService.getAuthoriseHeader()
      }).then(function(response) {
        var data = null;
        $scope.access_object = data = response.data;

        console.log('Access Token', data);

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        localStorage.setItem("token_type", data.token_type);
        var date_now = new Date().getTime();
        var expires = date_now + (data.expires_in * 1000);
        console.log(expires);
        console.log(new Date(expires).toString());
      
        if ($scope.rememberMe) {
          /*# user DOES to be remembered*/
          $cookies.put("token", data.access_token, {
            expires: new Date(new Date(expires).toString())
          });


          localStorage.setItem("username", "");
          localStorage.setItem("password", "");
          localStorage.setItem("rememberMe", "");

          localStorage.setItem("username", phone);
          localStorage.setItem("password", $scope.pass);
          localStorage.setItem("rememberMe", $scope.rememberMe);


        } else {
          /*# user DOES NOT want to be remembered*/
          localStorage.setItem("username", "");
          localStorage.setItem("password", "");
          localStorage.setItem("rememberMe", "");

        }
        //Edited Suchandan
        sessionStorage.setItem('user_logged_in', true);
        sessionStorage.setItem('logged_in_user_id', $scope.phoneNumber);
        //Edited Suchandan

        $window.location.href = 'index';
      }, function(err) {
        console.log(err.data.error);
        if (err.data.error == "unauthorized" && err.data.error_description == "Bad credentials") {
          SweetAlert.swal("Sorry!", "Please check your credentials", "error");
        } else {
          SweetAlert.swal("Sorry!", "Login Failed.Please try again!", "error");
        }

      });
    }
  };

  $scope.forget_mobile_number = '+469860976272';
  $scope.send_otp_code = function function_name(argument) {
    if (true) {
      $http({
        'url': configService.getFullServiceUrl('accounts/forgotPasswordBySms'),
        'method': 'POST',
        'data': {
          phoneNumber: $scope.forget_mobile_number
        },
        'headers': {
          'Content-Type': 'application/json'
        }
      }).then(function(response) {
        console.log('Success', response);
        inst.close();
        inst_validate_otp.open();
      }, function function_name(err) {
        console.log('Error', err);
        if (err.status == 422 && err.data.code == 'VALIDATION_EXCEPTION') {
          // SweetAlert.swal('Sorry!', err.data.message);
        } else {
          // SweetAlert.swal('Some internan error occured.');
        }
      });
    }
  };

  $scope._otp = '1982';
  $scope.validate_otp = function function_name(argument) {
    if (true) {
      $http({
        'url': configService.getFullServiceUrl('accounts/isValidPhoneToken'),
        'method': 'POST',
        'data': {
          phone: $scope.forget_mobile_number,
          token: $scope._otp
        },
        'headers': {
          'Content-Type': 'application/json'
        }
      }).then(function(response) {
        console.log('Success', response);
        inst_validate_otp.close();
        inst_reset_password.open();
      }, function function_name(err) {
        console.log('Error', err);
        if (err.status == 422 && err.data.code == 'VALIDATION_EXCEPTION') {
          // SweetAlert.swal('Sorry!', err.data.message);
        } else {
          // SweetAlert.swal('Some internan error occured.');
        }
      });
    }
  };
  $scope.set_resnd_otp_message = '';
  $scope.resend_otp = function function_name() {
    $scope.set_resnd_otp_message = '';
    // body...
    $http({
      'url': configService.getFullServiceUrl('accounts/forgotPasswordBySms'),
      'method': 'POST',
      'data': {
        phoneNumber: $scope.forget_mobile_number
      },
      'headers': {
        'Content-Type': 'application/json'
      }
    }).then(function(response) {
      $scope.set_resnd_otp_message = "Otp successfully sent.";
    }, function function_name(err) {
      console.log('Error', err);
      if (err.status == 422 && err.data.code == 'VALIDATION_EXCEPTION') {
        // SweetAlert.swal('Sorry!', err.data.message);
      } else {
        // SweetAlert.swal('Some internan error occured.');
      }
    });
  }

  $scope._r_password = '123456';
  $scope.error_expression3 = '';
  $scope.reset_password = function function_name(argument) {
    $scope.error_expression3 = '';
    if (true) {
      $http({
        'url': configService.getFullServiceUrl('accounts/resetPasswordByPhone'),
        'method': 'POST',
        'data': {
          phone: $scope.forget_mobile_number,
          token: $scope._otp,
          newPassword: $scope._r_password
        },
        'headers': {
          'Content-Type': 'application/json'
        }
      }).then(function(response) {
        console.log('Success', response);
        inst_reset_password.close();
        SweetAlert.swal("Success", "Password successfully reset.", "success");
      }, function function_name(err) {
        console.log('Error', err);
        if (err.status == 422 && err.data.code == 'VALIDATION_EXCEPTION') {
          $scope.error_expression3 = err.data.message;
          // SweetAlert.swal('Sorry!', err.data.message);
        } else {
          // SweetAlert.swal('Some internan error occured.');
        }
      });
    }
  };

}
/**
 * The ZoomControl adds +/- button for the map
 *
 */

var search_input;
var myPlayer;

function ZoomControl(controlDiv, map) {

  // Creating divs & styles for custom zoom control
  // controlDiv.style.padding = '5px';
  controlDiv.className = 'custom-zoom-wrapper-container';

  // Set CSS for the control wrapper
  var controlWrapper = document.createElement('div');
  controlWrapper.className = 'custom-zoom-wrapper';
  // controlWrapper.style.backgroundColor = 'white';
  // controlWrapper.style.borderStyle = 'solid';
  // controlWrapper.style.borderColor = 'gray';
  // controlWrapper.style.borderWidth = '1px';
  // controlWrapper.style.cursor = 'pointer';
  // controlWrapper.style.textAlign = 'center';
  // controlWrapper.style.width = '32px';
  // controlWrapper.style.height = '64px';
  controlDiv.appendChild(controlWrapper);


  search_input = document.createElement('input');
  search_input.setAttribute('type', 'text');
  search_input.className = 'custom-search-input';
  search_input.setAttribute('name', 'custom-google-map-search');
  controlWrapper.appendChild(search_input);


  var share = document.createElement('div');
  share.className = 'custom-share-location-button';
  var t = document.createTextNode("S");

  share.appendChild(t);
  controlWrapper.appendChild(share);

  // Set CSS for the zoomIn
  var zoomInButton = document.createElement('div');
  var t = document.createTextNode("+");

  zoomInButton.appendChild(t);
  zoomInButton.className = 'custom-zoom-button custom-zoom-in'

  // zoomInButton.style.width = '32px';
  // zoomInButton.style.height = '32px';
  /* Change this to be the .png image you want to use */
  // zoomInButton.style.backgroundImage = 'url("https://maps.gstatic.com/mapfiles/api-3/images/tmapctrl.png")';
  // zoomInButton.style.backgroundRepeat = 'no-repeat';
  // zoomInButton.style.backgroundPosition = 'center';
  // zoomInButton.style.textAlign = 'center';
  // zoomInButton.style.padding = '15px';
  // zoomInButton.style.fontSize = '14px';
  controlWrapper.appendChild(zoomInButton);

  // Set CSS for the zoomOut
  var zoomOutButton = document.createElement('div');
  var t = document.createTextNode("-");

  zoomOutButton.appendChild(t);
  zoomOutButton.className = 'custom-zoom-button custom-zoom-out';
  // zoomOutButton.style.textAlign = 'center';
  // zoomOutButton.style.padding = '15px';
  // zoomOutButton.style.fontSize = '14px';
  // zoomOutButton.style.width = '32px';
  // zoomOutButton.style.height = '32px';
  // zoomInButton.style.backgroundRepeat = 'no-repeat';
  // zoomInButton.style.backgroundPosition = 'center';
  /* Change this to be the .png image you want to use */
  // zoomOutButton.style.backgroundImage = 'url("https://maps.gstatic.com/mapfiles/api-3/images/tmapctrl.png")';
  controlWrapper.appendChild(zoomOutButton);

  // Setup the click event listener - zoomIn
  google.maps.event.addDomListener(zoomInButton, 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });

  // Setup the click event listener - zoomOut
  google.maps.event.addDomListener(zoomOutButton, 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });

  google.maps.event.addDomListener(share, 'click', function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      map.panTo(latLng);
    }, function(err) {
      console.log('Error', err);
      if (err.code == 1) {
        alert('Please Give Permission to acces your currrent position.');
      }

    }, {
      maximumAge: 30000,
      timeout: 10000,
      enableHighAccuracy: true
    });
  });

}
require(['angular_modules/dashboard/DashboardApp'], function() {


  videojs("bgvid").ready(function() {
    myPlayer = videojs('bgvid');
    myPlayer.muted(true);
  });

  //bootstrapping angular app

  window.cookieconsent_options = {
    "message": "This website uses cookies to ensure you get the best experience on our website",
    "dismiss": "Got it!",
    "learnMore": "More info",
    "link": null,
    "theme": "dark-top"
  };

  branch.init('key_live_jlg4My80vlsYPQnxKjTUkpcpxxdDdiWO', function(err, data) {

  });


  function initialize() {

    // console.log('loading Map');

    map_options.center = new google.maps.LatLng(59.349102, 18.113243);
    map_options.mapTypeId = google.maps.MapTypeId.ROADMAP;
    map = new google.maps.Map(document.getElementById("map_canvas"), map_options);


    var zoomControlDiv = document.createElement('div');
    var zoomControl = new ZoomControl(zoomControlDiv, map);
    console.log(zoomControlDiv);
    console.log(zoomControl);

    zoomControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomControlDiv);

    var input = search_input;
    var options = {
      types: ['(regions)'],
      // componentRestrictions: {
      //   country: "se"
      // }
    }
    var autocomplete = new google.maps.places.Autocomplete(input, options);

    autocomplete.addListener('place_changed', function() {
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        window.alert("Autocomplete's returned place contains no geometry");
        return;
      }
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17); // Why 17? Because it looks good.
      }
    });

    // var world_geometry = new google.maps.FusionTablesLayer({
    //   query: {
    //     select: 'geometry',
    //     from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
    //     where: "ISO_2DIGIT IN ('SE')"
    //   },

    //   //  styles: [{
    //   //       polygonOptions: {
    //   //         fillColor: '#80FFFFFF',
    //   //         fillOpacity: 0.3
    //   //       }
    //   //     }, {
    //   //       where: "ISO_2DIGIT IN ('SE')",
    //   //       polygonOptions: {
    //   //         fillColor: '#0000FF'
    //   //       }
    //   //     }
    //   //     ]
    //   // 
    //   map: map,
    //   suppressInfoWindows: true
    // });
    // world_geometry.setMap(map);

    angular.bootstrap(document, ['DashboardApp']);
  };

  $(function() {
    $('input,textarea').focus(function() {
      $(this).data('placeholder', $(this).attr('placeholder'))
        .attr('placeholder', '');
    }).blur(function() {
      $(this).attr('placeholder', $(this).data('placeholder'));
    });
  });

  google.maps.event.addDomListener(window, "load", initialize);
  //app.init();
});
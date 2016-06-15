require.config({
  waitSeconds: 0,
  baseUrl: 'app/',
  paths: {
    'angular': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min',
    'angular_messages': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages',
    'angular_animate': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate',
    'ngRoute': '../../vendor/angular/angular-route',
    'remodal': 'Webjs/remodal.min',

    'jquery_ui': 'https://code.jquery.com/ui/1.10.3/jquery-ui',
    'ngCookie': '../../vendor/angular/angular-cookies.min',
    
    'angular_gmap': 'https://cdnjs.cloudflare.com/ajax/libs/angular-google-maps/2.3.3/angular-google-maps',
    'simple_logger': '../../vendor/angular/angular-simple-logger',
    'load_dash': 'https://cdn.jsdelivr.net/lodash/3.8.0/lodash',
    'cookie_consent':'Webjs/cookieconsent.min',

    'angular_base64': '../../vendor/angular/angular-base64.min',
    'jquery': '../../vendor/jquery/jquery.min',
    'Video': 'https://cdn.rawgit.com/videojs/video.js/v5.4.4/dist/video',
    'Youtube': 'Webjs/Youtube_new',
    'Number_input':'Webjs/intlTelInput.min',
    'OWL': 'Webjs/owl.carousel.min',
    'OWL_C': 'Webjs/owl.carousel',
    'angularconfig': 'angularconfig',

    'google_map': 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=drawing,places',
    'google_marker_css': 'Webjs/markerWithLabels',
    'swal': 'Webjs/SweetAlert.min',
    'swalLib': 'Webjs/sweet-alert.min',
    'config_service': '../common/services/config-service',
    'app_directives': '../common/directives/main-directives',

    'animated_modal': 'Webjs/animatedModal.min',
    // 'angular_animate':'../../vendor/angular/angular-animate.min',
    'angular_loader': '../../vendor/angular/loading-bar.min'

  },
  shim: {
    ngRoute: {
      deps: ['angular']
    },

    angular_messages: {
      deps: ['angular']
    },
    ngCookie: {
      deps: ['angular']
    },

    angular_animate:{

       deps: ['angular']
    },

    angular_loader:{
     
     deps: ['angular']

    },
    config_service: {
      deps: ['angular']
    },
    app_directives: {
      deps: ['angular']
    },
    angularconfig: {
      deps: ['angular']
    },
    angular_base64: {
      deps: ['angular']
    },
    google_marker_css: {
      deps: ['google_map']
    },
    angular_gmap: {
      deps: ['angular', 'load_dash']
    },
    simple_logger: {
      deps: ['angular_gmap']
    },
    swalLib: {
      exports: 'swalLib'
    },
    swal: {
      deps: ['angular', 'swalLib']
    },
    OWL: {
      deps: ['jquery']
    }, 

    jquery_ui: {
      deps: ['jquery']
    },
    Number_input: {
      deps: ['jquery']
    },  
    remodal: {
      deps: ['jquery']
    },
    cookie_consent:{
       deps:['jquery']
    },
    angular: {
      exports: 'angular'
    },
    animated_modal:{
      deps: ['jquery']
    },
  },
  // baseUrl: require.toUrl()
});


var map;
var map_options = {
  zoom: 12,
  /* Disabling default UI widgets */
  disableDefaultUI: true,
  scrollwheel: false
};
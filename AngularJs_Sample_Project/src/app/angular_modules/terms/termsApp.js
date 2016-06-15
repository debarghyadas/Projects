
define(['angular', 'ngRoute','angular_base64','jquery','cookie_consent','swal','swalLib',
  'angular_modules/terms/termsController','ngCookie','google_map','google_marker_css',
  'angularconfig','config_service','app_directives','angular_loader','angular_animate'], function () {
    var app = angular.module("termsApp", 
      ['ngRoute','app.config','oitozero.ngSweetAlert','base64','config.service','app.directives','ngCookies','angular-loading-bar','ngAnimate']);
        app.config(function ($routeProvider) {
       /* $routeProvider.
                when('/route1', {
                    templateUrl: '../../../index.html',
                    controller: 'controller/DashboardController'
                }).
               
                otherwise({
                    redirectTo: '/'
                });*/
    });
 
    app.controller('termsController', termsController);
   
});


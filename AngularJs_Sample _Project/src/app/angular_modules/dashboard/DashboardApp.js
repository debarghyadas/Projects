
define(['angular', 'ngRoute','angular_base64','jquery','cookie_consent','swal','swalLib',
  'angular_modules/dashboard/DashboardController','ngCookie','google_map','google_marker_css',
  'angularconfig','config_service','app_directives','angular_loader','angular_animate'], function () {
    var app = angular.module("DashboardApp", 
      ['ngRoute','app.config','oitozero.ngSweetAlert','base64','config.service','app.directives','ngCookies','angular-loading-bar','ngAnimate']);
        app.config(function ($routeProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: '../../templates/landing.html',
                    // controller: 'controller/DashboardController'
                }).
               
                otherwise({
                    redirectTo: '/sign-in'
                });
    });
 
    app.controller('DashboardController', DashboardController);
   
});


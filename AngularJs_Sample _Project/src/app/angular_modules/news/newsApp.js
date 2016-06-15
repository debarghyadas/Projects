define(['angular', 'ngRoute','angular_base64','jquery','Number_input','cookie_consent','swal','swalLib','remodal',
  'angular_modules/news/newsController','angularconfig','ngCookie','config_service','app_directives','angular_loader','angular_animate'], function () {
    var app = angular.module("newsApp", 
      ['ngRoute','app.config','oitozero.ngSweetAlert','base64','config.service','app.directives','ngCookies','angular-loading-bar','ngAnimate']);
        app.config(function ($routeProvider) {
    });
    app.controller('NewsController', NewsController);
   
});


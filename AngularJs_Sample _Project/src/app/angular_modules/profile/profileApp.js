define(['angular', 'ngRoute', 'angular_base64', 'jquery', 'jquery_ui',
	'angularconfig', 'config_service', 'app_directives', 'Number_input', 'angular_modules/profile/profileController','angular_messages','swal','swalLib',
	'animated_modal','angular_loader','angular_animate'
], function() {

	var app = angular.module("ProfileApp", ['ngRoute', 'app.config', 'base64', 'config.service', 'app.directives','ngMessages','oitozero.ngSweetAlert','angular-loading-bar','ngAnimate']);
	app.config(function() {});

	app.controller('ProfileController', ProfileController);
	

});
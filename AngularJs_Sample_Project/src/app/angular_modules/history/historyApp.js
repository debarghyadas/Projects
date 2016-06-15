define(['angular', 'ngRoute', 'angular_base64', 'jquery', 'jquery_ui', 'swal', 'swalLib', 'angular_modules/history/historyController', 'angular_gmap', 'simple_logger', 'load_dash', 'google_marker_css', 'angularconfig', 'config_service', 'app_directives','angular_loader','angular_animate'], function() {

	$("#accordion").accordion();

	var app = angular.module("HistoryApp", ['ngRoute', 'oitozero.ngSweetAlert', 'app.config', 'base64', 'config.service', 'app.directives', 'uiGmapgoogle-maps','angular-loading-bar','ngAnimate']);
	app.config(function(uiGmapGoogleMapApiProvider) {
		uiGmapGoogleMapApiProvider.configure({
			//    key: 'your api key',
			v: '3.20', //defaults to latest 3.X anyhow
			libraries: 'weather,geometry,visualization'
		});
	});

	app.controller('HistoryController', HistoryController);
	app.factory('Date', function() {
		return {
			getmonths: function() {

				var monthNames = ["January", "February", "March", "April", "May", "June",
					"July", "August", "September", "October", "November", "December"
				];

				var myDate = new Date();
				var month_array = new Array();
				var currentMonth = monthNames[myDate.getMonth()];
				var previousMonth = monthNames[myDate.getMonth() - 1];

				var previousofpreviousmonth = monthNames[myDate.getMonth() - 2];

				month_array[0] = currentMonth;
				month_array[1] = previousMonth;
				month_array[2] = previousofpreviousmonth;
				return month_array;
			},
		};
	});

});
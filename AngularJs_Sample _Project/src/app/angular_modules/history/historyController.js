'use strict';

function HistoryController($scope, $http, $log, $compile, $timeout, $base64, configService, uiGmapGoogleMapApi, Date, SweetAlert) {

var logged_in = sessionStorage.getItem('user_logged_in');
  $scope.loggedIn = false;
  if (logged_in) {
    $scope.loggedIn = true;
  }
	if (!sessionStorage.getItem('user_logged_in')) {
		SweetAlert.swal({
				title: "Are you sure?",
				text: "You are not logged in",
				type: "warning",
				showCancelButton: false,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Log me in!",
				closeOnConfirm: false
			},
			function() {
				window.location.href = 'sign-in';
			});
		return false;
	}


	console.log(navigator.appVersion);
	$scope.username = '%2B469860976272';
	$scope.password = 'Pass@1234';
	$scope.account_id = '';
	$scope.parkings = [];
	$scope.access_object = {};

	$scope.map = {
		center: {
			latitude: 59.349102,
			longitude: 18.113243
		},
		zoom: 7
	};
	$scope.options = {
		scrollwheel: false
	};

	// uiGmapGoogleMapApi.then(function(maps) {
	//     console.log('Google Maps loaded');
	//     console.log(maps);

	// });

	$scope.noparkings = true;
	$scope.ar = Date.getmonths();
	console.log($scope.ar);
	$scope.init = function() {
		$http({
			'url': configService.getEnvConfig().OauthUrl,
			'method': 'POST',
			'data': 'grant_type=password&username=' + $scope.username + '&password=' + $scope.password,
			'headers': configService.getAuthoriseHeader()
		}).then(function(response) {
			var data = null;
			$scope.access_object = data = response.data;

			console.log('Access Token', data);

			localStorage.setItem("access_token", data.access_token);
			localStorage.setItem("refresh_token", data.refresh_token);
			localStorage.setItem("token_type", data.token_type);

			$scope.get_account_details();

		}, function(err) {
			console.log(err);
		});
	};

	$scope.get_account_details = function() {
		$http({
			method: "GET",
			url: configService.getEnvConfig().apiURL + '/accounts/my',
			headers: configService.getSignedHeader()
		}).then(function(response) {
			var data = response.data;
			localStorage.setItem("account_id", data.id);
			console.log('User Data', data);
			$scope.load_parkings();
		}, function(err) {
			console.log(err);
		});
	};

	$scope.load_parkings = function() {
		var account_id = localStorage.getItem("account_id");
		$http({
			method: "GET",
			url: configService.getEnvConfig().apiURL + '/accounts/' + account_id + '/parkings',
			// url: configService.getEnvConfig().apiURL + '/accounts/'+ account_id +'/parkings?licenseNumber=ABC123&page=1&pageSize=10',
			headers: configService.getSignedHeader()
		}).then(function(response) {
			var parkings = response.data;
			$scope.parkings = parkings.elements;
			if ($scope.parkings) {
				$scope.noparkings = false;
			}
			console.log("Parkings", parkings);
			for (var i = 0; i < parkings.elements.length; i++) {
				$scope.get_locations(parkings.elements[i].areaId);
			}
		}, function(err) {
			console.log(err);
		});
	};

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
				}
			} else {
				var lon = response.data.location.geoJsons[0].centroid.x;
				var lat = response.data.location.geoJsons[0].centroid.y;
				$log.info(lat);
				$log.info(lon);
			}
		}, function myError(response) {
			$scope.myWelcome = response.statusText;
			$log.info($scope.myWelcome);
		});
	};
	$scope.init();
	// https://epic-staging.easyparksystem.net/epic-rest/v1/accounts/1250152/parkings?licenseNumber=ABC123&page=1&pageSize=10
}
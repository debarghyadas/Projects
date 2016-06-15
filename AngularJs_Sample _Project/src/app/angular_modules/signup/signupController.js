'use strict';

function SignupController($scope, $http, $log, $compile, $timeout, $base64, configService, SweetAlert) {
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
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Go Home",
				closeOnConfirm: false
			},
			function(isConfirm) {
				if(isConfirm){
					window.location.href = 'index';
				}else{
					return false;
				}
				
			});
		return false;
	}

	$scope.user = {};
	$scope.ptype = 'password';

	$scope.invisible_png = 'assets/images/invisible-btn.png';
	$scope.visible_png = 'assets/images/visible.png';
	$scope.default_png = 'assets/images/visible.png';
	$scope.viewpass = false;

	$scope.change_password_view_type = function() {
		if ($scope.viewpass) {
			$scope.ptype = 'password';
			$scope.viewpass = false;
			$scope.default_png = $scope.visible_png;
		} else {
			$scope.ptype = 'text';
			$scope.viewpass = true;
			$scope.default_png = $scope.invisible_png;
		}
	};


	$scope.country_codes = [{
		id: 41,
		label: '+41'
	}, {
		id: 42,
		label: '+42'
	}, ];
	$scope.user.countryCode = $scope.country_codes[0];
	$scope.signUp = function(form) {
		console.log(form);

		var countryData = $("#phoneNumber").intlTelInput("getSelectedCountryData");

		// return console.log(countryData);

		var dialCode = countryData.dialCode;
		var fullPhoneNumber = "+" + dialCode + $scope.user.phoneNumber;

		var country_code = countryData.iso2.toUpperCase();

		var user = {};
		user.countryCode = country_code;
		user.customerType = 'PRIVATE';
		user.email = $scope.user.email;
		user.primaryPhone = fullPhoneNumber;
		user.username = fullPhoneNumber;
		user.password = $scope.user.password;
		// return console.log(user);
		if (form.$valid) {
			// return console.log(configService.getFullServiceUrl('accounts'));
			$http({
				url: configService.getFullServiceUrl('accounts'),
				'method': 'POST',
				data: user,
				headers: configService.getAuthoriseHeader({
					'Content-Type': 'application/json'
				})
			}).then(function(data) {
				console.log(data);
				SweetAlert.swal("Success", 'The account successfully created.', "success");
			}, function(err) {
				console.log(err);
				if (err.status == 422) {
					if (err.data.code == 'DUPLICATE_USER') {
						SweetAlert.swal("Sorry!", "User Already exists with this phone number.", "error");
					} else if (err.data.code == 'VALIDATION_EXCEPTION') {
						SweetAlert.swal("Sorry!", err.data.message, "error");
					}
				}
				console.log('sorry some internal server error occured.');
			});
		}
	};
}
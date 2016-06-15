'use strict';

function ProfileController($scope, $http, $log, $compile, $timeout, $base64, configService, SweetAlert) {
	var logged_in = sessionStorage.getItem('user_logged_in');
  $scope.loggedIn = false;
  if (logged_in) {
    $scope.loggedIn = true;
  }
	$scope.userdata = {};
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


	$scope.imageUpload = function(files) {

		$log.info(JSON.stringify(files[0]));
		// $scope.upload(files[0]);

		var file = files[0].name.split('.');

		var file1 = file[0];
		var file2 = file[1].toLowerCase();
		console.log(file2 == "png");

		if (file2 == "png" || file2 == "jpeg" || file2 == "jpg") {
			$scope.a = files[0];
			localStorage.setItem("ImageURI", JSON.stringify(files[0]));
			//   var files = event.target.files; //FileList object

			for (var i = 0; i < files.length; i++) {
				var file = files[i];
				var reader = new FileReader();

				reader.onload = $scope.imageIsLoaded;
				reader.readAsDataURL(file);
			}
		} else {
			swal("BOOKD!", "Please upload an image file", "error");
		}
	};
	$scope.fileurl = null;
	$scope.imageIsLoaded = function(e) {
		$scope.$apply(function() {
			$scope.fileurl = e.target.result;
			angular.element(document.getElementById('profile-pic')).attr('src', $scope.fileurl);
			// document.querySelector("#image").style.backgroundImage = 'url(' + $scope.step + ')';

			// var canvas = document.createElement("canvas");
			// var imageElement = document.createElement("img");

			// imageElement.setAttribute('src', $scope.step);
			// canvas.width = imageElement.width;
			// canvas.height = imageElement.height;
			// var context = canvas.getContext("2d");
			// context.drawImage(imageElement, 0, 0);
			// var base64Image = canvas.toDataURL("image/jpeg");

			// //Removes the Data Type Prefix 
			// //And set the view model to the new value
			// var a = base64Image.replace(/data:image\/jpeg;base64,/g, '');
			//  localStorage.setItem("ImageURI",scope.step);
		});
	};

	$scope.upload = function(form) {
		console.log(form);

		if (form.$invalid) {
			return false;
		}
		// profile_pic = profile_pic1.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
		// var fd = new FormData();

		// fd.append('firstname', $scope.userdata.firstname);
		// fd.append('lastname', $scope.userdata.lastname);
		// fd.append('primaryPhone', $scope.userdata.primaryPhone);
		// fd.append('email', $scope.userdata.email);

		var fd = {};
		fd.firstname = $scope.userdata.firstname;
		fd.lastname = $scope.userdata.lastname;
		fd.primaryPhone = $scope.userdata.primaryPhone;
		fd.email = $scope.userdata.email;
		// fd.append('cars', $scope.userdata.cars);
		// if ($scope.fileurl) {
		// 	console.log("File",$scope.fileurl);
		// 	var file = $scope.fileurl;
		// 	fd.append('profile_pic', file);
		// 	console.log('File',file);
		// }

		// fd = "firstname="+$scope.userdata.firstname+"&lastname=" + $scope.userdata.lastname + "&primaryPhone=" + $scope.userdata.primaryPhone + "&email=" + $scope.userdata.email;
		$http({
			method: 'PUT',
			data: fd,
			url: configService.getFullServiceUrl('accounts/' + $scope.userdata.id),
			// withCredentials: true,
			headers: configService.getSignedHeader({
				'Content-Type': 'application/json'
			}),
			// transformRequest: angular.identity
		}).then(function(data, status, headers, config) {
			SweetAlert.swal({
				title: "Updated!",
				text: "Your details have been updated!",
				timer: 3000,
				showConfirmButton: false
			});
			$scope.editMode = false;
			$log.info(data);
			$('.close-animatedModal').trigger('click');
		}, function(data, status, header, config) {
			$scope.ResponseDetails = data;
			$log.info($scope.PostDataResponse);
			SweetAlert.swal({
				title: "OOPs!",
				text: "It seems there was some error.Try Again!.",
				timer: 3000,
				showConfirmButton: false
			});
		});
	};
	$scope.payment_methods = [];
	$scope.get_payment_method = function(package_id) {
		$http({
			method: "GET",
			url: configService.getFullServiceUrl('productPackages/' + package_id + '/paymentConfigurations'),
			headers: configService.getSignedHeader()
		}).then(function(response) {
			var data = response.data;
			console.log("Payment methods", data);
			// $scope.payment_methods = 
		}, function(err) {
			console.log(err);
		});
	}


	if (sessionStorage.getItem('productPackageId')) {
		$scope.get_payment_method(sessionStorage.getItem('productPackageId'));
	}

	$http({
		method: "GET",
		url: configService.getEnvConfig().apiURL + '/accounts/my',
		headers: configService.getSignedHeader()
	}).then(function(response) {
		var data = response.data;
		localStorage.setItem("account_id", data.id);
		sessionStorage.setItem("productPackageId", data.productPackageId);
		$scope.get_payment_method(data.productPackageId);
		console.log('User Data', data);
		$scope.userdata = data;
	}, function(err) {
		console.log(err);
	});


}
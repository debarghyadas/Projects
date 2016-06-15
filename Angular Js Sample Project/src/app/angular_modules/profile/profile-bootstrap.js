require(['angular_modules/profile/profileApp'], function() {
	$("#modal01").animatedModal({
		// animatedIn:'lightSpeedIn',
		// animatedOut:'bounceOutDown',
		color: '#ffffff',
		// Callbacks
		beforeOpen: function() {
			console.log("The animation was called");
		},
		afterOpen: function() {
			console.log("The animation is completed");
		},
		beforeClose: function() {
			console.log("The animation was called");
		},
		afterClose: function() {
			console.log("The animation is completed");
		}
	});

	angular.bootstrap(document, ['ProfileApp']);
});
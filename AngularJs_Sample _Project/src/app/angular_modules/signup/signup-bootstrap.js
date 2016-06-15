require(['angular_modules/signup/signupApp'], function() {
	$("#phoneNumber").intlTelInput({
		// allowDropdown: false,
		// autoHideDialCode: false,
		// autoPlaceholder: false,
		// dropdownContainer: "body",
		// excludeCountries: ["us"],
		geoIpLookup: function(callback) {
			$.get("//freegeoip.net/json/",function(resp) {
				var countryCode = (resp && resp.country_code) ? resp.country_code : "";
				callback(countryCode);
				// console.log(resp);
			});
		},
		initialCountry: "auto",
		nationalMode: false,
		numberType: "MOBILE",
		// onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
		// preferredCountries: ['cn', 'jp'],
		separateDialCode: true,
		utilsScript: "app/Webjs/utils.js"
	});

  // window.REMODAL_GLOBALS = {
  //   NAMESPACE: 'remodal',
  //   DEFAULTS: {
  //     hashTracking: true,
  //     closeOnConfirm: true,
  //     closeOnCancel: true,
  //     closeOnEscape: true,
  //     closeOnOutsideClick: true,
  //     modifier: ''
  //   }
  // };
	/*$('[data-remodal-id=modal]').remodal({
    // modifier: 'with-red-theme'
  });*/



	angular.bootstrap(document, ['SignupApp']);
});
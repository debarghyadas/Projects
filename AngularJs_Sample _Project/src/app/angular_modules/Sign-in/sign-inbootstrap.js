var inst, inst_validate_otp, inst_reset_password;
require(['angular_modules/Sign-in/sign-inapp'], function() {

  var options = {
    hashTracking: false
  };

  inst = $('[data-remodal-id=modal]').remodal(options);

  $('#modal-forget_pass').click(function(e) {
    e.preventDefault();
    inst.open();
  });

  inst_validate_otp = $('[data-remodal-id=modal-validate-otp]').remodal(options);
  inst_reset_password = $('[data-remodal-id=modal-reset-password]').remodal(options);

  $("#first_field").intlTelInput({
    // allowDropdown: false,
    // autoHideDialCode: false,
    autoPlaceholder: false,
    // dropdownContainer: "body",
    // excludeCountries: ["us"],
    geoIpLookup: function(callback) {
      $.get("//freegeoip.net/json/", function(resp) {
        var countryCode = (resp && resp.country_code) ? resp.country_code : "";
        callback(countryCode);
        // console.log(resp);
      });
    },
    initialCountry: "auto",
    nationalMode: false,
    // numberType: "MOBILE",
    // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    preferredCountries: ['se', 'us'],
    separateDialCode: true,
    utilsScript: "app/Webjs/utils.js"
  });


  // $('#modal-validate_otp').click(function(e) {
  //   e.preventDefault();
  //   inst.open();
  // });
  // $('#modal-reset_password').click(function(e) {
  //   e.preventDefault();
  //   inst.open();
  // });



  angular.bootstrap(document, ['LoginApp']);
});
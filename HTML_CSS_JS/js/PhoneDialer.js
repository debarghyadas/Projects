
function PhoneDialer() {
    this.resultCallback = null; // Function
}
PhoneDialer.prototype.dial = function(phoneNmber){    
    cordova.exec(null, null, "PhoneDialer", "call", [phoneNmber]);
}
cordova.addConstructor(function()  {    
                       if(!window.plugins)
                       {
                       window.plugins = {};
                       }

                       // shim to work in 1.5 and 1.6
                       if (!window.Cordova) {
                       window.Cordova = cordova;
                       };

                       window.plugins.phoneDialer = new PhoneDialer();
                       });

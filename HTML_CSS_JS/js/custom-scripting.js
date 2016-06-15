// This has to run before jquery.mobile-1.1.0.js has been loaded
$( document ).bind( "mobileinit",  function() {      
    // on mobileinit set all listview widgets to use the startsWith filter method by default
	 // $.mobile.autoInitializePage = false;
	$.mobile.ignoreContentEnabled=true;
});


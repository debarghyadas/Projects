

function googleTranslateElementInit() {
	new google.translate.TranslateElement({
		pageLanguage: 'en',
		includedLanguages: 'da,de,en,es,fi,it,no,sv',
		layout: google.translate.TranslateElement.InlineLayout.SIMPLE
	}, 'google_translate_element');
}

function set_cookie(name, value) {
	document.cookie = name + '=' + value + '; Path=/;';
}

function delete_cookie(name) {
	document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function logout() {

	swal({
			title: "Are you sure?",
			text: "You want to logout!",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#DD6B55",
			confirmButtonText: "Yes, log me out!",
			closeOnConfirm: false
		},
		function() {
			delete_cookie('token');
			//localStorage.clear();
			sessionStorage.removeItem('user_logged_in');
			sessionStorage.removeItem('logged_in_user_id');
			 sessionStorage.clear();
			document.location.href = "sign-in";
		});
}

var tmt;

function jsettime () {
    tmt = setTimeout(function () {
		jtest();
		console.log('callin timeout ');
	},6000);
	console.log('callin jsettime');
}


function jtest () {
	console.log('callin jtest ');
	if(window.jQuery)
	{
		console.log('jquery found');
	  var placeholders = document.querySelectorAll('input[placeholder]');

if (placeholders.length) {
     // convert to array
    placeholders = Array.prototype.slice.call(placeholders);
    
    // copy placeholder text to a hidden div
    var div = $('<div id="placeholders" style="display:none;"></div>');
    
    placeholders.forEach(function(input){
      var text = input.placeholder;
      div.append('<div>' + text + '</div>');    
    });
    
    $('body').append(div);
    
    // save the first placeholder in a closure
    var originalPH = placeholders[0].placeholder;
    
    // check for changes and update as needed
    setInterval(function(){
      if (isTranslated()) {
        updatePlaceholders();
        originalPH = placeholders[0].placeholder;
      }
    }, 500);
    
    // hoisted ---------------------------
    function isTranslated() { // true if the text has been translated
       var currentPH = $($('#placeholders > div')[0]).text();
       return !(originalPH == currentPH);
    }
    
    function updatePlaceholders() {
      $('#placeholders > div').each(function(i, div){
        placeholders[i].placeholder = $(div).text();
      });
    }
}


	   clearTimeout(tmt);
	}else{
		console.log('jquery not found');
		jsettime();
	}
}

jsettime();


// setTimeout(function(){
// $(function(){



//  }, 5000);


// })
function loadElementCheckLogin() {
	console.log('Element is lodaded');
	var logged_in = sessionStorage.getItem('user_logged_in');
	if (logged_in) {
		var els = document.getElementsByClassName('hideOnLogout');
		if (els) {
			for (var i = 0; i < els.length; i++) {
				els[i].className += ' showNow';
			}
		}
	} else {
		var els = document.getElementsByClassName('showOnLogin');
		console.log('logged Elements', els);
		if (els) {
			for (var i = 0; i < els.length; i++) {
				els[i].className += ' hideNow';
			}
		}

	}
}

document.addEventListener('DOMContentLoaded', function() {
	loadElementCheckLogin();
});
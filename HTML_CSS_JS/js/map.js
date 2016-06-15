 var storeObject1 = {
    		  search   : ''
    		    
    		}


function ReverseGeocode(latitude, longitude){
    var reverseGeocoder = new google.maps.Geocoder();
    var currentPosition = new google.maps.LatLng(latitude, longitude);
    reverseGeocoder.geocode({'latLng': currentPosition}, function(results, status) {
 
            if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                    	localStorage.setItem("ADDRESS-CUR","");
                    	localStorage.setItem("ADDRESS-CUR",results[0].formatted_address);
                   	    $("#pac-input3").val(localStorage.getItem("ADDRESS-CUR"));
                   	  $("#autocomplete4").val(localStorage.getItem("ADDRESS-CUR"));
                    //alert('Address : ' + results[0].formatted_address + ',' + 'Type : ' + results[0].types);
                    }
            else {
                     //alert('Unable to detect your address.');
                    }
        } else {
            //alert('Unable to detect your address.');
        }
    });
}
/*function GetLocation() {
	 var address = document.getElementById("pac-input3").value;
	  if(add != localStorage.getItem("ADDRESS-CUR")){
			alert("000"); 
			
			 var geocoder = new google.maps.Geocoder();
	          geocoder.geocode({ 'address': address }, function (results, status) {
			        if (status == google.maps.GeocoderStatus.OK) {
			            var latitude = results[0].geometry.location.lat();
			            var longitude = results[0].geometry.location.lng();
			            alert("Latitude: " + latitude + "\nLongitude: " + longitude);
			        } else {
			            alert("Request failed.")
			        }
			    });
		
	 }
	    
}*/
 function show_map(lat ,long){
	 
	    	
	    	setTimeout(function(){  $('.custom-loader').css({'display':'none'});  }, 6000);
	 
	 setTimeout(function(){ 
		   
			//navigator.geolocation.getCurrentPosition(onSuccess, onError);
			//alert("55");
		
		 var mapCanvas = document.getElementById('map_canvas');
		  var map;
		    var elevator;
		    var bounds = new google.maps.LatLngBounds();
		    var marker =[];
		    var myOptions = {
			        zoom: 17,
			        center: new google.maps.LatLng(lat , long),
			        panControl: true,
			        disableDefaultUI: true,
			        mapTypeId: 'roadmap'
			    };
		    map = new google.maps.Map(mapCanvas, myOptions);
		    
		    //alert("5"+map);
			//searchField(map);
			
			var contentString = '<div class="fixed-info">'+
		      
		      ' <span class="info-msg">'+localStorage.getItem("ADDRESS-CUR")+'</span>'+
		      
		      ' </div> ';
			 var infowindow = new google.maps.InfoWindow({
			    
			      content: contentString
			   
			    });
			 
			 google.maps.event.addListener(infowindow, 'domready', function() {

				   // Reference to the DIV which receives the contents of the infowindow using jQuery
				   var iwOuter = $('.gm-style-iw');

				   /* The DIV we want to change is above the .gm-style-iw DIV.
				    * So, we use jQuery and create a iwBackground variable,
				    * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
				    */
				   var iwBackground = iwOuter.prev();

				   // Remove the background shadow DIV
				   iwBackground.children(':nth-child(2)').css({'display' : 'none'});

				   // Remove the white background DIV
				   iwBackground.children(':nth-child(4)').css({'display' : 'none'});
				   
				   iwBackground.children(':nth-child(1)').css({'display' : 'none'});

				// Moves the arrow 76px to the left margin 
				iwBackground.children(':nth-child(3)').css({'display' : 'none'});
				
				var iwCloseBtn = iwOuter.next();

				// Apply the desired effect to the close button
				iwCloseBtn.css({'display' : 'none'});

				// The API automatically applies 0.7 opacity to the button after the mouseout event.
				// This function reverses this event to the desired value.
				


				});
		/*	 var infowindow = new google.maps.InfoWindow({
				    content: localStorage.getItem("ADDRESS-CUR")
				  });*/
	            marker =  new google.maps.Marker({
	              position:new google.maps.LatLng(lat , long),
	              icon: 'img/ico1.png',
	              title: localStorage.getItem("ADDRESS-CUR"),
	              map: map
	          });
	           
	         /*  marker.addListener('click', function() {
	        	   infowindow.open(map, marker);
	                
	              });*/
	           
	      
	           
	           // alert("4"+map);
	            infowindow.open(map, marker);
	     
	          bounds.extend(new google.maps.LatLng(lat , long));
	          $('.custom-loader').css({'display':'none'}); 

	       
	      
	     // alert(my_location);
	      
	      
	         
		}, 3000);
		 
	   
	 
 }
 
 
 
function mappay(lat ,long){
	//alert("55");
	
	  $("#pac-input4").val(localStorage.getItem("ADDRESS-CUR"));
	 setTimeout(function(){ 
		   
			//navigator.geolocation.getCurrentPosition(onSuccess, onError);
			//alert("55");
		
		 var mapCanvas = document.getElementById('map_can');
		  var map;
		    var elevator;
		    var bounds = new google.maps.LatLngBounds();
		    var marker =[];
		    var myOptions = {
			        zoom: 17,
			        center: new google.maps.LatLng(lat , long),
			        panControl: true,
			        disableDefaultUI: true,
			        mapTypeId: 'roadmap'
			    };
		    map = new google.maps.Map(mapCanvas, myOptions);
		

		    
		   // alert("5"+map);
		   // showaddpayment(map);
			
			
			
			var contentString = '<div class="fixed-info">'+
		      
		      ' <span class="info-msg">'+localStorage.getItem("ADDRESS-CUR")+'</span>'+
		      
		      ' </div> ';
			 var infowindow = new google.maps.InfoWindow({
			    
			      content: contentString
			   
			    });
			 
			 google.maps.event.addListener(infowindow, 'domready', function() {

				   // Reference to the DIV which receives the contents of the infowindow using jQuery
				   var iwOuter = $('.gm-style-iw');

				   /* The DIV we want to change is above the .gm-style-iw DIV.
				    * So, we use jQuery and create a iwBackground variable,
				    * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
				    */
				   var iwBackground = iwOuter.prev();

				   // Remove the background shadow DIV
				   iwBackground.children(':nth-child(2)').css({'display' : 'none'});

				   // Remove the white background DIV
				   iwBackground.children(':nth-child(4)').css({'display' : 'none'});
				   
				   iwBackground.children(':nth-child(1)').css({'display' : 'none'});

				// Moves the arrow 76px to the left margin 
				iwBackground.children(':nth-child(3)').css({'display' : 'none'});
				
				var iwCloseBtn = iwOuter.next();

				// Apply the desired effect to the close button
				iwCloseBtn.css({'display' : 'none'});

				// The API automatically applies 0.7 opacity to the button after the mouseout event.
				// This function reverses this event to the desired value.
				


				});
		/*	 var infowindow = new google.maps.InfoWindow({
				    content: localStorage.getItem("ADDRESS-CUR")
				  });*/
	            marker =  new google.maps.Marker({
	              position:new google.maps.LatLng(lat , long),
	              icon: 'img/ico1.png',
	              title: localStorage.getItem("ADDRESS-CUR"),
	              map: map
	          });
	           
	         /*  marker.addListener('click', function() {
	        	   infowindow.open(map, marker);
	                
	              });*/
	           
	      
	           
	           // alert("4"+map);
	            infowindow.open(map, marker);
	          bounds.extend(new google.maps.LatLng(lat , long));
	          $('.custom-loader').css({'display':'none'}); 

	       
	      
	     // alert(my_location);
	      
	      
	         
		}, 1000);
		 
	   
	 
 }


var onSuccess = function(position) {
	 $('.custom-loader').css({'display':'block'}); 
	 //var add = $("#pac-input3").val();
	 localStorage.setItem("timeispassing","false");
 
	
	
  
	  ReverseGeocode(position.coords.latitude , position.coords.longitude );
	  localStorage.setItem("lat","");
	  localStorage.setItem("lon", "");
	  localStorage.setItem("lat",position.coords.latitude);
	  localStorage.setItem("lon", position.coords.longitude);
	  
	  
	get_no_of_girls(position.coords.latitude , position.coords.longitude);
	
	show_map(position.coords.latitude , position.coords.longitude);
	   
   /* alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');*/
};

// onError Callback receives a PositionError object
//
function onError(error) {
   /* alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');*/
	 localStorage.setItem("timeispassing","false");
	 
	 switch(error.code) {
     case error.PERMISSION_DENIED:
          //localStorage.setItem("msg","You denied the request for Geolocation.");
    	  ReverseGeocode("36.1699","-115.1398" );
    	  localStorage.setItem("lat","");
    	  localStorage.setItem("lon", "");
    	  localStorage.setItem("lat","36.1699");
  		  localStorage.setItem("lon","-115.1398");
    	  
    	  
    	get_no_of_girls("36.1699","-115.1398");
    	
    	show_map("36.1699","-115.1398");
          //document.location.href = "404.html";
         break;
     case error.POSITION_UNAVAILABLE:
       
        //localStorage.setItem("msg", "Location information is unavailable.");
    	  ReverseGeocode("36.1699","-115.1398" );
    	  localStorage.setItem("lat","");
    	  localStorage.setItem("lon", "");
    	  localStorage.setItem("lat","36.1699");
  		  localStorage.setItem("lon","-115.1398");
    	  
    	  
    	get_no_of_girls("36.1699","-115.1398");
    	
    	show_map("36.1699","-115.1398");
        //document.location.href = "404.html";
         break;
     case error.TIMEOUT:
       
       // localStorage.setItem("msg", "The request to get user location timed out.");
    	  ReverseGeocode("36.1699","-115.1398" );
    	  localStorage.setItem("lat","");
    	  localStorage.setItem("lon", "");
    	  localStorage.setItem("lat","36.1699");
  		  localStorage.setItem("lon","-115.1398");
    	  
    	  
    	get_no_of_girls("36.1699","-115.1398");
    	
    	show_map("36.1699","-115.1398");
        //document.location.href = "404.html";
         break;
     case error.UNKNOWN_ERROR:
         
       // localStorage.setItem("msg", "An unknown error occurred.");
    	  ReverseGeocode("36.1699","-115.1398");
    	  localStorage.setItem("lat","");
    	  localStorage.setItem("lon", "");
    	  localStorage.setItem("lat","36.1699");
  		  localStorage.setItem("lon","-115.1398");
    	  
    	  
    	get_no_of_girls("36.1699","-115.1398");
    	
    	show_map("36.1699","-115.1398");
        //document.location.href = "404.html";
         break;
 }
}

function search(){
	 $("#alterrem").empty();
	
	 var uid =  localStorage.getItem("UNIQUE-ID");

	 // alert(uid);	
		jQuery.ajax({
	           type: 'POST',
	           beforeSend: function() {
	         	 
	        	//   $('.custom-loader').css({'display':'block'}); 
	          
	          }, //Show spinner
	            complete: function() {
	             
	             //setTimeout(function() {
	            //	 $('.custom-loader').css({'display':'none'}); 
	                     //   }, 2000);
	             
	             
	           }, //Hide spinner
	             url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/get_places',
	             data: {
	             tag: 'get_places',
	             uid : uid,
	           
	            },
	             
	             success: function(response) {
	            // alert(response);
	             var jsObject = JSON.parse(response);
	             var result = jsObject.status;
	             var data_home = jsObject.data.home;
	             var data_work = jsObject.data.work;
	             var data_hotel = jsObject.data.hotel;
	            // alert(data_work);
	             //var girl_id = jsObject.data.id_params[0];
	            // localStorage.setItem("girl_id", girl_id);
	              if(result == 1){
	            	  
	            	if(!data_home == '' && !data_work == '' && data_hotel == ''){
	            		//alert("00");
	            		localStorage.setItem("flag1", "00");
	            	  localStorage.setItem("home-add1", data_home);
	            	  localStorage.setItem("work-add1", data_work);
	            	  localStorage.setItem("hotel-add1", "");
	            	 
                      $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon" id="ico1"><i class="fa fa-search"></i></div><div class="form-row"><input placeholder="Enter Your Location" value="" type="text" class="form-control cs" data-role="none" onclick="gotorem();" id="autocomplete4"></div></li><li class="clearfix" id ="home_div" onclick="go_home1();" ><div class="icon"><i class="fa fa-home"></i></div><div class="place-name" >Home</div><div class="place-address"  id="home-add1">'+data_home+'</div></li><li class="clearfix" id ="work_div" onclick="go_work1();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Work</div><div class="place-address" id="work-add1">'+data_work+'</div></li><li class="clearfix" id="hotel_div" onclick="init_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name" >Add Hotel</div><div class="place-address" id="hotel-add1"></div></li>');
                      setTimeout(function() {
                    	  $('.cs').clearSearch();
                    	  $.mobile.navigate("#removeplacealter",{transition: "fade", reverse: false});
                      }, 100);
                     // $.mobile.navigate("#removeplacealter",{transition: "slide", reverse: false});
	            	}
	            	else if(!data_home == '' && data_work == '' && data_hotel == ''){
	               		//alert("01");
	               		localStorage.setItem("flag1", "01");
		            	  localStorage.setItem("home-add1", data_home);
		            	  localStorage.setItem("work-add1", "");
		            	  localStorage.setItem("hotel-add1", "");
		            	     setTimeout(function() {
		            	    	 $('.cs').clearSearch();
		                    	  $.mobile.navigate("#removeplacealter",{transition: "fade", reverse: false});
		                      }, 100);
		            	  $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon" id="ico1"><i class="fa fa-search"></i></div><div class="form-row"><input placeholder="Enter Your Location" value="" type="text" class="form-control cs" data-role="none" onclick="gotorem();" id="autocomplete4"></div></li><li class="clearfix" id ="home_div" onclick="go_home1();" ><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Home</div><div class="place-address" id="home-add1">'+data_home+'</div></li><li class="clearfix" id ="work_div" onclick="wo();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Add Work</div><div class="place-address" id="work-add1" ></div></li><li class="clearfix" id="hotel_div" onclick="init_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name">Add Hotel</div><div class="place-address" id="hotel-add1"></div></li>');
		            	  $('.cs').clearSearch();
		            	  
		            	}
	            	else if(!data_work == '' && data_home == '' && data_hotel == ''){
	               		//alert("02");
	               		localStorage.setItem("flag1", "02");
		            	  localStorage.setItem("home-add1", "");
		            	  localStorage.setItem("work-add1", data_work);
		            	  localStorage.setItem("hotel-add1", "");
		            	
		             $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon" id="ico1"><i class="fa fa-search"></i></div><div class="form-row><input placeholder="Enter Your Location" value="" type="text" class="form-control cs" data-role="none" onclick="gotorem();" id="autocomplete4"></div></li><li class="clearfix" id ="home_div" onclick="ho();"><div class="icon"><i class="fa fa-home"></i></div><div class="place-name"> Add Home</div><div class="place-address"></div></li><li class="clearfix" id ="work_div" onclick="go_work1();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Work</div><div class="place-address" >'+data_work+'</div></li><li class="clearfix" id="hotel_div" onclick="init_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name" >Add Hotel</div><div class="place-address"></div></li>');
		             setTimeout(function() {
		            	 $('.cs').clearSearch();
                   	  $.mobile.navigate("#removeplacealter",{transition: "fade", reverse: false});
                     }, 100);
		            	}
	            	else if(!data_hotel == '' && data_work == '' && data_home == ''){
	               	//alert("03");
	               		localStorage.setItem("flag1", "03");
		            	  localStorage.setItem("home-add1","");
		            	  localStorage.setItem("work-add1", "");
		            	  localStorage.setItem("hotel-add1", data_hotel);
		            	
		            	   $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon" id="ico1"><i class="fa fa-search"></i></div><div class="form-row"><input placeholder="Enter Your Location" value="" type="text" class="form-control cs" data-role="none" onclick="gotorem();"  id="autocomplete4"></div></li><li class="clearfix" id ="home_div" onclick="ho();" ><div class="icon"><i class="fa fa-home"></i></div><div class="place-name"> Add Home</div><div class="place-address"></div></li><li class="clearfix" id ="work_div" onclick="wo();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Add Work</div><div class="place-address" ></div></li><li class="clearfix" id="hotel_div" onclick="go_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name" > Hotel</div><div class="place-address">'+data_hotel+'</div></li>');
		            	     setTimeout(function() {
		            	    	 $('.cs').clearSearch();
		                    	  $.mobile.navigate("#removeplacealter",{transition: "fade", reverse: false});
		                      }, 100);
		            	  
		            	}
	            	else if(!data_home == '' && !data_hotel == '' && data_work == ''){
	            			//alert("04");
	            			localStorage.setItem("flag1", "04");
	            		 localStorage.setItem("home-add1", data_home);
		            	  localStorage.setItem("work-add1", "");
		            	  localStorage.setItem("hotel-add1", data_hotel);
		            	  // $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon"><i class="fa fa-search"></i></div><div class="form-row"><input placeholder="" value="" type="text" class="form-control cs" data-role="none" id="autocomplete4"></div></li><li class="clearfix" id ="home_div" onclick="go_home1();" ><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Home</div><div class="place-address">'+data_home+'</div><a href="#removeplace5" class="edit-place"><i class="fa fa-pencil"></i></a></li><li class="clearfix" id ="work_div" onclick="wo();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Add Work</div><div class="place-address"></div><a href="#removeplace6" class="edit-place"><i class="fa fa-pencil"></i></a></li><li class="clearfix" id="hotel_div" onclick="go_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name" > Hotel</div><div class="place-address">'+data_hotel+'</div><a href="#removeplace7" class="edit-place"><i class="fa fa-pencil"></i></a></li>');
		      
$("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon" id="ico1"><i class="fa fa-search"></i></div><div class="form-row"><input placeholder="Enter Your Location" value="" type="text" class="form-control cs" data-role="none" onclick="gotorem();" id="autocomplete4"></div></li><li class="clearfix" id ="home_div" onclick="go_home1();" ><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Home</div><div class="place-address">'+data_home+'</div></li><li class="clearfix" id ="work_div" onclick="wo();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Add Work</div><div class="place-address" ></div></li><li class="clearfix" id="hotel_div" onclick="go_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name" > Hotel</div><div class="place-address">'+data_hotel+'</div></li>');
setTimeout(function() {
	 $('.cs').clearSearch();
	  $.mobile.navigate("#removeplacealter",{transition: "fade", reverse: false});
}, 100);
	            	}
	            	else if(!data_work == '' && !data_hotel == '' && data_home == ''){
	            		//alert("05");
	            		localStorage.setItem("flag1", "05");
	            		  localStorage.setItem("home-add1", "");
		            	  localStorage.setItem("work-add1", data_work);
		            	  localStorage.setItem("hotel-add1", data_hotel);
		            	 
		           	   $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon" id="ico1"><i class="fa fa-search"></i></div><div class="form-row"><input placeholder="Enter Your Location" value="" type="text" class="form-control cs" data-role="none" onclick="gotorem();" id="autocomplete4"></div></li><li class="clearfix" id ="home_div" onclick="ho();"><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Add Home</div><div class="place-address"></div></li><li class="clearfix" id ="work_div" onclick="go_work1();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Work</div><div class="place-address" >'+data_work+'</div></li><li class="clearfix" id="hotel_div" onclick="go_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name"> Hotel</div><div class="place-address">'+data_hotel+'</div></li>');
		               setTimeout(function() {
		            	   $('.cs').clearSearch();
	                    	  $.mobile.navigate("#removeplacealter",{transition: "fade", reverse: false});
	                      }, 100);
	            	}
	            	
	            	else if(data_work  && data_home && data_hotel){
	            			//alert("06");
	            			localStorage.setItem("flag1", "06");
	            		  localStorage.setItem("home-add1", data_home);
		            	  localStorage.setItem("work-add1", data_work);
		            	  localStorage.setItem("hotel-add1", data_hotel);
		            	
		            	  $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon" id="ico1"><i class="fa fa-search"></i></div><div class="form-row"><input placeholder="Enter Your Location" value="" type="text" class="form-control cs" data-role="none" onclick="gotorem();" id="autocomplete4"></div></li><li class="clearfix" id ="home_div" onclick="go_home1();" ><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Home</div><div class="place-address">'+data_home+'</div></li><li class="clearfix" id ="work_div" onclick="go_work1();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name"> Work</div><div class="place-address" >'+data_work+'</div></li><li class="clearfix" id="hotel_div" onclick="go_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name"> Hotel</div><div class="place-address">'+data_hotel+'</div></li>');
		            	     setTimeout(function() {
		            	    	 $('.cs').clearSearch();
		                    	  $.mobile.navigate("#removeplacealter",{transition: "fade", reverse: false});
		                      }, 100);
	            		
	            	}
	            	else {
	            		//alert("07");
	            		localStorage.setItem("flag1", "07");
	            		  localStorage.setItem("home-add1", "");
		            	  localStorage.setItem("work-add1", "");
		            	  localStorage.setItem("hotel-add1", "");
		            	
		            	  $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon" id="ico1"><i class="fa fa-search"></i></div><div class="form-row"><input placeholder="Enter Your Location" value="" type="text" class="form-control cs" data-role="none" onclick="gotorem();" id="autocomplete4" ></div></li><li class="clearfix" id ="home_div" onclick="ho();" ><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Add Home</div><div class="place-address"></div></li><li class="clearfix" id ="work_div" onclick="wo();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Add Work</div><div class="place-address" ></div></li><li class="clearfix" id="hotel_div" onclick="init_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name" >Add Hotel</div><div class="place-address"></div></li>');
		            	     setTimeout(function() {
		            	    	 $('.cs').clearSearch();
		                    	  $.mobile.navigate("#removeplacealter",{transition: "fade", reverse: false});
		                      }, 100);   	
	            		
	            	}
	            	  
	            	  
	            	  
	            	  
	              }
	              else {
	            	  
	            	  swal("BOOKD", "Server problem!", "error");
	            	 /// $.mobile.navigate("#home",{transition: "slide", reverse: false});
	            	  
	              }
	             //	  swal("Flng", message, "success");
	     		 //$("#home-add").empty();
       		 //$("#home-add").prepend(localStorage.getItem("random-add"));
       	
       		
       		
	             	 // alert(localStorage.getItem("girl_id"));
	                  //$.mobile.navigate("#login",{transition: "slide", reverse: false});
	             
	           
	            
	             },
	             
	             error: function (response) {
	               // alert(JSON.stringify(response));
	            	 //swal("Flng", "OOPS!.Something Went Wrong with the server.Try Again", "error");
	             },
	           
	             
	             });
	
	 //$.mobile.navigate("#removeplace",{transition: "slidedown", reverse: false});
	
	
}

/*function search(home , work , hotel){
	var data_home = home;
	var data_work = work;
	var data_hotel = hotel;
	 $("#alterrem").empty();
	
		    	if(!data_home == '' && !data_work == '' && data_hotel == ''){
		    		//alert("00");
		    		localStorage.setItem("flag1", "00");
		    	  localStorage.setItem("home-add1", data_home);
		    	  localStorage.setItem("work-add1", data_work);
		    	  localStorage.setItem("hotel-add1", "");
		    	 
		          $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon" id="ico1"><i class="fa fa-search"></i></div><div class="form-row"><input placeholder="Enter Your Location" value="" type="text" class="form-control cs" data-role="none" onclick="gotorem();" id="autocomplete4"></div></li><li class="clearfix" id ="home_div" onclick="go_home1();" ><div class="icon"><i class="fa fa-home"></i></div><div class="place-name" >Home</div><div class="place-address"  id="home-add1">'+data_home+'</div></li><li class="clearfix" id ="work_div" onclick="go_work1();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Work</div><div class="place-address" id="work-add1">'+data_work+'</div></li><li class="clearfix" id="hotel_div" onclick="init_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name" >Add Hotel</div><div class="place-address" id="hotel-add1"></div></li>');
		          setTimeout(function() {
		        	  $('.cs').clearSearch();
		        	  $.mobile.navigate("#removeplacealter",{transition: "slide", reverse: false});
		          }, 3000);
		         // $.mobile.navigate("#removeplacealter",{transition: "slide", reverse: false});
		    	}
		    	else if(!data_home == '' && data_work == '' && data_hotel == ''){
		       		//alert("01");
		       		localStorage.setItem("flag1", "01");
		        	  localStorage.setItem("home-add1", data_home);
		        	  localStorage.setItem("work-add1", "");
		        	  localStorage.setItem("hotel-add1", "");
		        	     setTimeout(function() {
		        	    	 $('.cs').clearSearch();
		                	  $.mobile.navigate("#removeplacealter",{transition: "slide", reverse: false});
		                  }, 3000);
		        	  $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon" id="ico1"><i class="fa fa-search"></i></div><div class="form-row"><input placeholder="Enter Your Location" value="" type="text" class="form-control cs" data-role="none" onclick="gotorem();" id="autocomplete4"></div></li><li class="clearfix" id ="home_div" onclick="go_home1();" ><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Home</div><div class="place-address" id="home-add1">'+data_home+'</div></li><li class="clearfix" id ="work_div" onclick="wo();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Add Work</div><div class="place-address" id="work-add1" ></div></li><li class="clearfix" id="hotel_div" onclick="init_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name">Add Hotel</div><div class="place-address" id="hotel-add1"></div></li>');
		        	  $('.cs').clearSearch();
		        	  
		        	}
		    	else if(!data_work == '' && data_home == '' && data_hotel == ''){
		       		//alert("02");
		       		localStorage.setItem("flag1", "02");
		        	  localStorage.setItem("home-add1", "");
		        	  localStorage.setItem("work-add1", data_work);
		        	  localStorage.setItem("hotel-add1", "");
		        	
		         $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon" id="ico1"><i class="fa fa-search"></i></div><div class="form-row><input placeholder="Enter Your Location" value="" type="text" class="form-control cs" data-role="none" onclick="gotorem();" id="autocomplete4"></div></li><li class="clearfix" id ="home_div" onclick="ho();"><div class="icon"><i class="fa fa-home"></i></div><div class="place-name"> Add Home</div><div class="place-address"></div></li><li class="clearfix" id ="work_div" onclick="go_work1();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Work</div><div class="place-address" >'+data_work+'</div></li><li class="clearfix" id="hotel_div" onclick="init_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name" >Add Hotel</div><div class="place-address"></div></li>');
		         setTimeout(function() {
		        	 $('.cs').clearSearch();
		       	  $.mobile.navigate("#removeplacealter",{transition: "slide", reverse: false});
		         }, 3000);
		        	}
		    	else if(!data_hotel == '' && data_work == '' && data_home == ''){
		       	//alert("03");
		       		localStorage.setItem("flag1", "03");
		        	  localStorage.setItem("home-add1","");
		        	  localStorage.setItem("work-add1", "");
		        	  localStorage.setItem("hotel-add1", data_hotel);
		        	
		        	   $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon" id="ico1"><i class="fa fa-search"></i></div><div class="form-row"><input placeholder="Enter Your Location" value="" type="text" class="form-control cs" data-role="none" onclick="gotorem();"  id="autocomplete4"></div></li><li class="clearfix" id ="home_div" onclick="ho();" ><div class="icon"><i class="fa fa-home"></i></div><div class="place-name"> Add Home</div><div class="place-address"></div></li><li class="clearfix" id ="work_div" onclick="wo();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Add Work</div><div class="place-address" ></div></li><li class="clearfix" id="hotel_div" onclick="go_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name" > Hotel</div><div class="place-address">'+data_hotel+'</div></li>');
		        	     setTimeout(function() {
		        	    	 $('.cs').clearSearch();
		                	  $.mobile.navigate("#removeplacealter",{transition: "slide", reverse: false});
		                  }, 3000);
		        	  
		        	}
		    	else if(!data_home == '' && !data_hotel == '' && data_work == ''){
		    			//alert("04");
		    			localStorage.setItem("flag1", "04");
		    		 localStorage.setItem("home-add1", data_home);
		        	  localStorage.setItem("work-add1", "");
		        	  localStorage.setItem("hotel-add1", data_hotel);
		        	  // $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon"><i class="fa fa-search"></i></div><div class="form-row"><input placeholder="" value="" type="text" class="form-control cs" data-role="none" id="autocomplete4"></div></li><li class="clearfix" id ="home_div" onclick="go_home1();" ><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Home</div><div class="place-address">'+data_home+'</div><a href="#removeplace5" class="edit-place"><i class="fa fa-pencil"></i></a></li><li class="clearfix" id ="work_div" onclick="wo();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Add Work</div><div class="place-address"></div><a href="#removeplace6" class="edit-place"><i class="fa fa-pencil"></i></a></li><li class="clearfix" id="hotel_div" onclick="go_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name" > Hotel</div><div class="place-address">'+data_hotel+'</div><a href="#removeplace7" class="edit-place"><i class="fa fa-pencil"></i></a></li>');

		    $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon" id="ico1"><i class="fa fa-search"></i></div><div class="form-row"><input placeholder="Enter Your Location" value="" type="text" class="form-control cs" data-role="none" onclick="gotorem();" id="autocomplete4"></div></li><li class="clearfix" id ="home_div" onclick="go_home1();" ><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Home</div><div class="place-address">'+data_home+'</div></li><li class="clearfix" id ="work_div" onclick="wo();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Add Work</div><div class="place-address" ></div></li><li class="clearfix" id="hotel_div" onclick="go_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name" > Hotel</div><div class="place-address">'+data_hotel+'</div></li>');
		    setTimeout(function() {
		    $('.cs').clearSearch();
		    $.mobile.navigate("#removeplacealter",{transition: "slide", reverse: false});
		    }, 3000);
		    	}
		    	else if(!data_work == '' && !data_hotel == '' && data_home == ''){
		    		//alert("05");
		    		localStorage.setItem("flag1", "05");
		    		  localStorage.setItem("home-add1", "");
		        	  localStorage.setItem("work-add1", data_work);
		        	  localStorage.setItem("hotel-add1", data_hotel);
		        	 
		       	   $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon" id="ico1"><i class="fa fa-search"></i></div><div class="form-row"><input placeholder="Enter Your Location" value="" type="text" class="form-control cs" data-role="none" onclick="gotorem();" id="autocomplete4"></div></li><li class="clearfix" id ="home_div" onclick="ho();"><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Add Home</div><div class="place-address"></div></li><li class="clearfix" id ="work_div" onclick="go_work1();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Work</div><div class="place-address" >'+data_work+'</div></li><li class="clearfix" id="hotel_div" onclick="go_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name"> Hotel</div><div class="place-address">'+data_hotel+'</div></li>');
		           setTimeout(function() {
		        	   $('.cs').clearSearch();
		            	  $.mobile.navigate("#removeplacealter",{transition: "slide", reverse: false});
		              }, 3000);
		    	}
		    	
		    	else if(data_work  && data_home && data_hotel){
		    			//alert("06");
		    			localStorage.setItem("flag1", "06");
		    		  localStorage.setItem("home-add1", data_home);
		        	  localStorage.setItem("work-add1", data_work);
		        	  localStorage.setItem("hotel-add1", data_hotel);
		        	
		        	  $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon" id="ico1"><i class="fa fa-search"></i></div><div class="form-row"><input placeholder="Enter Your Location" value="" type="text" class="form-control cs" data-role="none" onclick="gotorem();" id="autocomplete4"></div></li><li class="clearfix" id ="home_div" onclick="go_home1();" ><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Home</div><div class="place-address">'+data_home+'</div></li><li class="clearfix" id ="work_div" onclick="go_work1();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name"> Work</div><div class="place-address" >'+data_work+'</div></li><li class="clearfix" id="hotel_div" onclick="go_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name"> Hotel</div><div class="place-address">'+data_hotel+'</div></li>');
		        	     setTimeout(function() {
		        	    	 $('.cs').clearSearch();
		                	  $.mobile.navigate("#removeplacealter",{transition: "slide", reverse: false});
		                  }, 3000);
		    		
		    	}
		    	else {
		    		//alert("07");
		    		localStorage.setItem("flag1", "07");
		    		  localStorage.setItem("home-add1", "");
		        	  localStorage.setItem("work-add1", "");
		        	  localStorage.setItem("hotel-add1", "");
		        	
		        	  $("#alterrem").append('<li class="edit-place-field clearfix"><div class="icon" id="ico1"><i class="fa fa-search"></i></div><div class="form-row"><input placeholder="Enter Your Location" value="" type="text" class="form-control cs" data-role="none" onclick="gotorem();" id="autocomplete4" ></div></li><li class="clearfix" id ="home_div" onclick="ho();" ><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Add Home</div><div class="place-address"></div></li><li class="clearfix" id ="work_div" onclick="wo();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Add Work</div><div class="place-address" ></div></li><li class="clearfix" id="hotel_div" onclick="init_hotel1();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name" >Add Hotel</div><div class="place-address"></div></li>');
		        	     setTimeout(function() {
		        	    	 $('.cs').clearSearch();
		                	  $.mobile.navigate("#removeplacealter",{transition: "slide", reverse: false});
		                  }, 3000);   	
		    		
		    	}
		          
		    	  
		          


	  
	  
	
	
}*/

function formatAMPM() {
	  var hours = date.getHours();
	  var minutes = date.getMinutes();
	  var ampm = hours >= 12 ? 'pm' : 'am';
	  hours = hours % 12;
	  hours = hours ? hours : 12; // the hour '0' should be '12'
	  minutes = minutes < 10 ? '0'+minutes : minutes;
	  var strTime = hours + ':' + minutes + ' ' + ampm;
	  return strTime;
	}

function hotel1(){
	
	   swal({
        title: "BOOKD",
        text: "Want to save this address as hotel?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes!",
        closeOnConfirm: false,
        closeOnCancel: true
        },
        
       
        function(isConfirm){
        
        	if (isConfirm) {  
        		 $('.custom-loader').css({'display':'none'}); 
        		 $('.custom-loader').css({'display':'none'}); 
        			//$.LoadingOverlay("hide"); 
        			
        	 		
             		 var uid =  localStorage.getItem("UNIQUE-ID");
                   var home = "";
                   var work = "";
                   var hotel =localStorage.getItem("random-add");
          			
          			jQuery.ajax({
          		           type: 'POST',
          		           beforeSend: function() {
          		         	 
          		        	 $('.custom-loader').css({'display':'block'});     
          		          
          		          }, //Show spinner
          		            complete: function() {
          		             
          		             setTimeout(function() {
          		            	 $('.custom-loader').css({'display':'none'}); 
          		                        }, 2000);
          		             
          		             
          		           }, //Hide spinner
          		             url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/update_place',
          		             data: {
          		             tag: 'update_place',
          		             uid : uid,
          		             home: home,
          		             work:work,
          		             hotel:hotel,
          		            },
          		             
          		             success: function(response) {
          		            // alert(response);
          		             var jsObject = JSON.parse(response);
          		             var result = jsObject.status;
          		            // var data = jsObject.data.count;
          		             //var girl_id = jsObject.data.id_params[0];
          		            // localStorage.setItem("girl_id", girl_id);
          		             if(result == 1){
          		             	
          		             //	  swal("Flng", message, "success");
          		         	    
          		        		 $("#hotel-add").empty();
          		        		 $("#hotel-add").prepend(localStorage.getItem("random-add"));
          		        		 
          		        		
          		        		swal({   title: "Saved!",   text: "Address has been saved as hotel!",   timer: 3000,   showConfirmButton: false });
          		             	 // alert(localStorage.getItem("girl_id"));
          		                  //$.mobile.navigate("#login",{transition: "slide", reverse: false});
          		             }
          		             else{
          		             	
          		             	 //swal("Flng", message, "error");
          		            	 swal("Saved!", "Something went wrong on the server front!", "success"); 
          		              $("#hotel-add").empty();
          		            	 
          		            	
          		             }
          		            
          		             },
          		             
          		             error: function (response) {
          		                //alert(JSON.stringify(response));
          		            	 //swal("Flng", "OOPS!.Something Went Wrong with the server.Try Again", "error");
          		             },
          		           
          		             
          		             });
          		 
                 		
               
               } 
        	else 
        	{   
        		
        		setTimeout(function() {
         		     
         		 // alert("00");
        			 $('.custom-loader').css({'display':'none'}); 
        			 $('.custom-loader').css({'display':'none'}); 
         		}, 1000)
        		        
        		//swal("Cancelled", "Your imaginary file is safe :)", "error"); 
        		
        		
             }
     
        });
    
	
	
}



function hotel(){
	
	   swal({
           title: "BOOKD",
           text: "Want to save this address as hotel?",
           type: "warning",
           showCancelButton: true,
           confirmButtonColor: "#DD6B55",
           confirmButtonText: "Yes!",
           closeOnConfirm: true,
           closeOnCancel: true
           },
           
          
           function(isConfirm){
           
           	if (isConfirm) {  
           		
        		
          		 var uid =  localStorage.getItem("UNIQUE-ID");
                var home = "";
                var work = "";
                var hotel =localStorage.getItem("sel-add");
       			
       			jQuery.ajax({
       		           type: 'POST',
       		           beforeSend: function() {
       		         	 
       		        	 $('.custom-loader').css({'display':'block'});           
       		          
       		          }, //Show spinner
       		            complete: function() {
       		             
       		             setTimeout(function() {
       		            	 $('.custom-loader').css({'display':'none'}); 
       		                        }, 2000);
       		             
       		             
       		           }, //Hide spinner
       		             url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/update_place',
       		             data: {
       		             tag: 'update_place',
       		             uid : uid,
       		             home: home,
       		             work:work,
       		             hotel:hotel,
       		            },
       		             
       		             success: function(response) {
       		             //alert(response);
       		             var jsObject = JSON.parse(response);
       		             var result = jsObject.status;
       		            // var data = jsObject.data.count;
       		             //var girl_id = jsObject.data.id_params[0];
       		            // localStorage.setItem("girl_id", girl_id);
       		             if(result == 1){
       		             	
       		             //	  swal("Flng", message, "success");
       		          	swal("Saved!", "Address has been saved as hotel.", "success"); 
       		             $("#hotel-add").empty();
       	           		 $("#hotel-add").prepend(localStorage.getItem("sel-add"));
       		             	 // alert(localStorage.getItem("girl_id"));
       		                  //$.mobile.navigate("#login",{transition: "slide", reverse: false});
       		             }
       		             else{
       		             	
       		             	 //swal("Flng", message, "error");
       		            	 swal("Saved!", "Something went wrong on the server front!", "success"); 
       		              $("#hotel-add").empty();
       		            	 
       		            	
       		             }
       		            
       		             },
       		             
       		             error: function (response) {
       		                //alert(JSON.stringify(response));
       		            	 //swal("Flng", "OOPS!.Something Went Wrong with the server.Try Again", "error");
       		             },
       		           
       		             
       		             });
       		 
              		
              	    
           		
           	    
           		 
           		
           	
                  } 
           	else 
           	{     
           		//swal("Cancelled", "Your imaginary file is safe :)", "error"); 
           		
           		
                }
        
           });
       
	
	
}




function work1(){
	
	   swal({
        title: "BOOKD",
        text: "Want to save this address as work?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes!",
        closeOnConfirm: false,
        closeOnCancel: true
        },
        
       
        function(isConfirm){
        
        	if (isConfirm) {  
        		 $('.custom-loader').css({'display':'block'}); 
        		 
        			
          		 var uid =  localStorage.getItem("UNIQUE-ID");
                var home = "";
                var work = localStorage.getItem("random-add");
                var hotel ="";
       			
       			jQuery.ajax({
       		           type: 'POST',
       		           beforeSend: function() {
       		         	 
       		        	 $('.custom-loader').css({'display':'block'});             
       		          
       		          }, //Show spinner
       		            complete: function() {
       		             
       		             setTimeout(function() {
       		            	 $('.custom-loader').css({'display':'none'}); 
       		                        }, 2000);
       		             
       		             
       		           }, //Hide spinner
       		             url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/update_place',
       		             data: {
       		             tag: 'update_place',
       		             uid : uid,
       		             home: home,
       		             work: work,
       		             hotel:hotel,
       		            },
       		             
       		             success: function(response) {
       		             //alert(response);
       		             var jsObject = JSON.parse(response);
       		             var result = jsObject.status;
       		            // var data = jsObject.data.count;
       		             //var girl_id = jsObject.data.id_params[0];
       		            // localStorage.setItem("girl_id", girl_id);
       		             if(result == 1){
       		             	
       		             //	  swal("Flng", message, "success");
       		         	 
       		        	     $("#work-add").empty();
       		        		 $("#work-add").prepend(localStorage.getItem("random-add"));
       		        		 
       		        		
       		        		swal("Saved!", "Address has been saved as work.", "success"); 
       		             	 // alert(localStorage.getItem("girl_id"));
       		                  //$.mobile.navigate("#login",{transition: "slide", reverse: false});
       		             }
       		             else{
       		             	
       		             	 //swal("Flng", message, "error");
       		            	 swal("Saved!", "Something went wrong on the server front!", "success"); 
       		              $("#work-add").empty();
       		            	 
       		            	
       		             }
       		            
       		             },
       		             
       		             error: function (response) {
       		                //alert(JSON.stringify(response));
       		            	 //swal("Flng", "OOPS!.Something Went Wrong with the server.Try Again", "error");
       		             },
       		           
       		             
       		             });
       		 
              		
              	    
           		
           	    
           		 
        		 
        	    
               } 
        	else 
        	{    
        		setTimeout(function() {
        			 $('.custom-loader').css({'display':'none'});          
        			//hotel1();	
        		}, 1000);
        		//hotel();
        		//swal("Cancelled", "Your imaginary file is safe :)", "error"); 
        		
             }
     
        });
    
	
}

function work(){
	
	   swal({
           title: "BOOKD",
           text: "Want to save this address as work?",
           type: "warning",
           showCancelButton: true,
           confirmButtonColor: "#DD6B55",
           confirmButtonText: "Yes!",
           closeOnConfirm: false,
           closeOnCancel: true
           },
           
          
           function(isConfirm){
           
           	if (isConfirm) { 
           		
           		
           		
       		 var uid =  localStorage.getItem("UNIQUE-ID");
             var home = "";
             var work = localStorage.getItem("sel-add");
             var hotel ="";
    			
    			jQuery.ajax({
    		           type: 'POST',
    		           beforeSend: function() {
    		         	 
    		        	   $('.custom-loader').css({'display':'block'});               
    		          
    		          }, //Show spinner
    		            complete: function() {
    		             
    		             setTimeout(function() {
    		            	 $('.custom-loader').css({'display':'none'}); 
    		                        }, 2000);
    		             
    		             
    		           }, //Hide spinner
    		             url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/update_place',
    		             data: {
    		             tag: 'update_place',
    		             uid : uid,
    		             home: home,
    		             work:work,
    		             hotel:hotel,
    		            },
    		             
    		             success: function(response) {
    		            // alert(response);
    		             var jsObject = JSON.parse(response);
    		             var result = jsObject.status;
    		            // var data = jsObject.data.count;
    		             //var girl_id = jsObject.data.id_params[0];
    		            // localStorage.setItem("girl_id", girl_id);
    		             if(result == 1){
    		             	
    		             //	  swal("Flng", message, "success");
    		            	swal("Saved!", "Address has been saved as work.", "success"); 
    		            	 $("#work-add").empty();
    		           		 $("#work-add").prepend(localStorage.getItem("sel-add"));
    		             	 // alert(localStorage.getItem("girl_id"));
    		                  //$.mobile.navigate("#login",{transition: "slide", reverse: false});
    		             }
    		             else{
    		             	
    		             	 //swal("Flng", message, "error");
    		            	 swal("Saved!", "Something went wrong on the server front!", "success"); 
    		            	 $("#work-add").empty();
    		            	 
    		            	
    		             }
    		            
    		             },
    		             
    		             error: function (response) {
    		                //alert(JSON.stringify(response));
    		            	 //swal("Flng", "OOPS!.Something Went Wrong with the server.Try Again", "error");
    		             },
    		           
    		             
    		             });
    		 
           		
           	    
           		 
           		
           	
                  } 
           	else 
           	{    
           		setTimeout(function() {
           			hotel();	
           		}, 1000);
           		//hotel();
           		//swal("Cancelled", "Your imaginary file is safe :)", "error"); 
           		
                }
        
           });
       
	
}

function init_hotel1(){
	
	localStorage.setItem("hotel100", "true");
	localStorage.setItem("home100", "false");
	localStorage.setItem("work100", "false");
	 $.mobile.navigate("#removeplace1",{transition: "slide", reverse: false});
	 init_hotel();
	
}

function init_hotel() {
	//alert("9890");
	
	//$("#autcomplete1").val(storeObject1.search); 
    //$('input#city').cityAutocomplete();
 var places =new google.maps.places.Autocomplete(
                                        (document.getElementById('autocomplete3')), {
                                        types: ['geocode']
                                        	//types: ['address']
                                       	  
                                        });
    
    google.maps.event.addListener(places, 'place_changed', function () {
    	// $("#save").hide();
        var place = places.getPlace();
        var address = place.formatted_address;
        var latitude = place.geometry.location.lat();
        var longitude = place.geometry.location.lng();
        localStorage.setItem("sel-lat", latitude);
        localStorage.setItem("sel-lon", longitude);
        localStorage.setItem("sel-add", address);
   
        swal({
            title: "BOOKD",
            text: "Want to save this address as hotel?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes!",
            closeOnConfirm: true,
            closeOnCancel: true
            },
            
           
            function(isConfirm){
            
            	if (isConfirm) {  
            		 
            		
             		 var uid =  localStorage.getItem("UNIQUE-ID");
                   var home = "";
                   var work = "";
                   var hotel =localStorage.getItem("sel-add");
          			
          			jQuery.ajax({
          		           type: 'POST',
          		           beforeSend: function() {
          		         	 
          		        	 $('.custom-loader').css({'display':'block'});         
          		          
          		          }, //Show spinner
          		            complete: function() {
          		             
          		             setTimeout(function() {
          		            	 $('.custom-loader').css({'display':'none'}); 
          		                        }, 2000);
          		             
          		             
          		           }, //Hide spinner
          		             url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/update_place',
          		             data: {
          		             tag: 'update_place',
          		             uid : uid,
          		             home: home,
          		             work:work,
          		             hotel:hotel,
          		            },
          		             
          		             success: function(response) {
          		             //salert(response);
          		             var jsObject = JSON.parse(response);
          		             var result = jsObject.status;
          		            // var data = jsObject.data.count;
          		             //var girl_id = jsObject.data.id_params[0];
          		            // localStorage.setItem("girl_id", girl_id);
          		             if(result == 1){
          		             	
          		             //	  swal("Flng", message, "success");
          		            	
          		       		swal({   title: "Saved!",   text: "Address has been saved as hotel!",   timer: 3000,   showConfirmButton: false });
          		             $("#hotel-add1").empty();
          	           		 $("#hotel-add1").prepend(localStorage.getItem("sel-add"));
          		             	
          		               search();
          		             }
          		             else{
          		             	
          		             	 //swal("Flng", message, "error");
          		       		swal({   title: "OOPS!",   text: "Something went wrong!",   timer: 3000,   showConfirmButton: false });
          		             
          		         //   $.mobile.navigate("#removeplacealter",{transition: "slide", reverse: false});
          		              search();
          		            $("#hotel-add1").empty();
          		            	 
          		            	
          		             }
          		            
          		             },
          		             
          		             error: function (response) {
          		                //alert(JSON.stringify(response));
          		            	 //swal("Flng", "OOPS!.Something Went Wrong with the server.Try Again", "error");
          		             },
          		           
          		             
          		             });
          		 
                 		
            		
                   } 
            	else 
            	{    
            		//swal("Cancelled", "Your imaginary file is safe :)", "error"); 
            		   
               		setTimeout(function() {
               		
               		}, 1000);
            		 //work();
                 }
         
            });
   
   		 
   		 
   	 
        
        
        
    });
    
    
}

function set_hot(){
	
	 $.mobile.navigate("#removeplace7",{transition: "slide", reverse: false});
	 init_hot();
	
	
	
}

function init_hot(){
	
	 var places =new google.maps.places.Autocomplete(
             (document.getElementById('autocomplete10')), {
             types: ['geocode']
            	// types: ['address']
           	  
             });

google.maps.event.addListener(places, 'place_changed', function () {
// $("#save").hide();
var place = places.getPlace();
var address = place.formatted_address;
var latitude = place.geometry.location.lat();
var longitude = place.geometry.location.lng();
localStorage.setItem("sel-lat", latitude);
localStorage.setItem("sel-lon", longitude);
localStorage.setItem("sel-add", address);

swal({
title: "BOOKD",
text: "Want to save this  address as new hotel?",
type: "warning",
showCancelButton: true,
confirmButtonColor: "#DD6B55",
confirmButtonText: "Yes!",
closeOnConfirm: true,
closeOnCancel: true
},


function(isConfirm){

if (isConfirm) {  


var uid =  localStorage.getItem("UNIQUE-ID");
var home = "";
var work = "";
var hotel =localStorage.getItem("sel-add");

jQuery.ajax({
  type: 'POST',
  beforeSend: function() {
	 
	  $('.custom-loader').css({'display':'block'});                
 
 }, //Show spinner
   complete: function() {
    
    setTimeout(function() {
    	 $('.custom-loader').css({'display':'none'}); 
               }, 2000);
    
    
  }, //Hide spinner
    url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/update_place',
    data: {
    tag: 'update_place',
    uid : uid,
    home: home,
    work:work,
    hotel:hotel,
   },
    
    success: function(response) {
    //salert(response);
    var jsObject = JSON.parse(response);
    var result = jsObject.status;
   // var data = jsObject.data.count;
    //var girl_id = jsObject.data.id_params[0];
   // localStorage.setItem("girl_id", girl_id);
    if(result == 1){
    	
    //	  swal("Flng", message, "success");
		swal({   title: "Saved!",   text: "Address has been saved as hotel!",   timer: 3000,   showConfirmButton: false });
    $("#hotel-add2").empty();
		 $("#hotel-add2").prepend(localStorage.getItem("sel-add"));
    	 // alert(localStorage.getItem("girl_id"));
		 setTimeout(function() {
			 $.mobile.navigate("#settings",{transition: "slide", reverse: false});
		 }, 3000);
		
    }
    else{
    	
    	 //swal("Flng", message, "error");
		swal({   title: "OOPS!",   text: "Something went wrong!",   timer: 3000,   showConfirmButton: false });
     $("#hotel-add2").empty();
     setTimeout(function() {
		 $.mobile.navigate("#settings",{transition: "slide", reverse: false});
	 }, 3000);
	
   	
    }
   
    },
    
    error: function (response) {
       //alert(JSON.stringify(response));
   	 //swal("Flng", "OOPS!.Something Went Wrong with the server.Try Again", "error");
    },
  
    
    });



} 
else 
{    
//swal("Cancelled", "Your imaginary file is safe :)", "error"); 

setTimeout(function() {

}, 1000);
//work();
}

});







});

	
	
}

function set_wo(){
	 $.mobile.navigate("#removeplace6",{transition: "slide", reverse: false});
	 init_wo();
	
}

function init_wo(){
	
	var places =new google.maps.places.Autocomplete(
            (document.getElementById('autocomplete9')), {
            types: ['geocode']
            	//types: ['address']
           	  
            });

google.maps.event.addListener(places, 'place_changed', function () {
//	 $("#save").hide();
var place = places.getPlace();
var address = place.formatted_address;
var latitude = place.geometry.location.lat();
var longitude = place.geometry.location.lng();
localStorage.setItem("sel-lat", latitude);
localStorage.setItem("sel-lon", longitude);
localStorage.setItem("sel-add", address);

swal({
title: "BOOKD",
text: "Want to save this address as new work?",
type: "warning",
showCancelButton: true,
confirmButtonColor: "#DD6B55",
confirmButtonText: "Yes!",
closeOnConfirm: true,
closeOnCancel: true
},


function(isConfirm){

if (isConfirm) {  

var uid =  localStorage.getItem("UNIQUE-ID");
var home = "";
var work = localStorage.getItem("sel-add");
var hotel ="";

jQuery.ajax({
   type: 'POST',
   beforeSend: function() {
 	 
	   $('.custom-loader').css({'display':'block'});         
  
  }, //Show spinner
    complete: function() {
     
     setTimeout(function() {
    	 $('.custom-loader').css({'display':'none'}); 
                }, 2000);
     
     
   }, //Hide spinner
     url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/update_place',
     data: {
     tag: 'update_place',
     uid : uid,
     home: home,
     work:work,
     hotel:hotel,
    },
     
     success: function(response) {
     //alert(response);
     var jsObject = JSON.parse(response);
     var result = jsObject.status;
    // var data = jsObject.data.count;
     //var girl_id = jsObject.data.id_params[0];
    // localStorage.setItem("girl_id", girl_id);
     if(result == 1){
     	
     //	  swal("Flng", message, "success");
 		swal({   title: "Saved!",   text: "Address has been saved as work!",   timer: 3000,   showConfirmButton: false });
    	 $("#work-add2").empty();
   		 $("#work-add2").prepend(localStorage.getItem("sel-add"));
   		 setTimeout(function() {
			 $.mobile.navigate("#settings",{transition: "slide", reverse: false});
		 }, 3000);
		
   		 
     	 // alert(localStorage.getItem("girl_id"));
          //$.mobile.navigate("#login",{transition: "slide", reverse: false});
     }
     else{
     	
     	 //swal("Flng", message, "error");
    	 swal({   title: "OOPS!",   text: "Something went wrong!",   timer: 3000,   showConfirmButton: false });
    	 setTimeout(function() {
			 $.mobile.navigate("#settings",{transition: "slide", reverse: false});
		 }, 3000);
		
    	 $("#work-add2").empty();
    	 
    	
     }
    
     },
     
     error: function (response) {
        //alert(JSON.stringify(response));
    	 //swal("Flng", "OOPS!.Something Went Wrong with the server.Try Again", "error");
     },
   
     
     });






} 
else 
{    
//swal("Cancelled", "Your imaginary file is safe :)", "error"); 

setTimeout(function() {

}, 1000);
//work();
}

});









});

	
	
}


function set_ho(){
	
	 $.mobile.navigate("#removeplace5",{transition: "slide", reverse: false});
	 init_ho();
	
}

function init_ho(){
	
	var places =new google.maps.places.Autocomplete(
            (document.getElementById('autocomplete8')), {
            types: ['geocode']
            	//types: ['address']
           	 
            });

google.maps.event.addListener(places, 'place_changed', function () {

var place = places.getPlace();
var address = place.formatted_address;
var latitude = place.geometry.location.lat();
var longitude = place.geometry.location.lng();
localStorage.setItem("sel-lat", latitude);
localStorage.setItem("sel-lon", longitude);
localStorage.setItem("sel-add", address);

swal({
title: "BOOKD",
text: "Want to save this address as new home?",
type: "warning",
showCancelButton: true,
confirmButtonColor: "#DD6B55",
confirmButtonText: "Yes!",
closeOnConfirm: true,
closeOnCancel: true
},


function(isConfirm){

if (isConfirm) {  

var uid =  localStorage.getItem("UNIQUE-ID");
var home = localStorage.getItem("sel-add");
var work = "";
var hotel ="";

jQuery.ajax({
   type: 'POST',
   beforeSend: function() {
 	 
	   $('.custom-loader').css({'display':'block'});              
  
  }, //Show spinner
    complete: function() {
     
     setTimeout(function() {
    	 $('.custom-loader').css({'display':'none'}); 
                }, 2000);
     
     
   }, //Hide spinner
     url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/update_place',
     data: {
     tag: 'update_place',
     uid : uid,
     home: home,
     work:work,
     hotel:hotel,
    },
     
     success: function(response) {
    // alert(response);
     var jsObject = JSON.parse(response);
     var result = jsObject.status;
    // var data = jsObject.data.count;
     //var girl_id = jsObject.data.id_params[0];
    // localStorage.setItem("girl_id", girl_id);
     if(result == 1){
     	
     //	  swal("Flng", message, "success");
    	 swal({   title: "Saved!",   text: "Address has been saved as home!",   timer: 3000,   showConfirmButton: false });
    	$("#home-add2").empty();
		 $("#home-add2").prepend(localStorage.getItem("sel-add"));
		 setTimeout(function() {
			 $.mobile.navigate("#settings",{transition: "slide", reverse: false});
		 }, 3000);
		
     	 // alert(localStorage.getItem("girl_id"));
          //$.mobile.navigate("#login",{transition: "slide", reverse: false});
     }
     else{
     	
     	 //swal("Flng", message, "error");
    	 swal({   title: "OOPS!",   text: "Something went wrong!",   timer: 3000,   showConfirmButton: false });
    	 setTimeout(function() {
			 $.mobile.navigate("#settings",{transition: "slide", reverse: false});
		 }, 3000);
		
    	 $("#home-add2").empty();
    	 
    	
     }
    
     },
     
     error: function (response) {
        //alert(JSON.stringify(response));
    	 //swal("Flng", "OOPS!.Something Went Wrong with the server.Try Again", "error");
     },
   
     
     });



} 
else 
{    
//swal("Cancelled", "Your imaginary file is safe :)", "error"); 

setTimeout(function() {

}, 1000);
//work();
}

});

});

	
	
}

function wo(){
	//$("lat-work").empty();
	 // $("lat-work").append('<li class="clearfix" id ="work_div" ><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Work</div><div class="place-address" id="work-add1"></div></li>');
	localStorage.setItem("work100", "true"); 
	localStorage.setItem("home100", "false"); 
	localStorage.setItem("hotel100", "false"); 
	$.mobile.navigate("#removeplace1",{transition: "slide", reverse: false});
	 init_work();
}
function ho(){
	localStorage.setItem("home100", "true");
	localStorage.setItem("hotel100", "false");
	localStorage.setItem("work100", "false");
	 $.mobile.navigate("#removeplace1",{transition: "slide", reverse: false});
	 init_home();
	
}


function init_work() {
	//alert("work");
	//  $.mobile.navigate("#removeplace1",{transition: "slide", reverse: false});
	//$("#autcomplete2").val(storeObject1.search);
    //$('input#city').cityAutocomplete();
 var places =new google.maps.places.Autocomplete(
                                        (document.getElementById('autocomplete3')), {
                                        types: ['geocode']
                                        	//types: ['address']
                                       	  
                                        });
    
    google.maps.event.addListener(places, 'place_changed', function () {
    //	 $("#save").hide();
        var place = places.getPlace();
        var address = place.formatted_address;
        var latitude = place.geometry.location.lat();
        var longitude = place.geometry.location.lng();
        localStorage.setItem("sel-lat", latitude);
        localStorage.setItem("sel-lon", longitude);
        localStorage.setItem("sel-add", address);
   
        swal({
            title: "BOOKD",
            text: "Want to save this address as work?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes!",
            closeOnConfirm: true,
            closeOnCancel: true
            },
            
           
            function(isConfirm){
            
            	if (isConfirm) {  
            		 
            		 var uid =  localStorage.getItem("UNIQUE-ID");
                     var home = "";
                     var work = localStorage.getItem("sel-add");
                     var hotel ="";
            			
            			jQuery.ajax({
            		           type: 'POST',
            		           beforeSend: function() {
            		         	 
            		        	   $('.custom-loader').css({'display':'block'});              
            		          
            		          }, //Show spinner
            		            complete: function() {
            		             
            		             setTimeout(function() {
            		            	 $('.custom-loader').css({'display':'none'}); 
            		                        }, 2000);
            		             
            		             
            		           }, //Hide spinner
            		             url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/update_place',
            		             data: {
            		             tag: 'update_place',
            		             uid : uid,
            		             home: home,
            		             work:work,
            		             hotel:hotel,
            		            },
            		             
            		             success: function(response) {
            		             //alert(response);
            		             var jsObject = JSON.parse(response);
            		             var result = jsObject.status;
            		            // var data = jsObject.data.count;
            		             //var girl_id = jsObject.data.id_params[0];
            		            // localStorage.setItem("girl_id", girl_id);
            		             if(result == 1){
            		             	
            		             //	  swal("Flng", message, "success");
            		            	
            		            	 swal({   title: "Saved!",   text: "Address has been saved as work!",   timer: 3000,   showConfirmButton: false });
            		            	 $("#work-add1").empty();
            		           		 $("#work-add1").prepend(localStorage.getItem("sel-add"));
            		                 search();
            		           		 
            		             	 // alert(localStorage.getItem("girl_id"));
            		                  //$.mobile.navigate("#login",{transition: "slide", reverse: false});
            		             }
            		             else{
            		             	
            		             	 //swal("Flng", message, "error");
            		            	 swal({   title: "OOPS!",   text: "Something went wrong!",   timer: 3000,   showConfirmButton: false });
            		            	search();
            		            	 $("#work-add1").empty();
            		            	 
            		            	
            		             }
            		            
            		             },
            		             
            		             error: function (response) {
            		                //alert(JSON.stringify(response));
            		            	 //swal("Flng", "OOPS!.Something Went Wrong with the server.Try Again", "error");
            		             },
            		           
            		             
            		             });
            		 
                   		
                   	    
                   		 
            		
            		
                   } 
            	else 
            	{    
            		//swal("Cancelled", "Your imaginary file is safe :)", "error"); 
            		   
               		setTimeout(function() {
               		
               		}, 1000);
            		 //work();
                 }
         
            });
   	 
   	 
   
   		 
   		 
   	 
        
        
        
    });
    
    
}

function init() {
	  
    //$('input#city').cityAutocomplete();
	
 var places =new google.maps.places.Autocomplete(
                                        (document.getElementById('autocomplete')), {
                                          types: ['geocode']
                                        	//types: ['address']
                                       	  
                                        });
    
    google.maps.event.addListener(places, 'place_changed', function () {
    	 $("#save").hide();
        var place = places.getPlace();
        var address = place.formatted_address;
        var latitude = place.geometry.location.lat();
        var longitude = place.geometry.location.lng();
        localStorage.setItem("sel-lat", latitude);
        localStorage.setItem("sel-lon", longitude);
        localStorage.setItem("sel-add", address);
       
        
   	 
        
        
        
    });
    
    
}


function go_home2(){
	
	var home_add = localStorage.getItem("home-add1");
	localStorage.setItem("work", "");
	localStorage.setItem("home", "true");
	localStorage.setItem("first", "");
	localStorage.setItem("hotel", "");
	//alert(home_add);
	$("#pac-input4").val(home_add);
	$.mobile.navigate("#paymentconfirmation",{transition: "slideright", reverse: false});
	return home_add;
	
}

function go_home1(){
	
	var home_add = localStorage.getItem("home-add1");
	localStorage.setItem("work", "");
	localStorage.setItem("first", "");
	localStorage.setItem("hotel", "");
	localStorage.setItem("home", "true");
	//alert(home_add);
	$("#autocomplete4").val(home_add);

	
	  $.mobile.navigate("#home",{transition: "slideright", reverse: false});
	
	return home_add;
	
}
function go_work1(){
	 
		var work_add = localStorage.getItem("work-add1");
		localStorage.setItem("home", "");
		localStorage.setItem("first", "");
		localStorage.setItem("hotel", "");
		localStorage.setItem("work", "true");
		//alert(work_add);
		$("#autocomplete4").val(work_add);
	
		  $.mobile.navigate("#home",{transition: "slideright", reverse: false});
		
		return work_add;
	
	
}


function go_work2(){
	 
	var work_add = localStorage.getItem("work-add1");
	localStorage.setItem("home", "");
	localStorage.setItem("first", "");
	localStorage.setItem("hotel", "");
	localStorage.setItem("work", "true");
	//alert(work_add);
	$("#pac-input4").val(work_add);
	$.mobile.navigate("#paymentconfirmation",{transition: "slideright", reverse: false});
	return work_add;


}
function go_hotel1(){

	var hotel_add = localStorage.getItem("hotel-add1");
	//alert(hotel_add);
	localStorage.setItem("home", "");
	localStorage.setItem("work", "");
	localStorage.setItem("first", "");
	localStorage.setItem("hotel", "true");
	//alert(hotel_add);
	$("#autocomplete4").val(hotel_add);

	
	  $.mobile.navigate("#home",{transition: "slideright", reverse: false});
	
	return hotel_add;

	
	
	
}

function go_hotel2(){
	var hotel_add = localStorage.getItem("hotel-add1");
	localStorage.setItem("home", "");
	localStorage.setItem("work", "");
	localStorage.setItem("first", "");
	localStorage.setItem("hotel", "true");
	//alert(hotel_add);
	$("#pac-input4").val(hotel_add);
	$.mobile.navigate("#paymentconfirmation",{transition: "slideright", reverse: false});
	return hotel_add;

	
	
	
}

function showmap_work(h_add){
	$.mobile.navigate("#home",{transition: "slideright", reverse: false});
	
	  

	
     // var my_location = localStorage.getItem("ADD-ROOM");		 
$.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+h_add+'&sensor=false', null, function (data) {
              var p = data.results[0].geometry.location;
              //alert(p);
            
}); 
	   
	   	

	     
	
	
	
	
	
}

function init_home() {
	// $.mobile.navigate("#removeplace1",{transition: "slide", reverse: false});
	$("#autcomplete3").val(storeObject1.search); 
    //$('input#city').cityAutocomplete();
 var places =new google.maps.places.Autocomplete(
                                        (document.getElementById('autocomplete3')), {
                                        types: ['geocode']
                                        	//types: ['address']
                                       	  
                                        });
    
    google.maps.event.addListener(places, 'place_changed', function () {
    	 $("#save").hide();
        var place = places.getPlace();
        var address = place.formatted_address;
        var latitude = place.geometry.location.lat();
        var longitude = place.geometry.location.lng();
        localStorage.setItem("sel-lat", latitude);
        localStorage.setItem("sel-lon", longitude);
        localStorage.setItem("sel-add", address);
   
        swal({
            title: "BOOKD",
            text: "Want to save this address as home?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes!",
            closeOnConfirm: true,
            closeOnCancel: true
            },
            
           
            function(isConfirm){
            
            	if (isConfirm) {  
            		 
            		 var uid =  localStorage.getItem("UNIQUE-ID");
                     var home = localStorage.getItem("sel-add");
                     var work = "";
                     var hotel ="";
            			
            			jQuery.ajax({
            		           type: 'POST',
            		           beforeSend: function() {
            		         	 
            		        	   $('.custom-loader').css({'display':'block'});             
            		          
            		          }, //Show spinner
            		            complete: function() {
            		             
            		             setTimeout(function() {
            		            	 $('.custom-loader').css({'display':'none'}); 
            		                        }, 2000);
            		             
            		             
            		           }, //Hide spinner
            		             url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/update_place',
            		             data: {
            		             tag: 'update_place',
            		             uid : uid,
            		             home: home,
            		             work:work,
            		             hotel:hotel,
            		            },
            		             
            		             success: function(response) {
            		            // alert(response);
            		             var jsObject = JSON.parse(response);
            		             var result = jsObject.status;
            		            // var data = jsObject.data.count;
            		             //var girl_id = jsObject.data.id_params[0];
            		            // localStorage.setItem("girl_id", girl_id);
            		             if(result == 1){
            		             	
            		             //	  swal("Flng", message, "success");
            		            
            		            	 swal({   title: "Saved!",   text: "Address has been saved as home!",   timer: 3000,   showConfirmButton: false });
            		            	$("#home-add1").empty();
            	            		 $("#home-add1").prepend(localStorage.getItem("sel-add"));
            	            			search();
            		             	 // alert(localStorage.getItem("girl_id"));
            		                  //$.mobile.navigate("#login",{transition: "slide", reverse: false});
            		             }
            		             else{
            		             	
            		             	 //swal("Flng", message, "error");
            		            	 swal({   title: "OOPS!",   text: "Something went wrong!",   timer: 3000,   showConfirmButton: false });
            		            	search();
            		            	 $("#home-add").empty();
            		            	 
            		            	
            		             }
            		            
            		             },
            		             
            		             error: function (response) {
            		                //alert(JSON.stringify(response));
            		            	 //swal("Flng", "OOPS!.Something Went Wrong with the server.Try Again", "error");
            		             },
            		           
            		             
            		             });
            		 
            		
            		
                   } 
            	else 
            	{    
            		//swal("Cancelled", "Your imaginary file is safe :)", "error"); 
            		   
               		setTimeout(function() {
               		
               		}, 1000);
            		 //work();
                 }
         
            });

  });
    
    
}




function getmap(){
	
	 $('.custom-loader').css({'display':'block'}); 
		// var add = $("#pac-input3").val();
		  
	 
		
		
	  
		/*  ReverseGeocode(position.coords.latitude , position.coords.longitude );
		  localStorage.setItem("lat",position.coords.latitude);
		  localStorage.setItem("lon", position.coords.longitude);*/
		  
		  
		get_no_of_girls();
		setTimeout(function(){ 
			   
			//navigator.geolocation.getCurrentPosition(onSuccess, onError);
			//alert("55");
		
		 var mapCanvas = document.getElementById('map_canvas');
		  var map;
		    var elevator;
		    var bounds = new google.maps.LatLngBounds();
		    var marker =[];
		    var my_location = localStorage.getItem("add-usr");		   
            $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+my_location+'&sensor=false', null, function (data) {
                    var p = data.results[0].geometry.location             
                     var latlng = new google.maps.LatLng(p.lat, p.lng);
                     var myOptions = {
		        zoom: 9,
		        center: new google.maps.LatLng(p.lat, p.lng),
		        panControl: true,
		        mapTypeId: 'roadmap'
		    };
            map = new google.maps.Map($('#map-canvas')[0], myOptions);
		    
		    //alert("5"+map);
			//searchField(map);
            //showadd(map);
			
			  infoBubble = new InfoBubble({
				  content: localStorage.getItem("add-usr"),
				  shadowStyle: 1,
		          padding: 0,
		          backgroundColor: '#ffffff',
		          borderRadius: 6,
		          arrowSize: 10,
		          borderWidth: 2,
		          borderColor: '#000000',
		          disableAutoPan: false,
		          hideCloseButton: false,
		          arrowPosition: 30
		        });
			
		/*	 var infowindow = new google.maps.InfoWindow({
				    content: localStorage.getItem("ADDRESS-CUR")
				  });*/
	            marker =  new google.maps.Marker({
	              position:new google.maps.LatLng(position.coords.latitude , position.coords.longitude),
	              icon: 'img/home1.png',
	              title: localStorage.getItem("add-usr"),
	              map: map
	          });
	           
	            marker.addListener('click', function() {
	                //infowindow.open(map, marker);
	                infoBubble.open(map, marker);
	              });
	           // alert("4"+map);
	         
	     
	          bounds.extend(new google.maps.LatLng(position.coords.latitude , position.coords.longitude));
	          $('.custom-loader').css({'display':'none'}); 

	       
	      
	     // alert(my_location);
	      
	      
	         
		}, 5000);
		
	
	
	
});
}

function save_add(){
	 $("#save").show();
	var rnd_add = $("#autocomplete").val();
	
    localStorage.setItem("random-add", rnd_add);
    
    swal({
        title: "BOOKD",
        text: "Want to save this address as home?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes!",
        closeOnConfirm: false,
        closeOnCancel: true
        },
        
       
        function(isConfirm){
        
        	if (isConfirm) {  
        		  
        		
       		 
       		 var uid =  localStorage.getItem("UNIQUE-ID");
                var home = localStorage.getItem("random-add");
                var work = "";
                var hotel ="";
       			
       			jQuery.ajax({
       		           type: 'POST',
       		           beforeSend: function() {
       		         	 
       		        	 $('.custom-loader').css({'display':'block'});             
       		          
       		          }, //Show spinner
       		            complete: function() {
       		             
       		             setTimeout(function() {
       		            	 $('.custom-loader').css({'display':'none'}); 
       		                        }, 2000);
       		             
       		             
       		           }, //Hide spinner
       		             url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/update_place',
       		             data: {
       		             tag: 'update_place',
       		             uid : uid,
       		             home: home,
       		             work:work,
       		             hotel:hotel,
       		            },
       		             
       		             success: function(response) {
       		            // alert(response);
       		             var jsObject = JSON.parse(response);
       		             var result = jsObject.status;
       		            // var data = jsObject.data.count;
       		             //var girl_id = jsObject.data.id_params[0];
       		            // localStorage.setItem("girl_id", girl_id);
       		             if(result == 1){
       		             	
       		             //	  swal("Flng", message, "success");
       		     		 $("#home-add").empty();
       	        		 $("#home-add").prepend(localStorage.getItem("random-add"));
       	        	
       	        		
       	        		swal("Saved!", "Address has been saved as home.", "success"); 
       		             	 // alert(localStorage.getItem("girl_id"));
       		                  //$.mobile.navigate("#login",{transition: "slide", reverse: false});
       		             }
       		             else{
       		             	
       		             	 //swal("Flng", message, "error");
       		            	 swal("Saved!", "Something went wrong on the server front!", "success"); 
       		            	 $("#home-add").empty();
       		            	 
       		            	
       		             }
       		            
       		             },
       		             
       		             error: function (response) {
       		                //alert(JSON.stringify(response));
       		            	 //swal("Flng", "OOPS!.Something Went Wrong with the server.Try Again", "error");
       		             },
       		           
       		             
       		             });
        
               } 
        	else 
        	{    
        		//swal("Cancelled", "Your imaginary file is safe :)", "error"); 
        		   
           		setTimeout(function() {
           		 $('.custom-loader').css({'display':'block'});          
           			//work1();	
           		}, 1000);
        		 //work();
             }
     
        });
	
	
}


function done(){
	// alert("done");
	 $("#girl-no").empty();
	 localStorage.setItem("flag", "true");
	 get_no_of_girls();
	
}

function done1(){
	 //$(".pull-right").empty();
	// listing();
	var hours =   $('#txt11').val();
	var mins =   $('#txt22').val();
	localStorage.setItem("hrs", hours);
	localStorage.setItem("mins", AddZero(mins));  
 
    listing();
	
}

function calculateTime(time1 , time2) {
	   var startTime = time1;
	   var endTime =  time2;

	   var startTimeArray = startTime.split(":");
	   var startInputHrs = parseInt(startTimeArray[0]);
	   var startInputMins = parseInt(startTimeArray[1]);

	   var endTimeArray = endTime.split(":");
	   var endInputHrs = parseInt(endTimeArray[0]);
	   var endInputMins = parseInt(endTimeArray[1]);

	   var startMin = startInputHrs*60 + startInputMins;
	   var endMin = endInputHrs*60 + endInputMins;

	   var result;

	   if (endMin < startMin) {
	       var minutesPerDay = 24*60; 
	       result = minutesPerDay - startMin;  // Minutes till midnight
	       result += endMin; // Minutes in the next day
	   } else {
	      result = endMin - startMin;
	   }

	   var minutesElapsed = result % 60;
	   var hoursElapsed = (result - minutesElapsed) / 60;
	   var total_elapsed = hoursElapsed + ":" + (minutesElapsed < 10 ?
            '0'+minutesElapsed : minutesElapsed) ;

	   //alert ( "Elapsed Time : " + hoursElapsed + ":" + (minutesElapsed < 10 ?
	            //'0'+minutesElapsed : minutesElapsed) ) ;
	   return total_elapsed;
	}

function get_no_of_girls(lat , long){
	//alert('a');
	var callback=0;
	var long2=long;
	//alert(typeof long2);
	if(typeof long2=='object')
		{
		//alert('bb');
			long=long2[0];
			callback=long2[1];
		}
	
	if(localStorage.getItem("flag")== "true"){
		//alert("get0");
	//	$("#popupInfo").popup("close");
		var msg;
		
		 var girl_id =new Array();
		var hours = localStorage.getItem("hrs");
		var minutes = localStorage.getItem("mins");
		var time = hours+':'+minutes;
		localStorage.setItem("req-time","");
		localStorage.setItem("req-time",time);
		 var now = new Date();
	     var hours= now.getHours();
	     var mins=now.getMinutes();
		//var lat = 40.71189021680399;
		//var long= -74.00538146495819;
		var day = now.getDay();
		var time11= AddZero(now.getHours())+':'+AddZero(now.getMinutes());
		localStorage.setItem("cur-time","");
		localStorage.setItem("cur-time",time11);
		var cur_time = localStorage.getItem("cur-time");
		//var cur_time = "23:00";
	    var req_time = localStorage.getItem("req-time");
	    var difff = dateCompare(req_time,cur_time);
	  
	 /*   var a = convertTime24to12(cur_time);
	    var b = convertTime24to12(req_time);
	    var d1 = Date.parse(a);
	    var d2 = Date.parse(b);
	    alert(a);
	    alert(b);
        alert(new Date(d1).getMinutes());
        alert(d2);
	    var diff = new Date(d1).getTime() - new Date(d2).getTime();
	    alert(diff);*/
	  /*  alert("Am: ", a);
	    alert("pm: ", b);
	    alert("Hours: ", diff.hours);
	    alert("Minutes: ", diff.minutes);*/
	    var a = req_time.split(':'); // split it at the colons
	    var b = cur_time.split(':');
	    // minutes are worth 60 seconds. Hours are worth 60 minutes.
	    var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60; 
	    var seconds1 = (+b[0]) * 60 * 60 + (+b[1]) * 60; 
        var diff = seconds - seconds1;
	
	
	if(diff <= 86400 && difff == -1){
    //alert("within 24");
	var hours = localStorage.getItem("hrs");
	var minutes = localStorage.getItem("mins");
	var time = hours+':'+minutes;
	var d = new Date();
	var day = d.getDay();
	day = day + 1;
	d = new Date(d.getTime() + 86400000) ;
	var date = d.toISOString().slice(0,10);
	if(day == 0){
		
		day = 7;
	}
	else{
		day = day;
	}

	 /* alert(time);
	     alert(lat);
	     alert(long);
	     alert(day);
      alert(date);*/
	
		
	}
	else if(diff <= 86400 && difff == 1){
		//alert("within 24++");
		var hours = localStorage.getItem("hrs");
		var minutes = localStorage.getItem("mins");
		var time = hours+':'+minutes;
		var d = new Date();
		var day = d.getDay();
		day = day;
		
		var date = d.toISOString().slice(0,10);
      if(day == 0){
			
			day = 7;
		}
		else{
			day =day;
		}

     /* alert(time);
	     alert(lat);
	     alert(long);
	     alert(day);
      alert(date);*/
			
	}
	
	else{
		
		//alert("time exceeding 24 hours");
		var d = new Date();
		var day = d.getDay();
		 var now = new Date();
	     var hours= now.getHours();
	     var mins=now.getMinutes();
	     var time= AddZero(now.getHours())+':'+AddZero(now.getMinutes());
	     var date = now.getDate();
	 	localStorage.setItem("hrs", "");
		localStorage.setItem("mins", "");
	 	localStorage.setItem("req-time", "");
	 	localStorage.setItem("hrs", hours);
		localStorage.setItem("mins", mins);
	}
	
	 
	  //  alert(req_time.split(":")[1]);
	 
	   		//alert(convertTime24to12(time));
	   	
	   
	 
	 //  	msg = "This time cannot be accepted as this time is already passed for today.Please enter a time preceeding current time !";
	   	
	 
	var d1 = new Date();
	var dayy = d1.getDay();
	var k ;
	if(day > dayy){
		
		k = "";
		
	}
	else{
		
		k = '';
	}
	
	  var hours11 = localStorage.getItem("hrs");
      var mins11 = localStorage.getItem("mins");
      
      if(mins11 == "000"){
     	 var mins12 = "0";
      }

      else  if(mins11 == "00"){
     	 var mins12 = "0";
      }
      else if(mins11 == "0"){
     	 
     	 var mins12 = "0"
     	 
      }
      
      else{
     	 
     	 var mins12 = mins11.replace(/^0+/, '');
     	 
      }
     // var mins11 = mins.replace(/^0+/, '');
      var result1 = (hours11 < 10 ? "0" + hours11 : hours11) + ":" + (mins12 < 10 ? "0" + mins12 : mins12);
	
      
      localStorage.setItem("date",date);
      localStorage.setItem("day",day);
		jQuery.ajax({
	           type: 'POST',
	           beforeSend: function() {
	         	 
	        	   $('.custom-loader').css({'display':'block'});              
	          
	          }, //Show spinner
	            complete: function() {
	             
	             setTimeout(function() {
	            	 $('.custom-loader').css({'display':'none'}); 
	                        }, 2000);
	             
	             
	           }, //Hide spinner
	             url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/get_girls',
	             data: {
	             tag: 'get_girls',
	             lat : lat,
	             long: long,
	             time:time,
	             day:day,
	             date:date,
	            },
	             
	             success: function(response) {
	           // alert(response);
	             var jsObject = JSON.parse(response);
	             var result = jsObject.status;
	             var data = jsObject.data.count;
	             var data1 = jsObject.data.flng_service;
	             localStorage.setItem("girl_id", "");
	             //var girl_id = jsObject.data.id_params[0];
	         
	             //alert(JSON.stringify(jsObject.data.id_params));
//	             for(var i=0;i<jsObject.data.id_params.length;i++){
//	            	 
//	            	   girl_id.push(jsObject.data.id_params[i]);
//	            	   localStorage.setItem("girl_id", girl_id);
//	             }
	           
	             
	          
	             //alert(girl_id);
	             if(data1 == "N/A"){
	            	setTimeout(function() {
	            	   	 swal("BOOKD", "Sorry, BOOKD is currently unavailable in your area, but don't worry, we will be coming to your area soon!", "info");	
	            	}, 1000);
	            	// swal("Flng", "Sorry, FLNG is currently unavailable in your area, but don't worry, we will be coming to your area soon!", "info");
	            	 $("#girl-no").empty();
	           	  $("#girl-no").text("Service not available");
	         	  localStorage.setItem("ser", "");
	           	  localStorage.setItem("ser", "true");
	             }
	             if(result == 1 && data > 0){
	             	
	             //	  swal("Flng", message, "success");
	            	
	             	  $("#girl-no").text(data+" "+"Girls available"+" "+ k+" "+"at"+" "+convertTime24to12(result1));
	             	// $('#searchres').removeAttr('disabled');
	             	    localStorage.setItem("girl_id", jsObject.data.id_params.join(','));
	             	 localStorage.setItem("flag", "false");
	                // alert("412");
	             	 localStorage.setItem("flag500", 1);
	             	 // alert(localStorage.getItem("girl_id"));
	                  //$.mobile.navigate("#login",{transition: "slide", reverse: false});
	             	
	             	 if(callback)
	             		 {
	             		setTimeout(function(){
		                     
		                     
	             			 //$('.not-available-cont').css({'display':'none'}); 
	             			 
		                    listing();
		                       }, 3000);
	             		 }
	             	 
	             }
	             else{
	             	
	             	 //swal("Flng", message, "error");
	            	 // alert("412222");
	            	 $("#girl-no").text("NO Girls available Now");
	            	 $('#searchres').attr('disabled', true);
	            	
	            	 localStorage.setItem("flag500", 0);
	            	 localStorage.setItem("flag", "false");
	            	 if(callback)
	            		 $('.not-available-cont').css({'display':'block'});
	            	 $("#content1").empty();
	             }
	             
	           
	            
	             },
	             
	             error: function (response) {
	                //alert(JSON.stringify(response));
	            	 //swal("Flng", "OOPS!.Something Went Wrong with the server.Try Again", "error");
	             },
	           
	             
	             });
	      
		
		
	}
	else{
	//alert("get1");
	//var now1 = new Date();
	
	//var day = now1.getDay();
	//var lat=localStorage.getItem("lat");
	//var long= localStorage.getItem("lo	localStorage.setItem("hrs", hours);
		
	 var now = new Date();
     var hours= now.getHours();
     var mins=now.getMinutes();
	//var lat = 40.71189021680399;
	//var long= -74.00538146495819;
	var day = now.getDay();
	var time= AddZero(now.getHours())+':'+AddZero(now.getMinutes());
	localStorage.setItem("hrs", hours);
	localStorage.setItem("mins", mins);
	localStorage.setItem("cur-hrs", hours);
	localStorage.setItem("cur-mins", mins);
	
	
	localStorage.setItem("cur-time","");
	localStorage.setItem("cur-time",time);
	
	//var date = now.toLocaleDateString();
	var date = now.toISOString().slice(0,10);
	if(day == 0){
		
		day = 7;
	}
	else{
		day =day;
	}
	
	  /* alert(time);
	     alert(lat);
	     alert(long);
	     alert(day);
	     alert(date);*/
	  localStorage.setItem("date",date);
      localStorage.setItem("day",day);
	jQuery.ajax({
           type: 'POST',
           beforeSend: function() {
         	 
        	   $('.custom-loader').css({'display':'block'});               
          
          }, //Show spinner
            complete: function() {
             
             setTimeout(function() {
            	 $('.custom-loader').css({'display':'none'}); 
                        }, 2000);
             
             
           }, //Hide spinner
             url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/get_girls',
             data: {
             tag: 'get_girls',
             lat : lat,
             long: long,
             time:time,
             day:day,
             date:date,
            },
             
             success: function(response) {
            // alert(response);
             var jsObject = JSON.parse(response);
             var result = jsObject.status;
             var data = jsObject.data.count;
             var data1 = jsObject.data.flng_service;
             localStorage.setItem("girl_id", "");
             //var girl_id = jsObject.data.id_params[0];
             
	            // localStorage.setItem("girl_id", girl_id);
             var bool = typeof data === 'undefined';
             
             if(data1 == "N/A" && localStorage.getItem("flaggg")== "true"){
	            	
            		setTimeout(function() {
	            	   	 swal("BOOKD", "Sorry, BOOKD is currently unavailable in your area, but don't worry, we will be coming to your area soon!", "info");	
	            	}, 1000);
            	
            	    
            	 $("#girl-no").empty();
           	  $("#girl-no").text("Service not available");
           	  localStorage.setItem("ser", "");
           	  localStorage.setItem("ser", "true");
             }
        
             if(result == 1 && !bool){
            	//alert("hello");
             //	  swal("Flng", message, "success");
            	 localStorage.setItem("girl_id", jsObject.data.id_params.join(','));
             	  $("#girl-no").text(data+" "+"Girls available Now");
                  //$.mobile.navigate("#login",{transition: "slide", reverse: false});
             	 //alert(callback);
             	 if(callback && (localStorage.getItem("list") == "true"))
         		 {
         		setTimeout(function(){
                     
                     
         			 //$('.not-available-cont').css({'display':'none'}); 
         			 
                    listing();
                       }, 1000);
         		 }
             }
             else{
            	
             	 //swal("Flng", message, "error");
            	 $("#girl-no").text("NO Girls available Now");
            	
             	 
             }
             
           
            
             },
             
             error: function (response) {
                //alert(JSON.stringify(response));
            	 //swal("Flng", "OOPS!.Something Went Wrong with the server.Try Again", "error");
             },
           
             
             });
      
	
	}
}


function gotorem(){
	
	   $.mobile.changePage("#removeplacealter", {transition: "fade", reverse: false}, true, true);
	
	
}

function secondsTimeSpanToHMS(s) {
    var h = Math.floor(s/3600); //Get whole hours
    s -= h*3600;
    var m = Math.floor(s/60); //Get remaining minutes
    s -= m*60;
    return h+":"+(m < 10 ? '0'+m : m); //zero padding on minutes and seconds
}

secondsTimeSpanToHMS(125);
		
function searchField(map)
{
    var markers = [];
    var bounds = map.getBounds();
  
   
   input = document.getElementById('pac-input3');	
    
    // map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
    var searchBox = new google.maps.places.SearchBox(input);
    google.maps.event.addListener(searchBox, 'places_changed', function()
    {
    	var places = searchBox.getPlaces();
                                  
        for (var i = 0, marker; marker = markers[i]; i++) 
        {
        	marker.setMap(null);
        }
        markers = [];
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0, place; place = places[i]; i++) 
        {
        	var image = {
        					url: place.icon,
                            size: new google.maps.Size(35, 35),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(17, 34),
                            scaledSize: new google.maps.Size(15, 15)
                        };
         
            
        	var contentString = '<div class="fixed-info">'+
		      '<span class="info-time">'+
		      '<i></i>'+
		      '</span>'+
		      ' <span class="info-msg">'+input+'</span>'+
		      '<span class="info-arrow"><i class="fa fa-angle-right"></i></span> ' +
		      ' </div> ';
			 var infowindow = new google.maps.InfoWindow({
			    
			      content: contentString
			   
			    });
			 
			 google.maps.event.addListener(infowindow, 'domready', function() {

				   // Reference to the DIV which receives the contents of the infowindow using jQuery
				   var iwOuter = $('.gm-style-iw');

				   /* The DIV we want to change is above the .gm-style-iw DIV.
				    * So, we use jQuery and create a iwBackground variable,
				    * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
				    */
				   var iwBackground = iwOuter.prev();

				   // Remove the background shadow DIV
				   iwBackground.children(':nth-child(2)').css({'display' : 'none'});

				   // Remove the white background DIV
				   iwBackground.children(':nth-child(4)').css({'display' : 'none'});
				   
				   iwBackground.children(':nth-child(1)').css({'display' : 'none'});

				// Moves the arrow 76px to the left margin 
				iwBackground.children(':nth-child(3)').css({'display' : 'none'});
				
				var iwCloseBtn = iwOuter.next();

				// Apply the desired effect to the close button
				iwCloseBtn.css({'display' : 'none'});

				// The API automatically applies 0.7 opacity to the button after the mouseout event.
				// This function reverses this event to the desired value.
				


				});
		/*	 var infowindow = new google.maps.InfoWindow({
				    content: localStorage.getItem("ADDRESS-CUR")
				  });*/
	       
	           
	            
	            var marker = new google.maps.Marker({
                	map: map,
                	icon: 'img/ico1.png',
                    title: place.name,
                    position: place.geometry.location
              }); 
	         /*  marker.addListener('click', function() {
	        	   infowindow.open(map, marker);
	                
	              });*/
	           
	      
	           
	           // alert("4"+map);
	            infowindow.open(map, marker);
           
            markers.push(marker);  
                                       
            bounds.extend(place.geometry.location);
           // input.val="";
            
        }        
        moveMarker( map, marker );  
        map.fitBounds(bounds);
    });
    
   
}

function init_final()
{
	//$.LoadingOverlay("show"); 
	//alert("5555");
	 var places =new google.maps.places.Autocomplete(
             (document.getElementById('autocomplete4')), {
             types: ['geocode']
            	// types: ['address']
            	
             });
	

google.maps.event.addListener(places, 'place_changed', function () {

var place = places.getPlace();
var address = place.formatted_address;
var latitude = place.geometry.location.lat();
var longitude = place.geometry.location.lng();
localStorage.setItem("lat", "");
localStorage.setItem("lon", "");
localStorage.setItem("sel-add", "");	
localStorage.setItem("lat", latitude);
localStorage.setItem("lon", longitude);
localStorage.setItem("sel-add", address);	
localStorage.setItem("work", "");
localStorage.setItem("home", "");
localStorage.setItem("hotel", "");
localStorage.setItem("first", "true");
localStorage.setItem("ADDRESS-CUR", address);

$.mobile.navigate("#home",{transition: "slide", reverse: false});    	

/*setTimeout(function() {
	get_no_of_girls(place.geometry.location.lat() , place.geometry.location.lng());
	show_map(place.geometry.location.lat() ,  place.geometry.location.lng());
	 $('.custom-loader').css({'display':'none'}); 
}, 2000);*/


});
}

function showadd(map){
	
	/*geocoder.geocode( { 'address':  localStorage.getItem("add-usr")}, function(results, status) {

		if (status == google.maps.GeocoderStatus.OK) {
		    var latitude = results[0].geometry.location.latitude;
		    var longitude = results[0].geometry.location.longitude;
		    alert(latitude);
		    alert(longitude);*/
	        //alert("97487326");
	        var markers = [];
	        var bounds = map.getBounds();
		    var address = document.getElementById("pac-input3").value;
		    //alert(address);
		    var searchBox = new google.maps.places.SearchBox(address);
		    // alert(searchBox);
		    	var places = searchBox.getPlaces();
		         //alert(places);                         
		        for (var i = 0, marker; marker = markers[i]; i++) 
		        {
		        	marker.setMap(null);
		        }
		        markers = [];
		        var bounds = new google.maps.LatLngBounds();
		        for (var i = 0, place; place = places[i]; i++) 
		        {
		        	var image = {
		        					url: place.icon,
		                            size: new google.maps.Size(35, 35),
		                            origin: new google.maps.Point(0, 0),
		                            anchor: new google.maps.Point(17, 34),
		                            scaledSize: new google.maps.Size(15, 15)
		                        };
		            var marker = new google.maps.Marker({
		                                                	map: map,
		                                                    icon: 'img/home1.png',
		                                                    title: place.name,
		                                                    position: place.geometry.location
		                                              });   
		           
		            markers.push(marker);  
		                                       
		            bounds.extend(place.geometry.location);
		           // input.val="";
		            
		        }        
		        moveMarker( map, marker );  
		        map.fitBounds(bounds);
		    
		    
		    
		    } 
		 
	
	
function showaddpayment(map){
	

	    var markers = [];
	    var bounds = map.getBounds();
	  
	   
	   input = document.getElementById('pac-input4');	
	    
	    // map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
	    var searchBox = new google.maps.places.SearchBox(input);
	    google.maps.event.addListener(searchBox, 'places_changed', function()
	    {
	    	var places = searchBox.getPlaces();
	                                  
	        for (var i = 0, marker; marker = markers[i]; i++) 
	        {
	        	marker.setMap(null);
	        }
	        markers = [];
	        var bounds = new google.maps.LatLngBounds();
	        for (var i = 0, place; place = places[i]; i++) 
	        {
	        	var image = {
	        					url: place.icon,
	                            size: new google.maps.Size(35, 35),
	                            origin: new google.maps.Point(0, 0),
	                            anchor: new google.maps.Point(17, 34),
	                            scaledSize: new google.maps.Size(15, 15)
	                        };
	            var marker = new google.maps.Marker({
	                                                	map: map,
	                                                    icon: 'img/home1.png',
	                                                    title: place.name,
	                                                    position: place.geometry.location
	                                              });   
	           
	            markers.push(marker);  
	                                       
	            bounds.extend(place.geometry.location);
	           // input.val="";
	            
	        }        
	        moveMarker( map, marker );  
	        map.fitBounds(bounds);
	    });
	    
	   
	}

		    
		    
		 

function moveMarker( map, marker ) {
    
    //delayed so you can see it move
    setTimeout( function(){ 
    
        marker.setPosition( new google.maps.LatLng( localStorage.getItem("lat"), localStorage.getItem("lon") ) );
        map.panTo( new google.maps.LatLng(localStorage.getItem("lat"), localStorage.getItem("lon") ) );
        $("#pac-input3").val(localStorage.getItem("ADDRESS-CUR"));
        
    }, 10000);

};


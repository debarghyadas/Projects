  /*  function readURLL() {
          
            navigator.camera.getPicture(uploadPhotoo,
                                        function(message) { swal("BOOKD", "You Canceled!", "error"); },
                                        {
                                        quality: 50,
                                        destinationType: navigator.camera.DestinationType.NATIVE_URI,
                                        
                                        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
                                        correctOrientation: true
                                        }
                                        );
                                        
        }*/
    
    var global_image;

	 function readURL(input) {
//			var reader = new FileReader();
//		
//			reader.onload = function (e) {
//				// get loaded data and render thumbnail.
//				//document.getElementById("image").src = e.target.result;
//				var image = e.target.result;
//				
//				document.getElementById("thumb-pic-edit").style.backgroundImage = 'url('+image+')';
//				  
//			};
//		
//			// read the image file as a data URL.
//			reader.readAsDataURL(input.files[0]);
//			global_image=input.files[0];
//			
	       
			
			 if (input.files && input.files[0]) {
				 
				 console.log(input.files[0]);
				 var file = input.files[0].name.split('.');
		    	 
		    	 var file1 = file[0];
		    	 var file2 = file[1].toLowerCase();
		    	 console.log(file1);
		    	 console.log(file2);
		    	 console.log(file2 == "png" );
		    	 
		    	 if(file2 == "png" || file2 == "jpeg" || file2 == "jpg"){
		    	 
				var reader = new FileReader();
			
				reader.onload = function (e) {
					// get loaded data and render thumbnail.
					//document.getElementById("image").src = e.target.result;
					var image = e.target.result;
					
					document.getElementById("thumb-pic-edit").style.backgroundImage = 'url('+image+')';
				};
			
				// read the image file as a data URL.
				reader.readAsDataURL(input.files[0]);
				global_image=input.files[0];
			
	       
			 }
		    	 
		    	 else{
		    		 
		    			swal("BOOKD!", "Please upload an image file", "error"); 
		    		 
		    	 }
		  
		    	 
			 }
			 
			
	}
	 
	
      function getabout(){
		 $("#aboutt").empty(); 
		  jQuery.ajax({
	           type: 'POST',
	           beforeSend: function() {
	              
	           //  $('.custom-loader').css({'display':'block'});               

	           }, //Show spinner
	           complete: function() {
	             
	           /* setTimeout(function() {
	               $('.custom-loader').css({'display':'none'});       
	                       }, 2000);
	            */
	            
	           }, //Hide spinner
	            url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/aboutus',
	            data: {
	            tag: 'aboutus',

	          





	            },
	            
	            success: function(response) {
	             console.log(response);
	            var jsObject = JSON.parse(response);
	            // alert(jsObject.data.about);
	        	
	        //alert(jsObject.data.terms.length);
	        
	        // for(var l=0;l<jsObject.data.about.length;l++){
	        	
	        	
	        	  $("#aboutt").html(jsObject.data.about); 
	        	
	        	
	        	
	        // }



	            },
	            
	            error: function (response) {
	                //alert(JSON.stringify(response));
	              swal("BOOKD", "OOPS! Server Unreachable!Try Again", "error");
	             },

	             
	             timeout: 20000
	            
	            }); 
	             
	             
	                
	      
	     
		 
		 
		 
		 
		 
		 
		 
		 
		 
	 }
	 





	 
	 
	 function getprivacy(){
		 $("#priv").empty(); 
		  jQuery.ajax({
	           type: 'POST',
	           beforeSend: function() {
	              
	           //  $('.custom-loader').css({'display':'block'});               

	           }, //Show spinner
	           complete: function() {
	             
	           /* setTimeout(function() {
	               $('.custom-loader').css({'display':'none'});       
	                       }, 2000);
	            */
	            
	           }, //Hide spinner
	            url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/terms',
	            data: {
	            tag: 'terms',

	          





	            },
	            
	            success: function(response) {
	             console.log(response);
	            var jsObject = JSON.parse(response);
	           // alert(jsObject.data[0].status);
	        	
	        //alert(jsObject.data.terms.length);
	        
	        for(var l=0;l<jsObject.data.terms.length;l++){
	        	
	        	
	        	 $("#priv").append('<h3>'+jsObject.data.terms[l].name+'</h3>'
                +'<p>'+jsObject.data.terms[l].details+'</p>'); 
	        	
	        	
	        	
	        }



	            },
	            
	            error: function (response) {
	                //alert(JSON.stringify(response));
	              swal("BOOKD", "OOPS! Server Unreachable!Try Again", "error");
	             },

	             
	             timeout: 20000
	            
	            }); 
	             
	             
	                
	      
	     
		 
		 
		 
		 
		 
		 
		 
		 
		 
	 }
	 
	 
	
	 
	function privacy_in_new_tab(){
		
		
		 window.open("http://www.unifiedinfotech.co.in/webroot/team1/FLNG-MOB/#privacy");
		
		
		
		
	} 
	 
	 /*prototyped Date*/



	 Date.prototype.yyyymmdd = function() {
	     var yyyy = this.getFullYear().toString();
	     var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
	     var dd  = this.getDate().toString();
	     return yyyy +"-"+ (mm[1]?mm:"0"+mm[0]) +"-"+ (dd[1]?dd:"0"+dd[0]); // padding
	    };

	    /*prototyped Date*/
	  

	 function get_notifications(){
		
	          var notify = new Array();
		      var uid = localStorage.getItem("UNIQUE-ID");
		      console.log(uid);
		      var d = new Date();
		      d.yyyymmdd();
		      var time = new Date();
		      
		          var time_now = (d.yyyymmdd())+" "+(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
		          
		          jQuery.ajax({
		           type: 'POST',
		           beforeSend: function() {
		              
		           //  $('.custom-loader').css({'display':'block'});               

		           }, //Show spinner
		           complete: function() {
		             
		           /* setTimeout(function() {
		               $('.custom-loader').css({'display':'none'});       
		                       }, 2000);
		            */
		            
		           }, //Hide spinner
		            url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/get_my_requests',
		            data: {
		            tag: 'get_my_requests',

		            uid : uid,
		            
		            time_now : time_now





		            },
		            
		            success: function(response) {
		             //alert(response);
		            	console.log(response);
		            var jsObject = JSON.parse(response);
		           // alert(jsObject.data[0].status);
		        	$("#noti_req").empty();
			        $(".count").empty();
		            $(".count").append(jsObject.data.length);
		            notify = jsObject.data.reverse();
		            if(jsObject.data.length > 0){
		            for(var h=0;h<notify.length;h++){
		             
		             //alert(jsObject.data[h].msg); 
		             
		$("#noti_req").append('<li onclick="get_status(\'' +notify[h].status + '\',\'' +notify[h].id + '\',\'' +notify[h].time + '\',\'' +notify[h].date + '\')">'+
		                     '<div class="noti-thumb" id="notifyy'+h+'" style="background-image:url();"></div><h3 class="noti-heading">'+notify[h].title+'</h3>'+
		                        '<p class="short-desc">'+notify[h].msg+'</p>'+
		                        '<span class="noti-date">'+convertTime24to12(notify[h].time_booked)+'</span>'
		                    +'</li>');
		
		 $("#notifyy"+h).css('background-image', 'url('+notify[h].img+')');
		             
		            }
		            }
		            
		            else{
		             
		             
		             $("#noti_req").append('<li>NO NOTIFICATIONS AVAILABLE!</li>');  
		             
		             
		             
		            }






		            },
		            
		            error: function (response) {
		                //alert(JSON.stringify(response));
		              swal("BOOKD", "OOPS! Server Unreachable!Try Again", "error");
		             },

		             
		             timeout: 20000
		            
		            }); 
		             
		             
		                
		      
		     
		     
		 
		 
		 
		 
		 
		}
	 
	 
	 
	 
	 
	 
	 function get_status(status,id,time,date){
		 
		 
		 /*alert(status);
		 alert(id);*/
		 
		 localStorage.setItem("req-id",id);
		 
		 
//		 
//		   var date_booked_arr=date.split('-');
//		   var time_booked_arr=time.split(':');
//		    var booking_date_time = date+' '+time;
//		   
//		    var date_booked = date_booked_arr[0]+'/'+date_booked_arr[1]+'/'+date_booked_arr[2];
//		
//			   var time_booked = time_booked_arr[0]+':'+time_booked_arr[1]+':'+0;
//			
//			    var tot = date_booked+' '+time_booked;
//			   
//		    var curre_date_time = Date.now();
//		    
//		    var d2 = new Date(tot);
//		    alert(d2);
//		    //d2 = new Date(dateAdd(d2,'minute',jsObject.data.waiting_minutes));
//		    
//		    var d1 = new Date(curre_date_time);
//		    alert(d1);
//		    var diff_seconds = (d2-d1);
//		    
//		   
//            
//            if(diff_seconds<=0 && (status == 2 || status ==3 || status ==1)){
//             
//            	
//            	   setTimeout(function() {
//         		      
//         		      $.mobile.navigate("#rating",{transition: "slide", reverse: false}); 
//         		      
//         		     }, 2000); 
//             
//            }
//      else{
//		     
//		   
//		    
		    
		              
		 
		 if(status == 2){
		 
		 setTimeout(function() {
		  
		  $.mobile.navigate("#confirmation",{transition: "slide", reverse: false}); 
		  
		 }, 2000);
		 }
		 else if(status == 1){
		  
		  setTimeout(function() {
		   
		   $.mobile.navigate("#suggest",{transition: "slide", reverse: false}); 
		   
		  }, 2000);
		  
		 }
		 
		 else if(status == 3){
		  
		  setTimeout(function() {
		   
		   $.mobile.navigate("#confirmation",{transition: "slide", reverse: false}); 
		   
		  }, 2000);
		  
		  
		 }
		    
		 
		}
	 
	 
	 
	  function dateAdd(date, interval, units) {
	      var ret =date; //don't change original date
	    
	      switch(interval.toLowerCase()) {
	        case 'year'   :  ret.setFullYear(ret.getFullYear() + units);  break;
	        case 'quarter':  ret.setMonth(ret.getMonth() + 3*units);  break;
	        case 'month'  :  ret.setMonth(ret.getMonth() + units);  break;
	        case 'week'   :  ret.setDate(ret.getDate() + 7*units);  break;
	        case 'day'    :  ret.setDate(ret.getDate() + units);  break;
	        case 'hour'   :  ret.setTime(ret.getTime() + units*3600000);  break;
	        case 'minute' :  ret.setTime(ret.getTime() + units*60000);  break;
	        case 'second' :  ret.setTime(ret.getTime() + units*1000);  break;
	        default       :  ret = undefined;  break;
	      }
	    
	      return ret;
	    }
	 
	 
	 

function upload(){
	
	     var profile_pic = global_image;
	     var uid =  localStorage.getItem("UNIQUE-ID");
	  	 var first_name = $("#first-name").val();
	  	 var last_name = $("#last-name").val();
	  	 var email = $("#edit-email").val();
	  	 var contact_no = $("#edit-mobile").val(); 
	  	 
	  	console.log(profile_pic);
	  	console.log(uid);
	  	console.log(first_name);
	  	console.log(last_name);
	  	console.log(email);
	  	console.log(contact_no);
	  	
	  	
	    var fd = new FormData();
	    if(profile_pic === null || profile_pic == "" || profile_pic == "null" ){
	    	console.log("NO PIC");
	    	 fd.append("uid", uid);
	         fd.append("first_name",first_name);
	         fd.append("last_name",last_name);
	         fd.append("email",email);
	         fd.append("contact_no",contact_no);
	         fd.append("tag", 'update_profile');
	    	
	    }
	    else{
	    	
	    	  fd.append("profile_pic", profile_pic);
	          fd.append("uid", uid);
	          fd.append("first_name",first_name);
	          fd.append("last_name",last_name);
	          fd.append("email",email);
	          fd.append("contact_no",contact_no);
	          fd.append("tag", 'update_profile');
	  	  	
	    	
	    }
      
	  	
		
	   	 jQuery.ajax({
	         type: 'POST',
	         beforeSend: function() {
	        	 // alert("ahoii222");	
	        	 $('.custom-loader').css({'display':'block'});                
	        
	        }, //Show spinner
	          complete: function() {
	        	  //alert("ahoii333");	
	           setTimeout(function() {
	        	   $('.custom-loader').css({'display':'none'}); 
	                      }, 2000);
	           
	           
	         }, //Hide spinner
	           url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/update_profile',
	           data:fd,
	           
	           processData: false,
	           contentType: false,
	           
	           success: function(response) {
	           console.log(response);
	          var jsObject = JSON.parse(response);
	           var result = jsObject.status;
	           var msg = jsObject.msg;
	     
	           if(result == 1){
	        	   
	        	 
	        	   swal("BOOKD", "sucessfully updated!", "success");
	                
	           }
	           else{
	           	
	           	
	        	   swal("BOOKD", "updation not successfull", "error");
	           	
	           }
	          
	           },
	           
	           error: function (response) {
	              //alert(JSON.stringify(response));
	          	 swal("BOOKD", "OOPS! Something Went Wrong with the server.Try Again", "error");
	           },
	         
	           
	           });
	    
		
		
	  	
	  	
	  	
	  	
}


function checkforstatus(){
	
 	var request_id = localStorage.getItem("req-id");
 	
 	console.log(request_id);
	
 	 jQuery.ajax({
         type: 'POST',
         beforeSend: function() {
        	 // alert("ahoii222");	
        	 $('.custom-loader').css({'display':'block'});                
        
        }, //Show spinner
          complete: function() {
        	  //alert("ahoii333");	
           setTimeout(function() {
        	   $('.custom-loader').css({'display':'none'}); 
                      }, 2000);
           
           
         }, //Hide spinner
           url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/ajax_check_girl_request_status',
           data: {
           tag: 'ajax_check_girl_request_status',
           request_id:request_id
         
                   
        
           },
           
           success: function(response) {
           //alert(response);
           var jsObject = JSON.parse(response);
           var result = jsObject.status;
           var msg = jsObject.msg;
           console.log(response);
           if(result == 1){
        	   
        	 
        		localStorage.setItem("page-id","");
  	    		localStorage.setItem("page-id",jsObject.data.details.id);
  	    		// localStorage.setItem("req-id","");
  	    		// localStorage.setItem("req-id",jsObject.data.details.request_id);
  	    		
  	    		if(jsObject.data.details.id == 2){
	  	    		  
	  	    		
	  	    		  $.mobile.navigate("#confirmation",{transition: "flip", reverse: true});
	  	    			
	  	    		}
	  	    		else if(jsObject.data.details.id == 3){
	  	    			
	  	    		
	  	    			 $.mobile.navigate("#suggest",{transition: "flip", reverse: true});
	  	    			
	  	    			
	  	    		}
	  	    		
                
           }
           else{
           	
           	
        	 
           	
           }
          
           },
           
           error: function (response) {
              //alert(JSON.stringify(response));
          	 swal("BOOKD", "OOPS! Something Went Wrong with the server.Try Again", "error");
           },
         
           
           });
    
	
	
	
}
    
    function uploadPhotoo(imageURI) {
        /**/
        //alert("45");
        var largeImage = document.getElementById('thumb-pic-edit');
        window.localStorage.setItem("imageURI",imageURI);
       // largeImage.style.display = 'block';
      /*  $('#poster')
        .attr('src', imageURI)
        .width(120)
        .height(120);*/
      //  alert(imageURI);
    	$('#thumb-pic-edit').css('background-image', 'url(' + imageURI + ')');
    	
    }
    
    function edit(uid , first_name , last_name , email ,contact_no){
    //alert("ahoii");	
   	
   	 jQuery.ajax({
         type: 'POST',
         beforeSend: function() {
        	 // alert("ahoii222");	
        	 $('.custom-loader').css({'display':'block'});                
        
        }, //Show spinner
          complete: function() {
        	  //alert("ahoii333");	
           setTimeout(function() {
        	   $('.custom-loader').css({'display':'none'}); 
                      }, 2000);
           
           
         }, //Hide spinner
           url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/update_profile',
           data: {
           tag: 'update_profile',
           uid : uid,
           first_name : first_name,
           last_name : last_name,
           email : email,
           contact_no:contact_no,
         
                   
        
           },
           
           success: function(response) {
           //alert(response);
           var jsObject = JSON.parse(response);
           var result = jsObject.status;
           var msg = jsObject.msg;
     
           if(result == 1){
        	   
        	 
        	   swal("BOOKD", "sucessfully updated!", "success");
                
           }
           else{
           	
           	
        	   swal("BOOKD", "updation not successfull", "error");
           	
           }
          
           },
           
           error: function (response) {
              //alert(JSON.stringify(response));
          	 swal("BOOKD", "OOPS! Something Went Wrong with the server.Try Again", "error");
           },
         
           
           });
    
	
	
	   
    	
    }
    
    
    function calldialog() {
    
    	  cordova.dialogGPS("Your GPS is Disabled, this app needs to be enable to works.",//message
    	                    "Use GPS, with wifi or 3G.",//description
    	                    function(buttonIndex){//callback
    	                      switch(buttonIndex) {
    	                        case 0: break;//cancel
    	                        case 1: break;//neutro option
    	                        case 2: break;//user go to configuration
    	                      }},
    	                      "Please Turn on GPS",//title
    	                      ["Cancel","Later","Go"]);//buttons
    	
    	}
    
    function checkgps(){
    	
    	CheckGPS.check(function(){
    	    //GPS is enabled!

    	  },
    	  function(){
    	    //GPS is disabled!
    		
    		 	swal({title:"<p style = 'color:#FFC0CB'>",text: "Please turn your gps settings on!.Map wont display.", html:true});

    	  });
    	
    	
    	
    }
    
    function update_user(){
   
	
    	
     var uid =  localStorage.getItem("UNIQUE-ID");
  	 var first_name = $("#first-name").val();
  	 var last_name = $("#last-name").val();
  	 var email = $("#edit-email").val();
  	 var contact_no = $("#edit-mobile").val();
  	 var profile_pic1 = $('#thumb-pic-edit').css('background-image');
  	 var  profile_pic = profile_pic1.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
  	 var pic = profile_pic.substring(profile_pic.lastIndexOf('/')+8);
  	 var pico = profile_pic.substring(0,4);
  	// alert(pico);
  if(pic == "html"){
	 // alert("hii");
	  edit(uid , first_name , last_name , email ,contact_no);
	  
  }
  else if(pico == "http"){
	  
	 // alert("hiiii");
	  edit(uid , first_name , last_name , email ,contact_no); 
	  
  }
  else
  
  {
	  var re = /(?:\.([^.]+))?$/;
	 
	     //alert(profile_pic+""+uid+""+first_name+""+last_name+""+email+""+contact_no);
	  $('.custom-loader').css({'display':'block'}); 
          var options = new FileUploadOptions();
          options.fileKey="profile_pic";
          if(re.exec(profile_pic)[1] == "png"){
        	  //alert("09");
          options.fileName=profile_pic.substr(profile_pic.lastIndexOf('/')+1);
          
          }
          else{
           options.fileName=profile_pic.substr(profile_pic.lastIndexOf('/')+1)+'.png';
          }
          options.mimeType="text/plain";
          var params = new Object();
          options.mimeType="image/jpeg";
          params.uid = uid;
          params.first_name = first_name;
          params.last_name = last_name;
          params.email = email;
          params.contact_no = contact_no;
          
         // alert(options.fileName+""+params.uid+""+ params.first_name+""+ params.last_name+""+params.email+""+ params.contact_no);
       
          options.params = params;
          
          options.chunkedMode = false;
          options.headers = {
          Connection: "close"
          };
          var ft = new FileTransfer();
          
          ft.upload(profile_pic, encodeURI("http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/update_profile"), win, fail, options);
    
          
       
  }
   
	
    	
	   
    	
    	
    }
    
    
    function win(r) {
        //alert(r.response);
    	 $('.custom-loader').css({'display':'none'}); 
        var resp = JSON.parse(r.response);
        var msg = resp.msg;
        var status = resp.status;
        if(status == 0){
        	
        	swal("BOOKD", "select a picture", "error");
        }
        else{
        swal("BOOKD", "updated succesfully", "success");
        }
     /*   swal("Rent My Room", "Registration done with image uploading", "success");
        $("#poster").attr('src','');
        $("#signup_user").val('');
        $("#signup_password").val('');
        $("#signup_cpassword").val('');
        $("#signup_email").val('');
        $("#signup_mobno").val('');
        $("#signup_address").val('');
       // $("#pmarcname").val('');
     //   $("#pmarcllid").val('');
        $.mobile.navigate("#login");*/
        //document.location.href="index.html";
        /* */
    }

    function fail(error) {
        //alert("An error has occurred: Code = " + error.code);
        // alert(JSON.stringify(error));
         //swal("Rent My Room", "Image NOT Uploaded", "error");
    	 $('.custom-loader').css({'display':'none'});  
    	 swal("BOOKD", "server error!", "error");
    }
    
    
    function fetch_home(){
     var ar1 =new Array();
     var home =	localStorage.getItem("home-add");
	 var work =  localStorage.getItem("work-add");
	 var hotel = localStorage.getItem("hotel-add");
	 if(home && work && hotel){
	 ar1.push(home,work,hotel);
	 }
	 else if(home && work){
		 ar1.push(home,work);
		 
	 }
	 else if(home && hotel){
		 ar1.push(home,hotel);
		 
	 }
	 else if(work && hotel){
		 
		 ar1.push(work,hotel);
	 }
	// alert(JSON.stringify(ar1));
	 $.mobile.navigate("#removeplace1",{transition: "slide", reverse: false});
	    $(document).on("pageshow","#removeplace1",function(){ // When entering pagetwo
	    	 //$.LoadingOverlay("show");   
	     
	    	 //clearInterval(interval);
	    	 for(var i =0;i<ar1.length;i++){
	    		 
				 $("#dyn-div ul").append('<li><li class="clearfix" id ="home_div" onclick="get_home('+ar[i]+')"><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">'+ar1[i]+'</div></li>'); 
		       }
	    	 
	    	});
	    
	    
	    $(document).on("pagehide","#removeplace1",function(){ // When entering pagetwo
	    	 //$.LoadingOverlay("show");   
	     
	    	 //clearInterval(interval);
	    	 for(var i =0;i<ar1.length;i++){
	    		 
				 $("#dyn-div ul").empty(); 
		       }
	    	 
	    	});
	     
	
	// $("#dyn-div ul").append('<li><li class="clearfix" id ="home_div"><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Home</div><div class="place-address" id="home-add">'+home+'</div></li>');
    	 
    	
    	
    }
    
   

    
    function getbacktolisting(){
    	
    	   $.mobile.navigate("#listing",{transition: "slideup", reverse: false});
    	
    }
    
    function list(){
    	
    	if("#"+$.mobile.pageContainer.pagecontainer( 'getActivePage' ).attr( 'id' ) == "#listing"){
            
            // $.mobile.navigate("#home",{transition: "slideup", reverse: false});
       var lat =localStorage.getItem("lat");
       var lon = localStorage.getItem("lon");
                                                
                                            
 
                                                           
                                                           //  alert("Hello");
                                                           //listing();
                                                           
     //  listing();
  // alert('gg');
   var sendable_data = new Array();
  // alert("7897789");
   sendable_data[0]=lon;
   sendable_data[1]=1;
 
   get_no_of_girls(lat,sendable_data);
  // alert("8481");
  
   //var state = localStorage.getItem("flag500");
   //alert(state);
     //if(state == 0){
  	   
  	   
  	   
     //}  
     
     //else{

       
      

                                                
      //}
  	  }
  	else{
  		
  		listing();
  	}
  	
    	
    }
    
    function iflisting(){
    var	 movii = localStorage.getItem("girl_id");
    
    
    var suggest = localStorage.getItem("sug");
	
    var ser = localStorage.getItem("ser");
    	if(movii == '' || movii === 'undefined' || movii === undefined && ser == ''){
    		
    		   swal("BOOKD", "Sorry no girls are available!", "info");
    		
    	}
    	else if(movii == '' || movii === 'undefined' || movii === undefined && ser == "true"){
    		
    		
    		  swal("BOOKD", "Sorry, BOOKD is currently unavailable in your area, but don't worry, we will be coming to your area soon!", "info");
    		
    		
    	}
    	
    	
    	else if(suggest == "true"){
    		
    		 $.mobile.navigate("#suggest",{transition: "slide", reverse: false});
    	}
    	  else if("#"+$.mobile.pageContainer.pagecontainer( 'getActivePage' ).attr( 'id' ) == "#listing"){
              
              // $.mobile.navigate("#home",{transition: "slideup", reverse: false});
         var lat =localStorage.getItem("lat");
         var lon = localStorage.getItem("lon");
                                                  
                                              
   
                                                             
                                                             //  alert("Hello");
                                                             //listing();
                                                             
       //  listing();
    // alert('gg');
     var sendable_data = new Array();
    // alert("7897789");
     sendable_data[0]=lon;
     sendable_data[1]=1;
    // alert(JSON.stringify(sendable_data));
     get_no_of_girls(lat,sendable_data);
    // alert("8481");
    
     //var state = localStorage.getItem("flag500");
     //alert(state);
       //if(state == 0){
    	   
    	   
    	   
       //}  
       
       //else{

         
        

                                                  
        //}
    	  }
    	else{
    		
    		listing();
    	}
    	
    	
    }
    
    function listing(){
    	
    	//alert("0-0-0");
   
	
  	  $("#content1").empty();
	 
	  
    	var mov;
    	 var mov1;
    	 mov = localStorage.getItem("girl_id");
    	 //alert(JSON.parse(mov));
    	 //alert(mov);
    	/* for(var i=0;i<mov.length;i++){
    		if(i) 
    		mov1 +=',';
    		
    		  mov1 += mov[i];
    		
    	 }*/
    	//var girl_ids = JSON.parse(mov);
    	var girl_ids = mov;
    	//alert(girl_ids);
    	
    
    	
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
              url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/get_girls_details',
              data: {
              tag: 'get_girls_details',
              girl_ids: girl_ids,
            
                      
           
              },
              
              success: function(response) {
              //alert(response);
              var jsObject = JSON.parse(response);
              var result = jsObject.status;
              var gname = jsObject.data[0].name;
              var gage = jsObject.data[0].age;
              var gheight = jsObject.data[0].height;
              var ghair = jsObject.data[0].haircolor;
              var gbio =  jsObject.data[0].bio;
              var glocation = jsObject.data[0].location;
              
             // var gpics =  jsObject.data[0].pics;
             
              /*alert(gname);
              alert(gage);
              alert(gheight);
              alert(ghair);
              alert(gbio);
              
              alert(glocation);*/
            //  alert(JSON.stringify(gpics));
            /*  for(var i=0;i<gpics.length;i++){
            	  
            	  alert(gpics[i].link);
            	  
              }
              alert(gpics[0].link);*/
              
              
              for(var i=0;i<jsObject.data.length;i++){
  	    		
     $("#content1").append('<a href="" class="pic" data-transition="slide" data-ajax="false" onClick="get_details('+jsObject.data[i].id +');"><span class="pagi-thumb" id="pic'+i+'"></span><figure><span class="model-name">'+jsObject.data[i].name+'</span><span class="model-age">'+jsObject.data[i].age+'</span></figure></a>')
            	      		       
            	      	    	// $('.pagi-thumb').css('background-image', 'url('+jsObject.data[i].profile_pic+')');
    $("#pic"+i).css('background-image', 'url('+jsObject.data[i].profile_pic+')');
            	                  
            	                   //alert($("#content1").html());
     }
              
         	
              
              
             var hours = localStorage.getItem("hrs");
             var mins = localStorage.getItem("mins");
             
             if(mins == "000"){
            	 var mins11 = "0";
             }

             else  if(mins == "00"){
            	 var mins11 = "0";
             }
             else if(mins == "0"){
            	 
            	 var mins11 = "0"
            	 
             }
             
             else{
            	 
            	 var mins11 = mins.replace(/^0+/, '');
            	 
             }
            // var mins11 = mins.replace(/^0+/, '');
             var result = (hours < 10 ? "0" + hours : hours) + ":" + (mins11 < 10 ? "0" + mins11 : mins11);
          /*   var dd = "AM";
             var h = hours;
             if (h >= 12) {
                 h = hours-12;
                 dd = "PM";
             }
             if (h == 0) {
                 h = 12;
             }
             mins = mins<10?"0"+mins:mins;

           
             /* if you want 2 digit hours:
             h = h<10?"0"+h:h; */

            // var pattern = new RegExp("0?"+hours+":"+mins);

           //  var replacement = hours+":"+mins;
             /* if you want to add seconds
             replacement += ":"+s;  */
            // replacement += " "+dd;
           
             var time =convertTime24to12(result);
          
          
             
             $(".book-time").empty();
        	// $(".pull-right").append('<i class="fa fa-clock-o"></i>'+hours+':'+mins+'');
             $(".book-time").append('<i class="fa fa-clock-o" style="color:#f16072;"></i> <input type="text" id="date_timeee" value="'+ time +'" data-role="none" readonly>');
           
             $('#date_timeee').mobiscroll().time({
      	        theme: 'android',   
      	        mode: 'scroller',      
      	        display: 'modal',
      	      headerText: 'ENTER YOUR DESIRED MEETING TIME',
      	      minWidth: 100
      	                        
      	    });
             $('#date_timeee').empty();
             $("#date_timeee").bind("change", function() {
          	      // alert($(this).val()); 
          	       
          	    var time = $(this).val();
    	       var hours = Number(time.match(/^(\d+)/)[1]);
    	       var minutes = Number(time.match(/:(\d+)/)[1]);
    	       var AMPM = time.match(/\s(.*)$/)[1];
    	       if (AMPM == "PM" && hours < 12) hours = hours + 12;
    	       if (AMPM == "AM" && hours == 12) hours = hours - 12;
    	       var sHours = hours.toString();
    	       var sMinutes = minutes.toString();
    	       if (hours < 10) sHours = "0" + sHours;
    	       if (minutes < 10) sMinutes = "0" + sMinutes;
    	       //alert(sHours + ":" + sMinutes);
    	        localStorage.setItem("flag", "true");
    	    	localStorage.setItem("hrs", "");
        		localStorage.setItem("mins","");
    	   	localStorage.setItem("hrs", sHours);
    		localStorage.setItem("mins",AddZero(sMinutes));
    		
    		localStorage.setItem("req-hrs", "");
    		localStorage.setItem("req-mins","");
    	 	localStorage.setItem("req-hrs", sHours);
    		localStorage.setItem("req-mins",AddZero(sMinutes));
    		
    		 var lat = localStorage.getItem("lat");
   		 var lon = localStorage.getItem("lon");
   		
   		//get_no_of_girls(lat , lon);
   		// iflisting();
   		list();
          	 });
          	 
            
              $.mobile.changePage("#listing", {transition: "fade", reverse: false}, true, true);
            
             /* if(result == 1){
              	
              	
              	  
              	  $("#full-name").val(firstname.concat(lastname));
              	  $("#email-set").val(email);
              	  $("#mobile").val(contact_no);
           	  $("#set-home").prepend(home);
           	  $("#set-work").prepend(work);
           	  $("#set-hotel").prepend(hotel);
           	//  $('#div-img').prepend('<img src="'+profile_pic+'" alt="" />');
           	  //$("<img />").attr("src");
           	  $('#thumb-pic').css('background-image', 'url(' + profile_pic + ')');
           	  alert($('#div-img').html()); 
                 localStorage.setItem("firstname1",firstname);	
                 localStorage.setItem("firstname2",lastname);	
                 localStorage.setItem("firstname3",email);	
                 localStorage.setItem("firstname4",contact_no);	
                 localStorage.setItem("img",profile_pic);	
                 localStorage.setItem("home-add", home);
           	  localStorage.setItem("work-add", work);
           	  localStorage.setItem("hotel-add", hotel);
                   
              }
              else{
              	
             // 	 swal("BOOKD", message, "error");
              	// $("#Femail").val('');
           	 	  $("#full-name").val('');
                  	  $("#email").val('');
                  	  $("#mobile").val('');
              }*/
             
              },
              error: function (response) {
                  //alert(JSON.stringify(response));
             	  swal("BOOKD", "OOPS! Server Unreachable!Try Again", "error");
               },
             
               
               timeout: 20000
              
              });
       
   	
	    
    	
    }
    
    function convertdate(timeString){
    	
    	
    	var H = +timeString.substr(0, 2);
    	var h = (H % 12) || 12;
    	var ampm = H < 12 ? "AM" : "PM";
    	timeString = h + timeString.substr(2, 3) + ampm;
    	return timeString;
    }
    
    
    function convertTime24to12(time24){
    	var tmpArr = time24.split(':'), time12;
    	if(+tmpArr[0] == 12) {
    	time12 = tmpArr[0] + ':' + tmpArr[1] + ' pm';
    	} else {
    	if(+tmpArr[0] == 00) {
    	time12 = '12:' + tmpArr[1] + ' am';
    	} else {
    	if(+tmpArr[0] > 12) {
    	time12 = (+tmpArr[0]-12) + ':' + tmpArr[1] + ' pm';
    	} else {
    	time12 = (+tmpArr[0]) + ':' + tmpArr[1] + ' am';
    	}
    	}
    	}
    	return time12;
    	}
    
    function toMinutes (k) {
        var h = k * 60;
        return h;
    }
    
    function fomartTimeShow(h_24) {
        var h = h_24 % 12;
       
        //return (h < 10 ? '0' : '') + h + ':00';
        return h;
    }
    
    
    function dateCompare(time1,time2) {
    	  var t1 = new Date();
    	  var parts = time1.split(":");
    	  t1.setHours(parts[0],parts[1],0);
    	  var t2 = new Date();
    	  parts = time2.split(":");
    	  t2.setHours(parts[0],parts[1],0);

    	  // returns 1 if greater, -1 if less and 0 if the same
    	  if (t1.getTime()>t2.getTime()) return 1;
    	  if (t1.getTime()<t2.getTime()) return -1;
    	  return 0;
    	}

    
    
    function AddZero(num) {
        return (num >= 0 && num < 10) ? "0" + num : num + "";
    }
    
    function payment_details(){
    	
    	
    	
    	
    }
    
    

    
    function toSeconds(k) {
    	  var h = k * 60;
         
        alert(h);
        return h;
    }
    function rat(){
    	
   
	    
	
    var rating= $('#rat-val').val(); 
    //alert(rating);
    var girl_id = localStorage.getItem("g_id");
    var uid =  localStorage.getItem("UNIQUE-ID");
    var now = new Date();
    var strdate = [[AddZero(now.getFullYear()), AddZero(now.getMonth() + 1), AddZero(now.getDate())].join("-")];
    var strtime = [[AddZero(now.getHours()), AddZero(now.getMinutes())].join(":"),AddZero(now.getSeconds())].join(":");
	var request_id = localStorage.getItem("req-id");
    var date_time = strdate+' '+strtime;
  /*  alert(date_time);  
    alert(uid);
    alert(girl_id);
    alert(rating);*/
   
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
              url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/rate_the_girl',
              data: {
              tag: 'rate_the_girl',
              uid : uid,
              girl_id : girl_id,
              date_time: date_time, 
              request_id:request_id,
              rating: rating,
                           
           
              },
              
              success: function(response) {
           //   swal("BOOKD", "Thanks!.Hope to See you soon!", "success");
          	swal({   title: "BOOKD!",   text: "Thanks!.Hope to See you soon!",   timer: 2000,   showConfirmButton: false });
            setTimeout(function() {
            	go_home();	
            }, 3000);
          	
             // alert(response);
           /*   var jsObject = JSON.parse(response);
              var result = jsObject.status;
              var message = jsObject.msg;
              if(result == 1){
              	
              	 swal("BOOKD", message, "success");
              	
              	 $("#fname").val('');
                   $("#lname").val('');
                   $("#email").val('');
                   $("#phno").val('');
                   $("#password").val('');
                   $("#cpassword").val('');
                   $.mobile.navigate("#login");
              }
              else{
              	
              	 swal("BOOKD", message, "error");
              	 $("#fname").val('');
                   $("#lname").val('');
                   $("#email").val('');
                   $("#phno").val('');
                   $("#password").val('');
                   $("#cpassword").val('');
              }*/
             
              },
              error: function (response) {
                  //alert(JSON.stringify(response));
             	  swal("BOOKD", "OOPS! Server Unreachable!Try Again", "error");
               },
             
               
               timeout: 20000
              
              });
       
         
	   
    	
    }
    function go_home(){
    	localStorage.setItem("page-id", "");
    //	localStorage.clear("page-id", "");
    	
    	
    	if(localStorage.getItem("payment") == "true"){
    		
    		$.mobile.navigate("#paymentconfirmation",{transition: "slide", reverse: false});
    	}
    	else{
    		localStorage.setItem("page-id", "");
    		localStorage.setItem("req-hrs", "");
    		localStorage.setItem("req-mins","");
    		
    		  if("#"+$.mobile.pageContainer.pagecontainer( 'getActivePage' ).attr( 'id' ) == "#standby"){
    			//  cancel_befreaproval(4);
    			  localStorage.setItem("status", "");
    			  localStorage.setItem("status", 4);
    			  cancel_befreaproval();
        		  }
    		  else if("#"+$.mobile.pageContainer.pagecontainer( 'getActivePage' ).attr( 'id' ) == "#confirmation"){
    			  if(localStorage.getItem("status") == 6 ){
    				  
    				  cancel_befreaproval();
    				  
    			  }
    			  else{
    			  localStorage.setItem("status", "");
    			  localStorage.setItem("status", 5);
    			  cancel_befreaproval();
    			  }
    		  }
    		  
            else if("#"+$.mobile.pageContainer.pagecontainer( 'getActivePage' ).attr( 'id' ) == "#suggest"){
    			  
            	localStorage.setItem("status", "");
  			    localStorage.setItem("status", 6);
  			    //cancel_befreaproval();
    		  }
            else{
            	
            	$.mobile.navigate("#home",{transition: "pop", reverse: false});
            }
    		
    	
    	}
    	
    }
    
    
    
    function go_home22(){
    	localStorage.setItem("page-id", "");
    	
    localStorage.setItem("payment", "");
    $.mobile.navigate("#home",{transition: "slide", reverse: false});
    	
    }
    
    
    
    
    function get_confirmed(id){
    	//alert(id);
    	
  
	    	  swal({
	    	        title: "Are you sure?",
	    	        text: "Want to Proceed?",
	    	        type: "warning",
	    	        showCancelButton: true,
	    	        confirmButtonColor: "#DD6B55",
	    	        confirmButtonText: "Yes, Please Proceed!",
	    	        closeOnConfirm: true
	    	        },
	    	        
	    	       
	    	        function(){
	    	        	
	    	        
	    	        setTimeout(function() {
	    	            
	    	         	localStorage.setItem("confirm","");
	    	           	localStorage.setItem("confirm","true");
	    	          	localStorage.setItem("sug","");
	    	          	localStorage.setItem("sug","true");
	    	        	localStorage.setItem("page-id", "");
	    	        	
	    	        	var girl_id = id;
	    	       	   localStorage.setItem("g_id", id);
	    	       	  get_details(id);
	    	    	   
	    	                   
	    	                   
	    	                   }, 2000);
	    	        });
	    		
    
	           
	    
		
	    
    	
    }
    
    
    
    function book_girl(){
    	
    	var status = localStorage.getItem("confirm");
    	if(status == "true"){
    		
    		var request_id = localStorage.getItem("req-id");
    		var girl_id =  localStorage.getItem("g_id");
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
    	           url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/alternate_approve',
    	           data: {
    	           tag: 'alternate_approve',
    	           request_id:request_id,
    	           girl_id:girl_id,
    	         
    	                   
    	        
    	           },
    	           
    	           success: function(response) {
    	           //alert(response);
    	       
    	         var jsObject = JSON.parse(response);
    	         //alert(JSON.stringify(jsObject));
                 var result = jsObject.status;
                  var msg = jsObject.msg;
                 
                  if(result == 1){
                	  
                		swal({   title: "BOOKD!",   text: "Confirmed!",   timer: 3000,   showConfirmButton: false });
                		  localStorage.setItem("confirm", "");
                  		
                	  setTimeout(function() {
                	  	
                		  $.mobile.navigate("#confirmation",{transition: "slide", reverse: false});
                		
                	  }, 3000);
                		
                  }
            
               
           
    	           },
    	           
    	           error: function (response) {
                       //alert(JSON.stringify(response));
                  	  swal("BOOKD", "OOPS! Server Unreachable!Try Again", "error");
                    },
                  
                    
                    timeout: 20000
    	           
    	           });
    		
    		
    	}
    	
    	else{
    		
    		$.mobile.navigate("#paymentconfirmation",{transition: "pop", reverse: false});
    	}
    	
    	
    	
    }
    
    function get_details(id){
    	
    	//alert(id);
 
    	 localStorage.setItem("g_id", id);
    	var girl_ids = id;
    	//alert(girl_ids);
        
       
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
              url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/get_girls_details',
              data: {
              tag: 'get_girls_details',
              girl_ids: girl_ids,
            
                      
           
              },
              
              success: function(response) {
             // alert(response);
              var jsObject = JSON.parse(response);
              var result = jsObject.status;
              var gname = jsObject.data[0].name;
              var gage = jsObject.data[0].age;
              var gheight = jsObject.data[0].height;
              var ghair = jsObject.data[0].haircolor;
              var gbio =  jsObject.data[0].bio;
              var glocation = jsObject.data[0].location;
              var booking_fee = Math.ceil(jsObject.data[0].booking_fee);
              var gpics =  jsObject.data[0].pics;
              var rating = jsObject.data[0].rating;
              var number = jsObject.data[0].contact_no;
              localStorage.setItem("gname", gname);
              localStorage.setItem("nuum", number);
              localStorage.setItem("booking", booking_fee);
             
             /* alert(gname);
              alert(gage);
              alert(gheight);
              alert(ghair);
              alert(gbio);
              
              alert(glocation);*/
              //alert(jsObject.data.length);
         	// alert(jsObject.data[0].pics.length);
        	  $("#lightgallery").empty();
            //  alert(JSON.stringify(gpics));
            /*  for(var i=0;i<gpics.length;i++){
            	  
            	  alert(gpics[i].link);
            	  
              }
              alert(gpics[0].link);*/
        	  
     		 $("#slide-age").empty();
     		 $("#det-head").empty();
    		 $("#slide-height").empty();
    		 $("#slide-hair").empty();
    		 $("#slide-fee").empty();
    		 $("#slide-bio").empty();
    	
        	 if(jsObject.data[0].pics.length > 0){
        		 //var a = $(".starrr review-set").getRating(); 
        		 $("#det-head").append(jsObject.data[0].name);
        		 $("#slide-age").append(jsObject.data[0].age);
        		 $("#slide-height").append(jsObject.data[0].height);
        		 $("#slide-hair").append(jsObject.data[0].haircolor);
        		 $("#slide-fee").append('$'+booking_fee);
        		 $("#slide-bio").append(jsObject.data[0].bio);
        		// alert(typeof rating);
        		
        		 if(jsObject.data[0].rating == 1){
        			// alert("1");
        			  $(".rating-bg").empty();
        			  $(".rating-bg").append('<i class="fa-star fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i>');
        		}
        	else if(jsObject.data[0].rating == 2){
        		// alert("2");
        			  $(".rating-bg").empty();
      			  $(".rating-bg").append('<i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i>');
      		}
        	 else if(jsObject.data[0].rating == 3){
        			 //alert("3");
        			  $(".rating-bg").empty();
      			  $(".rating-bg").append('<i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i>');
      		}
        		 else if(jsObject.data[0].rating == 4){
        			// alert("4");
        			  $(".rating-bg").empty();
        			 
      			  $(".rating-bg").append('<i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star-o fa"></i>');
      		}
        		 else if(jsObject.data[0].rating == 5){
        		// alert("5");
        			  $(".rating-bg").empty();
      			  $(".rating-bg").append('<i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star fa"></i>');
      		}
        		 
        		else{
        			  $(".rating-bg").empty();
        			//alert("un");
        			  $(".rating-bg").append('<i class="fa-star-o fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i>');
        		}
        		// $("#slide-age").append("NO");
        		 
         	  for(var i=0;i<jsObject.data[0].pics.length;i++){
         		 
            		
            	  $("#lightgallery").append('<li class="pic"><a href="'+jsObject.data[0].pics[i]+'" class="pagi-thumb swipebox" data-ajax="false" id="gal'+i+'" title="'+jsObject.data[0].name+'"></a></li>')
            		       
            	    	// $('.pagi-thumb').css('background-image', 'url('+jsObject.data[i].profile_pic+')');
            	         $("#gal"+i).css('background-image', 'url('+jsObject.data[0].pics[i]+')');
            	        
            	        // alert($("#lightgallery").html());
            	        // alert(jsObject.data[0].pics[i]);
            		   }
        	 }
        	 
        	 else {
         	
        		  $("#lightgallery").append('<div class = "pagi-thumb">SORRY NO IMAGE FOUND!!.</div>'); 
        		  $("#det-head").append(jsObject.data[0].name);
        			 $("#slide-age").append(jsObject.data[0].age);
            		 $("#slide-height").append(jsObject.data[0].height);
            		 $("#slide-hair").append(jsObject.data[0].haircolor);
            		 $("#slide-fee").append('$'+booking_fee);
            		 $("#slide-bio").append(jsObject.data[0].bio);
            		 if(jsObject.data[0].rating == 1){
            			 //alert("1");
            			  $(".rating-bg").empty();
            			  $(".rating-bg").append('<i class="fa-star fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i>');
            		}
            	else if(jsObject.data[0].rating == 2){
            		// alert("2");
            			  $(".rating-bg").empty();
          			  $(".rating-bg").append('<i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i>');
          		}
            	 else if(jsObject.data[0].rating == 3){
            			 //alert("3");
            			  $(".rating-bg").empty();
          			  $(".rating-bg").append('<i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star-o fa"></i>');
          		}
            		 else if(jsObject.data[0].rating == 4){
            			 //alert("4");
            			  $(".rating-bg").empty();
            			 
          			  $(".rating-bg").append('<i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star-o fa"></i>');
          		}
            		 else if(jsObject.data[0].rating == 5){
            		// alert("5");
            			  $(".rating-bg").empty();
          			  $(".rating-bg").append('<i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star fa"></i><i class="fa-star fa"></i>');
          		}
            		 
            		else{
            			  $(".rating-bg").empty();
            			//alert("un");
            			  $(".rating-bg").append('<i class="fa-star-o fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i><i class="fa-star-o fa"></i>');
            		}
        		 
        	 }
              $.mobile.navigate("#details",{transition: "slide", reverse: false});
              
              
            
              
             /* if(result == 1){
              	
              	
              	  
              	  $("#full-name").val(firstname.concat(lastname));
              	  $("#email-set").val(email);
              	  $("#mobile").val(contact_no);
           	  $("#set-home").prepend(home);
           	  $("#set-work").prepend(work);
           	  $("#set-hotel").prepend(hotel);
           	//  $('#div-img').prepend('<img src="'+profile_pic+'" alt="" />');
           	  //$("<img />").attr("src");
           	  $('#thumb-pic').css('background-image', 'url(' + profile_pic + ')');
           	  alert($('#div-img').html()); 
                 localStorage.setItem("firstname1",firstname);	
                 localStorage.setItem("firstname2",lastname);	
                 localStorage.setItem("firstname3",email);	
                 localStorage.setItem("firstname4",contact_no);	
                 localStorage.setItem("img",profile_pic);	
                 localStorage.setItem("home-add", home);
           	  localStorage.setItem("work-add", work);
           	  localStorage.setItem("hotel-add", hotel);
                   
              }
              else{
              	
             // 	 swal("BOOKD", message, "error");
              	// $("#Femail").val('');
           	 	  $("#full-name").val('');
                  	  $("#email").val('');
                  	  $("#mobile").val('');
              }*/
             
              },
              
              error: function (response) {
                  //alert(JSON.stringify(response));
             	  swal("BOOKD", "OOPS! Server Unreachable!Try Again", "error");
               },
             
               
               timeout: 20000
              
              });
       
   	
	   
    	
    }
    
    function take_home(){
    	
    	   $("#pac-input3").val(localStorage.getItem("ADDRESS-CUR"));
    	   localStorage.setItem("work", "");
    	   localStorage.setItem("home", "");
    	   localStorage.setItem("hotel", "");
    	   localStorage.setItem("first", "");
        		navigator.geolocation.getCurrentPosition(onSuccess, onError);
        		 $('.my-location').css({'display':'none'});  
    	
    	
    	
    }
    
    
    
    function change_password(){
    	
    	 var old_pass = $("#old-password").val();
    	 var pass = $("#new-password").val();
    	 var confirm_pass = $("#confirm-password").val();
    	 var uid =  localStorage.getItem("UNIQUE-ID");
    	// alert(uid);
     	if(pass == confirm_pass){
     	
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
                     url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/change_password',
                     data: {
                     tag: 'change_password',
                     uid : uid,
                     old_pass:old_pass,
                     pass : pass,
                     confirm_pass:confirm_pass,                   
                   
                             
                  
                     },
                     
                     success: function(response) {
                    // alert(response);
                     
                    var jsObject = JSON.parse(response);
                    var result = jsObject.status;
                    var message = jsObject.msg;
                   
                   
                     if(result == 1){
                    	 
                    	 swal("BOOKD", "Successfully Updated Password!", "success");
                    	 $("#old-password").val('');
                    	 $("#new-password").val('');
                    	  $("#confirm-password").val('');
                    	 $.mobile.navigate("#settings",{transition: "slide", reverse: false});
                    	 
                   
                     }
                     else{
                    	 
                    	 swal("BOOKD", "Something went wrong!..", "error");
                    	 $("#old-password").val('');
                    	 $("#new-password").val('');
                    	 $("#confirm-password").val('');
                     	
                     }
                    
                     },
                     
                     error: function (response) {
                      //  alert(JSON.stringify(response));
                    	 swal("BOOKD", "OOPS! Something Went Wrong with the server.Try Again", "error");
                    	 $("#old-password").val('');
                    	 $("#new-password").val('');
                    	 $("#confirm-password").val('');
                     },
                   
                     
                     });
     	}
     	
     	else{
     		
     		 swal("BOOKD", "Password Mismatch!", "error");
     	}
              
    	
	   
    	
    }
    
    function del_place(type){
    	//alert(type);
   	
    	var type = type;
    	var uid =  localStorage.getItem("UNIQUE-ID");
    	
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
              url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/delete_place',
              data: {
              tag: 'delete_place',
              type:type,
              uid:uid,
            
                      
           
              },
              
              success: function(response) {
             // alert(response);
              
             var jsObject = JSON.parse(response);
             var result = jsObject.status;
             var message = jsObject.msg;
            
            
              if(result == 1){
             swal("BOOKD", "DELETED!..Successfully", "error");
             if("#"+$.mobile.pageContainer.pagecontainer( 'getActivePage' ).attr( 'id' ) == "#removeplace6"){
          		 //  storeObject.search = $("#autocomplete").val();
            	   $("#work-add2").empty();
            	   localStorage.setItem("work", "false");
            	   $("#pac-input3").val('');
            	   setTimeout(function() {
          			 $.mobile.navigate("#settings",{transition: "slide", reverse: false});
          		 }, 3000);
               
          			
          		 }
            else  if("#"+$.mobile.pageContainer.pagecontainer( 'getActivePage' ).attr( 'id' ) == "#removeplace5"){
          		 //  storeObject.search = $("#autocomplete").val();
            	   $("#home-add2").empty();
            	   localStorage.setItem("home", "false");
            	   $("#pac-input3").val('');
            	   setTimeout(function() {
          			 $.mobile.navigate("#settings",{transition: "slide", reverse: false});
          		 }, 3000);
          			
          		 }
            else if("#"+$.mobile.pageContainer.pagecontainer( 'getActivePage' ).attr( 'id' ) == "#removeplace7"){
          		 //  storeObject.search = $("#autocomplete").val();
            	   $("#hotel-add2").empty();
            	   localStorage.setItem("hotel", "false");
            	   $("#pac-input3").val('');
            	   setTimeout(function() {
          			 $.mobile.navigate("#settings",{transition: "slide", reverse: false});
          		 }, 3000);
          		 }
             	 
          
             	 
            
              }
              else{
             	 
            	  swal({   title: "OOPS!",   text: "NOT DELETED!",   timer: 3000,   showConfirmButton: false });
            	 // $.mobile.navigate("#settings",{transition: "slide", reverse: false});
              	
              }
             
              },
              
              error: function (response) {
                  //alert(JSON.stringify(response));
             	  swal("BOOKD", "OOPS! Server Unreachable!Try Again", "error");
               },
             
               
               timeout: 20000
            
              
              });
	   
    	
    }
    
    
    function home(){
    	
    	
    	  $.mobile.navigate("#home",{transition: "slide", reverse: false});
    }
   function go_payment(){
	  // alert("899");
	   $.mobile.navigate("#paymentconfirmation",{transition: "slide", reverse: false});
	   
	   
   }
   
   function request_girl(){
		
		    
		
	   var uid =  localStorage.getItem("UNIQUE-ID");
	   var today = new Date();
	   var dd = today.getDate();
	   var card_id = localStorage.getItem("CARD_ID");
	   var card_type = localStorage.getItem("TYPE");
	   var card_month = localStorage.getItem("Month");
	   var card_year = localStorage.getItem("year");
	   var cvv_no =  $("#card_cvv").val();
	   var hrs = localStorage.getItem("hrs");
	   var mins = localStorage.getItem("mins");
	   var time = hrs+':'+AddZero(mins);
	   var cur_hrs = localStorage.getItem("cur-hrs");
	   var cur_mins = localStorage.getItem("cur-mins");
	   var current_time = cur_hrs+':'+AddZero(cur_mins);
	   var girl_id = localStorage.getItem("g_id");
	   var location = localStorage.getItem("ADDRESS-CUR");
	   var mm = today.getMonth()+1; //January is 0!
	   var yyyy = today.getFullYear();
	   var day= today.getDay();

	   if(dd<10) {
	       dd='0'+dd
	   } 

	   if(mm<10) {
	       mm='0'+mm
	   } 

	   if(hrs > 24){
		  // alert("7");
		   dd=dd+1;
	   }
	   else{
		   //alert("8");
		   dd=dd;
	   }
	   today = yyyy+'-'+mm+'-'+dd;
	  
		var date = localStorage.getItem("date");
		var day = localStorage.getItem("day");
		var date1 = today;
	 /*  alert(hrs);
	   alert(date);
	   alert(girl_id);
	   alert(time);
	   alert(location);
	   alert(uid);*/
	
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
	           url: ' http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/send_request_for_a_girl',
	           data: {
	           tag: 'send_request_for_a_girl',
	           uid : uid,
	           date:date,
	           date1:date1,
	           day:day,
	           time:time,
	           current_time:current_time,
	           location:location,
	           girl_id:girl_id,
	           card_id:card_id,
	           card_month:card_month,
	           card_year:card_year,
	           cvv_no:cvv_no,
	           card_type:card_type,
	         
	                   
	        
	           },
	           
	           success: function(response) {
	          //alert(response);
	           var jsObject = JSON.parse(response);
               var result = jsObject.status;
               if(result == 1){
               var req_id = jsObject.request_id;
               localStorage.setItem("req-id", req_id);
               $("#card_cvv").val('');
               $.mobile.navigate("#standby",{transition: "pop", reverse: false});
               }
               
               else{
            	   $("#card_cvv").val('');
            	   swal("BOOKD", "OOPS! There was some problem.Please Try again!", "error");
            	   
               }
               //alert("REQ"+req_id);
               //init200();
              
             
               	
            
              	   
              	   
                 
  	   
  	       
            
              
	          
	           },
	           
	           error: function (response) {
	             //alert(JSON.stringify(response));
	        	   $('.custom-loader').css({'display':'none'}); 
	          	 swal("BOOKD", "OOPS! Something Went Wrong with the server.Try Again", "error");
	          	 
	           },
	          
                
                timeout: 60000
	         
	           
	           });
	    
		
		   
	   
   }
   
   
   
 function go_back22(){
	 
	  $.mobile.navigate("#removeplacealter",{transition: "slide", reverse: false});
	 
 }
 function go_back222(){
	 
	  $.mobile.navigate("#settings",{transition: "slide", reverse: false});
	 
}
 
 function validatecard(){
	var v; 
	
	  $('#card').validateCreditCard(function(result) {
	        /* alert('Card type: ' + (result.card_type == null ? '-' : result.card_type.name)
	                   + '<br>Valid: ' + result.valid
	                   + '<br>Length valid: ' + result.length_valid
	                   + '<br>Luhn valid: ' + result.luhn_valid);*/
		  var type =  result.card_type.name.toLowerCase();
		  localStorage.setItem("card_type", "");
		    localStorage.setItem("card_type", type);
	        if(result.valid == true){
	        	
	         v = "CARD VALID"; 
	         localStorage.setItem("carddd", "");
			    localStorage.setItem("carddd", "true");
	         $(".card-holder").empty();
	         $(".card-holder").append('<i class="fa fa-cc-'+type+'"></i>');
	        } 
	        else if(result.length_valid == true){
	        	
	          v = "CARD VALID";
	          localStorage.setItem("carddd", "");
			    localStorage.setItem("carddd", "true");
	          $(".card-holder").empty();
	          $(".card-holder").append('<i class="fa fa-cc-'+type+'"></i>');
	        }
	       if(result.valid == false){
	        	
		         v = "CARD INVALID";  	
		         localStorage.setItem("carddd", "");
				    localStorage.setItem("carddd", "false");
		         $(".card-holder").empty();
		         $(".card-holder").append('<i class="fa fa-credit-card"></i>');
		        } 
	       else if(result.length_valid == false){
		        	
		          v = "CARD INVALID ";
		          localStorage.setItem("carddd", "");
				    localStorage.setItem("carddd", "false");
		          $(".card-holder").empty();
		          $(".card-holder").append('<i class="fa fa-credit-card"></i>');
		        }
		    $.mobile.toast({
                message:  v,
                duration: "long",
                position: "bottom"
            });
	       
	      });
	 
 }
 
 function newcard(){
	 
	 
	 $.mobile.changePage('#payment', {reverse: false, changeHash: false});
	 
 }
 
 function backk(){
	
	
	/* if(localStorage.getItem("flaggg") =="true"){
		 
		 
		 
	 }*/
	 //$.mobile.navigate("#paymentconfirmation",{transition: "flip", reverse: false});
 history.back();
	 //$.mobile.navigate.history.stack[1];
	 
 }
 
 
 
 function cancel_befreaproval(){
	 
	    	 var girl_request_id = localStorage.getItem("req-id");
	    	 localStorage.setItem("sug","");
	    	 var request_status = localStorage.getItem("status");
	    	// alert(girl_request_id);
	    	// alert(request_status);
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
 url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/cancel_girl_request_from_user',
 data: {
 tag: 'cancel_girl_request_from_user',

 girl_request_id : girl_request_id ,
 
 request_status : request_status,





 },
 
 success: function(response) {
 //alert(response);
 var jsObject = JSON.parse(response);
 var result = jsObject.status;
 document.removeEventListener("resume",  function() {

	  
	  if(localStorage.getItem("page-id") == "1"){
		  //alert("111");
		   setTimeout(function(){ 
			   localStorage.setItem("flag", "");
	    	 $.mobile.navigate("#standby",{transition: "pop", reverse: false});
		   }, 3000);
	       }

	   if(localStorage.getItem("page-id") == "2"){
		  // alert("222");
		   setTimeout(function(){ 
			   localStorage.setItem("flag", "");
	    	 $.mobile.navigate("#confirmation",{transition: "pop", reverse: false});
		   }, 3000);
	       }

	   if(localStorage.getItem("page-id") == "3"){
		   //alert("333");
		   setTimeout(function(){ 
			   localStorage.setItem("flag", "");
	    	 $.mobile.navigate("#suggest",{transition: "pop", reverse: false});
		   }, 3000);
	       }

}, false);
  

 swal({   title: "Cancelled!",   text: "Your request is cancelled!",   timer: 800,   showConfirmButton: false });

 $.mobile.navigate("#home",{transition: "pop", reverse: false});


 },
 
 error: function (response) {
     //alert(JSON.stringify(response));
	  swal("BOOKD", "OOPS! Server Unreachable!Try Again", "error");
  },

  
  timeout: 20000

 
 });
	 
	 
	 
	    
	 
	 
	 
 }
 
 function validmonth(){
	 
	 var a = /^(0[1-9]|1[0-2])$/;
	 var b =   $("#card_month").val();
	 var c = AddZero(b);
	
	 if(b.match(a)){
		 
		return true; 
	 }
	 else{
		 swal("BOOKD", "Please check the month!", "error");
		 return false;
		
	 }
	 
	 
 }
 
 function validateyear(){
	 
	 var year = /^\d{4}$/;
	 var val_year = $("#card_year").val();
	 var exMonth = $("#card_month").val();
	 var today, someday;
	 today = new Date();
	 someday = new Date();
	 someday.setFullYear(val_year, exMonth, 1);
	
	 if (someday < today) {
	    swal("The expiry date is before today's date. Please select a valid expiry date");
	    return false; 
	 }
	 if(val_year.match(year)){
		 
		 return true; 
	 }
	 else{
		 
		 swal("BOOKD", "Please check the year!", "error");
		 return false; 
	 }
	 
 }
 
 function validzip(){
	 
	 var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
	 var zip = $("#zip").val();
	 if(zip.match(isValidZip)){
		 
	 }
	 else{
		 
		 swal("BOOKD", "Enter proper zip code for America!", "error");
		 
	 }
	 
 }
 
 function getcarddetails(){
	 
	    	 var user_id = localStorage.getItem("UNIQUE-ID");
	    	
	    	 $("#get_card").empty();
jQuery.ajax({
  type: 'POST',
  beforeSend: function() {
	  
 	// $('.custom-loader').css({'display':'block'});               
 
 }, //Show spinner
   complete: function() {
 	 
    setTimeout(function() {
 	  // $('.custom-loader').css({'display':'none'});       
               }, 2000);
    
    
  }, //Hide spinner
    url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/get_my_cards',
    data: {
    tag: 'get_my_cards',
   
     user_id : user_id
  

  
   

    },
    
    success: function(response) {
     //alert(response);
    var jsObject = JSON.parse(response);
    var result = jsObject.status;
    var arr = new Array();
	 var payy =  localStorage.getItem("pay-check");
	 var pay11 = localStorage.getItem("pay-check1");
   /* var card_id = jsObject.card_id;
    var card_no =  jsObject.card_id;
    var card_month =  jsObject.card_id;
    var card_year =  jsObject.card_id;
    var card_type =  jsObject.card_id;
    var card_country =  jsObject.card_id;
    var zip =  jsObject.card_id;*/
    var selected = localStorage.getItem("selected");
    if(jsObject.length > 0){
    	
    	 for(var i=0;i<jsObject.length;i++){
    	  /*   alert(jsObject[i].zip);
    	     alert(jsObject[i].card_id);
    	     alert(jsObject[i].card_no);
    	     alert(jsObject[i].card_month);
    	     alert(jsObject[i].card_year);
    	     alert(jsObject[i].card_type);
    	     alert(jsObject[i].card_country);*/
    	 	 arr.push(jsObject[i].card_id);
    	 	
    		
         
    		   localStorage.setItem("arr",JSON.stringify(arr));
    		 
    	     
    	   
    		   $("#get_card").append('<li id="getcardd'+i+'"><span id="getcard'+i+'" onclick="active(\'' +jsObject[i].card_id + '\',\'' +i + '\',\'' +jsObject[i].card_no + '\',\'' +jsObject[i].card_type + '\',\'' +jsObject[i].card_month + '\',\'' +jsObject[i].card_year + '\',\'' +jsObject[i].card_country + '\',\'' +jsObject[i].zip + '\')"><i class="fa fa-cc-'+jsObject[i].card_type+'"></i>'+jsObject[i].card_no +'</span> <a href="#" class="remove-card" onclick="del_card('+jsObject[i].card_id+')"><i class="fa fa-times"></i></a></li>');
    	   
    		//alert( $("#getcard"+i).html());
    		// alert(selected);
    		// alert(i);
    	
    		
    			
    		
    	    if(selected == i){
    	    	
    	    	//alert("ented");
    	   
    	    	 
    	    	 $("#getcardd"+i).addClass("active-card");
    	    	 localStorage.setItem("CARD_ID", "");
    			 localStorage.setItem("CARD_ID", jsObject[i].card_id);
    			 //alert(id);
    			 localStorage.setItem("selected", "");
    			 localStorage.setItem("selected", i);
             
    			 localStorage.setItem("NO", "");
    			 localStorage.setItem("NO", jsObject[i].card_no);
    			 localStorage.setItem("TYPE", "");
    			 localStorage.setItem("TYPE", jsObject[i].card_type);
    			 localStorage.setItem("Month", "");
    			 localStorage.setItem("Month", jsObject[i].card_month);
    			 localStorage.setItem("year", "");
    			 localStorage.setItem("year", jsObject[i].card_year);
    			 localStorage.setItem("country", "");
    			 localStorage.setItem("country", jsObject[i].card_country);
    			 localStorage.setItem("zip", "");
    			 localStorage.setItem("zip", jsObject[i].zip);
    		
    			 if(localStorage.getItem("callback1") == "true"){
    				 
    	  			 $.mobile.changePage("#paymentconfirmation", {transition: "fade", reverse: false}, true, true);
    	  	   		
    			 }
    			 
    			
    		
    	    }	
    	    else if(selected == ''){
    	    	//alert("ented else");
    	    	
    	    	$("#getcardd"+0).addClass("active-card"); 
    	    	//alert(jsObject[0].card_no);
    	    	localStorage.setItem("CARD_ID", "");
   			 localStorage.setItem("CARD_ID", jsObject[0].card_id);
    			 localStorage.setItem("selected", "");
   			 localStorage.setItem("selected", 0);
    		     localStorage.setItem("NO", "");
   			 localStorage.setItem("NO", jsObject[0].card_no);
   			 localStorage.setItem("TYPE", "");
   			 localStorage.setItem("TYPE", jsObject[0].card_type);
   			 localStorage.setItem("Month", "");
   			 localStorage.setItem("Month",jsObject[0].card_month);
   			 localStorage.setItem("year", "");
   			 localStorage.setItem("year", jsObject[0].card_year);
 	
   			 if(localStorage.getItem("callback1") == "true"){
				 
	  			 $.mobile.changePage("#paymentconfirmation", {transition: "fade", reverse: false}, true, true);
	  	   		
			 }
//   			 else if(pay == "true"){
//					
//				 $.mobile.changePage("#home", {transition: "fade", reverse: false}, true, true);
//			
//				 localStorage.setItem("pay-check", "");
//				 
//			 }
//			 else if(pay1 == "true"){
//				
//				 $.mobile.changePage("#listing", {transition: "fade", reverse: false}, true, true);
//				
//				 localStorage.setItem("pay-check1", "");
//				 localStorage.setItem("pay-check", "");
//			 }
		
    	    }
    	    	 
    		
    	     
    	   }
    	 
    	 
 		if(arr.length <= 1){ 
 			//alert("55"); 
 			localStorage.setItem("CARD_ID", "");
			 localStorage.setItem("CARD_ID", jsObject[0].card_id);
 			 localStorage.setItem("selected", "");
			 localStorage.setItem("selected", 0);
 		     localStorage.setItem("NO", "");
			 localStorage.setItem("NO", jsObject[0].card_no);
			 localStorage.setItem("TYPE", "");
			 localStorage.setItem("TYPE", jsObject[0].card_type);
			 localStorage.setItem("Month", "");
			 localStorage.setItem("Month",jsObject[0].card_month);
			 localStorage.setItem("year", "");
			 localStorage.setItem("year", jsObject[0].card_year);
			/* localStorage.setItem("country", "");
			 localStorage.setItem("country", country);
			 localStorage.setItem("zip", "");
			 localStorage.setItem("zip", zip);*/
 			//$("#getcardd"+0).addClass("active-card");
 			 localStorage.setItem("less1", "");
 			 localStorage.setItem("more", "");
 			 localStorage.setItem("less", "");
 			 localStorage.setItem("less", "true");
 		
 	    	
 				
 				 if(localStorage.getItem("callback") == "true"){
 					  var d = localStorage.getItem("more"); 
 		        	 
 		        	   var f = localStorage.getItem("less"); 
 					   if(d == "true"){
 		        		   $.mobile.navigate("#payment",{transition: "fade", reverse: false});
 		        	   }
 		        	   else if(f == "true"){
 		        		
 		        		  localStorage.setItem("callback", "");
 		        		 localStorage.setItem("callback1", "");
 		        	   $.mobile.navigate("#paymentconfirmation",{transition: "fade", reverse: false});
 		        	  
 		        	
 				 }
 	    	
 	    
 				 }
 				 
// 				else if(pay == "true"){
//					
// 					 $.mobile.changePage("#home", {transition: "fade", reverse: false}, true, true);
// 					
// 					 localStorage.setItem("pay-check", "");
// 					 
// 				 }
// 				 else if(pay1 == "true"){
// 					
// 					 $.mobile.changePage("#listing", {transition: "fade", reverse: false}, true, true);
// 					
// 					 localStorage.setItem("pay-check1", "");
// 					 localStorage.setItem("pay-check", "");
// 				 }
// 				 
 				 
    
 			 
 			
 		}
 		
 		
 	
		        	
//		        	   var f = localStorage.getItem("less"); 
//					   if(d == "true"){
//		        		   $.mobile.navigate("#newcard",{transition: "fade", reverse: false});
//		        	   }
//		        	   else if(f == "true"){
//		        		
//		        		  localStorage.setItem("callback", "");
//		        		 localStorage.setItem("callback1", "");
//		        	   $.mobile.navigate("#paymentconfirmation",{transition: "fade", reverse: false});
//		        	  
//		        	
//				 }
	    	
	    
				 
 			
 			 
 			
 			
 			
 		
 		 else if(arr.length > 1){
 	    	//alert("great");
 	    	 localStorage.setItem("less", "");
 	    	 localStorage.setItem("more", "");
 	    	 localStorage.setItem("less1", "");
 				 localStorage.setItem("less1", "true");
 				 if(localStorage.getItem("callback") == "true"){
 					  var d = localStorage.getItem("more"); 
 		        	   var e = localStorage.getItem("less1"); 
 		        	  
 					   if(d == "true"){
 		        		   $.mobile.navigate("#newcard",{transition: "fade", reverse: false});
 		        	   }
 		        	   else if(e == "true"){
 		        		
 		        		  localStorage.setItem("callback", "");
 		        		 localStorage.setItem("callback1", "");
 		        		 $.mobile.changePage('#payment', {reverse: false, changeHash: false});
 		        	  
 		        	/*   $(document).on("pageshow","#payment",function(){ // When entering pagetwo
 		      	    	 //
 		        			 $("#get_card").empty(); 
 		              	getcarddetails();
 		  		        
 		          	      
 		               
 		      	   
 		   });*/
 		           }
 					 
 				 }
 				 
// 				else if(pay == "true"){
//					
// 					 $.mobile.changePage("#home", {transition: "fade", reverse: false}, true, true);
// 					
// 					 localStorage.setItem("pay-check", "");
// 					 
// 				 }
// 				 else if(pay1 == "true"){
// 					
// 					 $.mobile.changePage("#listing", {transition: "fade", reverse: false}, true, true);
// 					
// 					 localStorage.setItem("pay-check1", "");
// 					 localStorage.setItem("pay-check", "");
// 				 }
 	    	
 	    }
 		
    }
    
   
    	 
    	 else{
    	
    		 localStorage.setItem("less", "");
    		 localStorage.setItem("less1", "");
    		 localStorage.setItem("more", "");
    		 localStorage.setItem("more", "true");
    		// $("#get_card").append('<li class="no-save-card">Please add a card</li>');

    		 
    	 }
    	
    

  
 //localStorage.setItem("req-id", req_id);
 //$.mobile.navigate("#confirmation",{transition: "slide", reverse: false});
 //alert("REQ"+req_id);
 //init200();
  /*  if(result == 1){
 	   
    	 $("#get_card").empty();
    	 $("#get_card").append(' <li class="active-card"><i class="fa fa-cc-visa"></i> <a href="#" class="remove-card"><i class="fa fa-times"></i></a></li>')
    	 
    	 
    }
    
    else{
 	   
 	   swal("BOOKD", "Card details  not saved successfully", "error");
    }


 	

	  */ 
	   
   




   
    },
    
    error: function (response) {
        //alert(JSON.stringify(response));
   	  swal("BOOKD", "OOPS! Server Unreachable!Try Again", "error");
     },
   
     
     timeout: 20000
  
    
    });
	   
	 
	 
	 
	 
 }
 
 
 function active(id,pos,number,type,month,year,country,zip){
	// alert("55");
	var k = new Array();
	//alert(localStorage.getItem("arr"));
	k = JSON.parse(localStorage.getItem("arr"));
	//alert(typeof(k));
	//alert(k);

	 for(var i=0;i<k.length;i++){
	   // alert("en");
	   // alert(k[i]);
	   // alert(id);
		 if(k[i] == id){
			// alert("enterered");
			 localStorage.setItem("CARD_ID", "");
			 localStorage.setItem("CARD_ID", id);
			 //alert(id);
			 localStorage.setItem("selected", "");
			 localStorage.setItem("selected", pos);
         
			 localStorage.setItem("NO", "");
			 localStorage.setItem("NO", number);
			 localStorage.setItem("TYPE", "");
			 localStorage.setItem("TYPE", type);
			 localStorage.setItem("Month", "");
			 localStorage.setItem("Month", month);
			 localStorage.setItem("year", "");
			 localStorage.setItem("year", year);
			 localStorage.setItem("country", "");
			 localStorage.setItem("country", country);
			 localStorage.setItem("zip", "");
			 localStorage.setItem("zip", zip);
			 var pay =  localStorage.getItem("pay-check");
			 var pay1 = localStorage.getItem("pay-check1");
			 if(pay == "true"){
				
				 $.mobile.changePage("#home", {transition: "fade", reverse: false}, true, true);
				 $("#getcardd"+i).addClass("active-card");
				 localStorage.setItem("pay-check", "");
				 
			 }
			 else if(pay1 == "true"){
				
				 $.mobile.changePage("#listing", {transition: "fade", reverse: false}, true, true);
				 $("#getcardd"+i).addClass("active-card");
				 localStorage.setItem("pay-check1", "");
				 localStorage.setItem("pay-check", "");
			 }
			 else{
				
			 $.mobile.changePage("#paymentconfirmation", {transition: "fade", reverse: false}, true, true);
			 $("#getcardd"+i).addClass("active-card");
			 }
		 }
		 else{
			 
			// alert("enterered else");
			 $("#getcardd"+i).removeClass("active-card"); 
		 }
		
		 
	 }
	 
 }
 
 
function goedit(){
	 
	var a = localStorage.getItem("less1");
	var b = localStorage.getItem("less");
	var c = localStorage.getItem("more");
	var d =  localStorage.getItem("less2");
	/*alert(a);
	alert(b);
	alert(c);*/
	if(c == "true"){
		
		 localStorage.setItem("less", "");
		 localStorage.setItem("less1", "");
		  $.mobile.navigate("#payment",{transition: "flip", reverse: true});
	}
	else if(a == "true"){
		 localStorage.setItem("more", "");
		 localStorage.setItem("less", "");
           // alert("hell");
		  $.mobile.navigate("#payment",{transition: "flip", reverse: true});
     
	}
	else if(b == "true"){
		 localStorage.setItem("more", "");
		 localStorage.setItem("less1", ""); 
  	  $.mobile.navigate("#payment",{transition: "flip", reverse: true});
   
	}
	else if(d == "true"){
		
		 localStorage.setItem("more", "");
		 localStorage.setItem("less1", ""); 
		 localStorage.setItem("less", "");
		  $.mobile.navigate("#payment",{transition: "flip", reverse: true});
	}
	 
 }
 
 
 function del_card(id){
	
	       var card_id = id;
	    	
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
 url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/delete_my_card',
 data: {
 tag: 'delete_my_card',

  card_id : card_id





 },
 
 success: function(response) {
 // alert(response);
 var jsObject = JSON.parse(response);
 var result = jsObject.status;
 //alert(result);
 if(result == 1){
	 swal({   title: "Delete!",   text: "deleted successfully!",   timer: 1000,   showConfirmButton: false });
	 localStorage.setItem("NO", "");
	 localStorage.setItem("TYPE", "");
	 localStorage.setItem("callback", "");
	 localStorage.setItem("callback1", "");
	 localStorage.setItem("callback1", "true");
	 getcarddetails();
	 
 }
 
 else{
	 
	 swal("BOOKD", "Something went wrong please try again!", "error");
 }
/* var card_id = jsObject.card_id;
 var card_no =  jsObject.card_id;
 var card_month =  jsObject.card_id;
 var card_year =  jsObject.card_id;
 var card_type =  jsObject.card_id;
 var card_country =  jsObject.card_id;
 var zip =  jsObject.card_id;*/
 
//localStorage.setItem("req-id", req_id);
//$.mobile.navigate("#confirmation",{transition: "slide", reverse: false});
//alert("REQ"+req_id);
//init200();
/*  if(result == 1){
	   
 	 $("#get_card").empty();
 	 $("#get_card").append(' <li class="active-card"><i class="fa fa-cc-visa"></i> <a href="#" class="remove-card"><i class="fa fa-times"></i></a></li>')
 	 
 	 
 }
 
 else{
	   
	   swal("BOOKD", "Card details  not saved successfully", "error");
 }


	

	  */ 
	   






 },
 
 error: function (response) {
     //alert(JSON.stringify(response));
	  swal("BOOKD", "OOPS! Server Unreachable!Try Again", "error");
  },

  
  timeout: 20000
 
 }); 
	 
	 
	 
	 
	 

 }
 
 function validate_cvv(){
	 
	 
	 var cvv = /^[0-9]{3,4}$/;
	 
	 var enter_cvv =  $("#card_cvv").val();
	 
	 if(!enter_cvv.match(cvv)){
		 
		 swal("BOOKD", "Please enter a proper CVV number!", "info"); 
	 }
 }
 
 function save_payment(){
	
	    $("#country_selector").change(function(){
 	        var countryData = $("#country_selector").countrySelect("getSelectedCountryData");
 	      //  alert(JSON.parse(JSON.stringify(countryData)));
 	        var jsObject = JSON.parse(JSON.stringify(countryData));
             var result = jsObject.name;
             localStorage.setItem("country", "");
             localStorage.setItem("country", result);
            // var parts = result.split(" ");
       	   //  alert(parts[0]);
 	         });
	    
     var card_no =  $("#card").val().split("-").join("");
     //var foo = $(this).val().split("-").join(""); // remove hyphens
     var card_country =  $("#country_selector").val();
     var card_month =  $("#card_month").val();
     var card_year =  $("#card_year").val();
     var zip =  $("#zip").val();
     var user_id = localStorage.getItem("UNIQUE-ID");
     var card_type = localStorage.getItem("card_type");
    
     var b = validmonth();
     var c = validateyear();
      
   
	//alert(card_no);
	/* alert(card_month);
	 alert(card_country);
	 alert(card_year);
	 alert(zip);
	 alert(card_type);*/
	 
 if(card_no != ''&& card_month != '' && card_country != '' && card_year != '' && zip != '' && card_type != ''){
		// alert("1");
	if(c){
	if(b){
		
if(localStorage.getItem("carddd") == "true"){	
	
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
           url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/save_credit_card_detls',
           data: {
           tag: 'save_credit_card_detls',
          
            user_id : user_id,
            card_no : card_no,
            card_month :card_month,
            card_year :card_year,
            card_country :card_country,
            zip :zip,
            card_type :card_type

         
          

           },
           
           success: function(response) {
          //  alert(response);
           var jsObject = JSON.parse(response);
           var result = jsObject.status;
        //var req_id = jsObject.request_id;
        //localStorage.setItem("req-id", req_id);
        //$.mobile.navigate("#confirmation",{transition: "slide", reverse: false});
        //alert("REQ"+req_id);
        //init200();
           var p = localStorage.getItem("pay-check");
           var p1 = localStorage.getItem("pay-check1"); 
           if(result == 1){
        	   
        	   swal({   title: "Saved!",   text: "Card saved successfully!",   timer: 1000,   showConfirmButton: false });
        	if(p == "true"){
        	   
        	   localStorage.setItem("callback", "");
        	   localStorage.setItem("callback1", "");
        	   localStorage.setItem("pay-check1", "");
        	   
        	   getcarddetails();
        	}
        	else if(p1 == "true"){
        		
        		  localStorage.setItem("callback", "");
           	   localStorage.setItem("callback1", "");
           	   localStorage.setItem("pay-check", "");
           	   
           	   getcarddetails();
        		
        	}
        	
        	else{
        		
        		  localStorage.setItem("callback", "true");
           	   localStorage.setItem("callback1", "");
           	   localStorage.setItem("pay-check1", "");
           	  localStorage.setItem("pay-check", "");
           	   
           	   getcarddetails();
        	}
        	
           }
           
      
           
           else{
        	   
        	   swal("BOOKD", "Card details  not saved successfully.It could be a card you already saved previously!Try again.", "error");
           }
       
      
        	
     
       	   
       	   
          
   
       
     
       
          
           },
           
           error: function (response) {
               alert(JSON.stringify(response));
          	  swal("BOOKD", "OOPS! Server Unreachable!Try Again", "error");
            },
          
            
            timeout: 20000
         
           
           });
		  
    

	 }

else  {
	 // alert("3");
		 swal("BOOKD", "Enter a valid credit card!", "error"); 
	 }
	 
	
		 
	}
	 
	 else {
	 // alert("3");
		 swal("BOOKD", "Enter a valid month!", "error"); 
	 }
	}
	 
	 else{
			// alert("2");
			   swal("The expiry date is before today's date. Please select a valid expiry date");
		 }

	 } 
	 else{
		 
		
		 swal("BOOKD", "Please fill all details!", "error");
	 }
	 
	
	 
	 
	 
 }
   
    
    
  /*  function confirmed(){
    	
    	var request_id = localStorage.getItem("req-id");
    	 alert(request_id);
    	  
 	   jQuery.ajax({
 	         type: 'POST',
 	         beforeSend: function() {
 	       	  
 	            $.LoadingOverlay("show");                 
 	        
 	        }, //Show spinner
 	          complete: function() {
 	        	 
 	           setTimeout(function() {
 	                      $.LoadingOverlay("hide");
 	                      }, 2000);
 	           
 	           
 	         }, //Hide spinner
 	           url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/get_confirmation_details',
 	           data: {
 	           tag: 'get_confirmation_details',
 	          request_id : request_id,
 	         
 	          
 
 	           },
 	           
 	           success: function(response) {
 	            alert(response);
 	           var jsObject = JSON.parse(response);
                //var result = jsObject.status;
                //var req_id = jsObject.request_id;
                //localStorage.setItem("req-id", req_id);
                //$.mobile.navigate("#confirmation",{transition: "slide", reverse: false});
                //alert("REQ"+req_id);
                //init200();
               
              
                	
             
               	   
               	   
                  
   	   
   	       
             
               
 	          
 	           },
 	           
 	           error: function (response) {
 	             // alert(JSON.stringify(response));
 	          	 //swal("BOOKD", "OOPS!.Something Went Wrong with the server.Try Again", "error");
 	           },
 	         
 	           
 	           });
 	    
    	
    	
    	
    }*/
    
    
    
  /*  function suggest(){
    	
    	var request_id = localStorage.getItem("req-id");
    	
    	  alert(request_id);
 	   jQuery.ajax({
 	         type: 'POST',
 	         beforeSend: function() {
 	       	  
 	            $.LoadingOverlay("show");                 
 	        
 	        }, //Show spinner
 	          complete: function() {
 	        	 
 	           setTimeout(function() {
 	                      $.LoadingOverlay("hide");
 	                      }, 2000);
 	           
 	           
 	         }, //Hide spinner
 	           url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/get_request_details',
 	           data: {
 	           tag: 'get_request_details',
 	          request_id : request_id,
 	         
 	          
 
 	           },
 	           
 	           success: function(response) {
 	            alert(response);
 	           var jsObject = JSON.parse(response);
                //var result = jsObject.status;
                //var req_id = jsObject.request_id;
                //localStorage.setItem("req-id", req_id);
                //$.mobile.navigate("#suggest",{transition: "slide", reverse: false});
                //alert("REQ"+req_id);
                //init200();
               
              
                	
             
               	   
               	   
                  
   	   
   	       
             
               
 	          
 	           },
 	           
 	           error: function (response) {
 	             // alert(JSON.stringify(response));
 	          	 //swal("BOOKD", "OOPS!.Something Went Wrong with the server.Try Again", "error");
 	           },
 	         
 	           
 	           });
 	    
    	
    	
    	
    }*/
   
    
    function log_in(){
 	//	alert("Calling function to register mobile device on GCM100");
 		window.plugins.pushNotification.register(
 		successHandler,
 		errorHandler,
 		{"senderID":"986010700923",
 		 "ecb":"onNotificationGCM"
 		});	
 	}
 	function successHandler(result){
 	//alert("Result" + result);		
 	}
 	function errorHandler(error){
 	//alert("error"+ result);
 	}
 	function onNotificationGCM(e){
 		
 //alert("Message : " +JSON.stringify(e));
 	switch(e.event){
 		case 'registered':
 			if(!e.coldstart){
 			//alert("ID: " + e.regid);
 			//sendRequest(e.regid);
 			localStorage.setItem("reg-id", e.regid);
 			//login(e.regid);
 			//alert("Successfully Registered");
 			}
 			break;
 		case 'message':	
 			
 			if(e.foreground)
 				{
 				//alert("Message2: "+JSON.stringify(e));
 				//alert(e.payload['gcm.notification.title']);
 				//alert(e.payload['gcm.notification.id']);
 				//alert(e.payload['gcm.notification.request_id']);
 				
 			    localStorage.setItem("page-id", "");
 			    localStorage.setItem("req-id", "");
 			    localStorage.setItem("page-id", e.payload['gcm.notification.id']);
 			    localStorage.setItem("req-id", e.payload['gcm.notification.request_id']);
 			    if( e.payload['gcm.notification.id'] == 2){
 			    	//alert("hoiii");
 			    	  $.mobile.changePage("#confirmation", {transition: "fade", reverse: false}, true, true);
 			    	}
 				
 			else if(e.payload['gcm.notification.id'] == 3){
 			    	//$.mobile.navigate("#suggest",{transition: "slide", reverse: false});
 				//alert("moiii");
 				  $.mobile.changePage("#suggest", {transition: "fade", reverse: false}, true, true);
 				//suggest();
 				}
 			    
// 			else if(e.payload['gcm.notification.id'] == 4){
//			    	//$.mobile.navigate("#suggest",{transition: "slide", reverse: false});
//				//alert("moiii");
//				  $.mobile.changePage("#rating", {transition: "fade", reverse: false}, true, true);
//				//suggest();
//				}
 				}
 			else if(!e.foreground)
 				{
 				//alert("Message2: "+JSON.stringify(e));
 				//alert(e.payload['gcm.notification.title']);
 				//alert(e.payload['gcm.notification.id']);
 				//alert(e.payload['gcm.notification.request_id']);
 				
 			    localStorage.setItem("page-id", "");
 			    localStorage.setItem("req-id", "");
 			    localStorage.setItem("page-id", e.payload['gcm.notification.id']);
 			    localStorage.setItem("req-id", e.payload['gcm.notification.request_id']);
 			
 			    if( e.payload['gcm.notification.id'] == 2){
 			    	//alert("hoiii");
 			    	
 			    	  $.mobile.changePage("#confirmation", {transition: "fade", reverse: false}, true, true);
 			    	
 			   
 			    	}
 				
 			else if(e.payload['gcm.notification.id'] == 3){
 			    	//$.mobile.navigate("#suggest",{transition: "slide", reverse: false});
 				//alert("moiii");
 				
 				  $.mobile.changePage("#suggest", {transition: "fade", reverse: false}, true, true);
			    	
 				//suggest();
 				}
 			    
// 			else if(e.payload['gcm.notification.id'] == 4){
//			    	//$.mobile.navigate("#suggest",{transition: "slide", reverse: false});
//				//alert("moiii");
//				
//				  $.mobile.changePage("#rating", {transition: "fade", reverse: false}, true, true);
//		    	
//				//suggest();
//				}
 				}
 			
 	
 			else if(!e.foreground && e.coldstart)
				{
				//alert("Message2: "+JSON.stringify(e));
				//alert(e.payload['gcm.notification.title']);
				//alert(e.payload['gcm.notification.id']);
				//alert(e.payload['gcm.notification.request_id']);
				
			    localStorage.setItem("page-id", "");
			    localStorage.setItem("req-id", "");
			    localStorage.setItem("page-id", e.payload['gcm.notification.id']);
			    localStorage.setItem("req-id", e.payload['gcm.notification.request_id']);
			    localStorage.setItem("logged-inn","");
			    if( e.payload['gcm.notification.id'] == 2){
			    	//alert("hoiii");
			    	
			    	  $.mobile.changePage("#confirmation", {transition: "fade", reverse: false}, true, true);
			    	
			   
			    	}
				
			else if(e.payload['gcm.notification.id'] == 3){
			    	//$.mobile.navigate("#suggest",{transition: "slide", reverse: false});
				//alert("moiii");
				
				  $.mobile.changePage("#suggest", {transition: "fade", reverse: false}, true, true);
		    	
				//suggest();
				}
			    
//			else if(e.payload['gcm.notification.id'] == 4){
//		    	//$.mobile.navigate("#suggest",{transition: "slide", reverse: false});
//			//alert("moiii");
//			
//			  $.mobile.changePage("#rating", {transition: "fade", reverse: false}, true, true);
//	    	
//			//suggest();
//			}
				}
 			
			
	
			
 			
 			break;
 		default:
 			//alert("unknown event");
 	}
 	//alert('ss');
 	setTimeout(function(){;},3000);
 	exit;
 	}
    
//   function init200(){
//		alert("Calling function to register mobile device on GCM");
//		window.plugins.pushNotification.register(
//		successHandler200,
//		errorHandler200,
//		{"senderID":"986010700923",
//		 "ecb":"onNotificationGCM"
//		});	
//	}
//	function successHandler200(result){
//	alert("Result" + result);		
//	}
//	function errorHandler200(error){
//	alert("error"+ result);
//	}
	/*function onNotificationGCM200(e){
	alert("Message : " +JSON.stringify(e));
	
	switch(e.event){
		
		case 'message':	
	
alert(c);
			//alert("Message: "+JSON.stringify(e));
			//alert(e.payload['gcm.notification.title']);
			//alert(e.payload['gcm.notification.id']);
			//alert(e.payload['gcm.notification.request_id']);
		    localStorage.setItem("page-id", e.payload['gcm.notification.id']);
		    localStorage.setItem("req-id2", e.payload['gcm.notification.request_id']);
           		
			
		   $.mobile.navigate("#standby",{transition: "slide", reverse: false});
			break;
		default:
			//alert("unknown event");
	}
	}*/
	

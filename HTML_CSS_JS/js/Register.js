/*start of login function*/


 function go_home(){
	 
	 $.mobile.navigate("#home",{transition: "slide", reverse: false}); 
	 
	 
 }
 
 
 
	//use to send registration ID returned by GCM to our local php server
	//regID should be save in our local database so that we can use regID and api-key from google to sent request to GCM
	//from php server in mycase.
	

function login(){
	
	var device_id = "a7fc87917df08960987f7254048fed95e5afe15c1e7b4e71535a53c307b3c62f";
	var email = $("#Lemail").val();
	
	var pass = $("#Lpass").val();
	
//	var device_id = device.uuid;
	var device_type = "Mobile-Web";
	//alert(device_id);
	//alert(device_type);
	
	   if (email == '' && pass == '') {
	        swal("Please enter your Email & Password!");
	        return false;
	    } else if(!email.match(/([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/)){
	        swal("Please provide valid email!");
	        return false;
	    }else if (email == '' && pass != '') {
	        swal("Please enter your Email address!");
	        return false;
	    } else if (email != '' && pass == '') {
	        swal("Please enter your Password!");
	        return false;
	    }
	        else{
	        	
	        	
	        	
	        	
	        	
	        	
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
	                     url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/login',
	                     data: {
	                     tag: 'login',
	                     email : email,
	                     pass : pass,
	                     device_id: device_id,                   
	                     device_type: device_type,
	                             
	                  
	                     },
	                     
	                     success: function(response) {
	                     //alert(response);
	                    var jsObject = JSON.parse(response);
	                    var result = jsObject.status;
	                    var message = jsObject.msg;
	                    var uid = jsObject.data.uid;
	                    var isfirst =  jsObject.data.is_first_login;
	                    localStorage.setItem("FIRST-LOGIN","");
	                    localStorage.setItem("FIRST-LOGIN","true");
	                    localStorage.setItem("UNIQUE-ID",uid);
	                     if(result == 1){
	                    localStorage.setItem("logged-in","true");
	                 
	                     	// swal("Flng", message, "success");
	                    	 
	                    	 $.mobile.toast({
	                             message: message,
	                             duration: "long",
	                             position: "bottom"
	                         });
	                     	
	                     	 
	                     	$("#Lemail").val('');
	                     	$("#Lpass").val('');
	                        $.mobile.navigate("#home",{transition: "slide", reverse: false});
	                     }
	                     else{
	                     	
	                     	swal("BOOKD", "Please enter valid email or password!", "error");
	                     	$("#Lemail").val('');
	                     	$("#Lpass").val('');
	                    	$(".login-form .clear_input").css('display','none');
	                     	
	                     }
	                    
	                     },
	                     
	                     error: function (response) {
	                       //alert(JSON.stringify(response));
	                    	 swal("BOOKD", "OOPS! Something Went Wrong with the server.Try Again", "error");
	                     },
	                   
	                     
	                     });
	              
	             
	        }
	        
}
	
	
	/*end of login*/

/*start of forgot password*/

function forgot_pwd(){
	
	 var email = $("#Femail").val();
	 

	   if (email == '') {
	        swal("Please enter your Email!");
	        return false;
	    } else if(!email.match(/([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/)){
	        swal("Please provide valid email!");
	        return false;
	    }
	    else{
	    	
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
                     url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/forget_password',
                     data: {
                     tag: 'forget_password',
                     email : email,
                   
                             
                  
                     },
                     
                     success: function(response) {
                     //alert(response);
                     var jsObject = JSON.parse(response);
                     var result = jsObject.status;
                     var message = jsObject.msg;
                     if(result == 1){
                     	
                     	  swal("BOOKD", message, "success");
                     	
                     	  $("#Femail").val('');
                     	 $(".login-form .clear_input").css('display','none');
                         // $.mobile.navigate("#login",{transition: "slide", reverse: false});
                     }
                     else{
                     	
                     	 swal("BOOKD", message, "error");
                     	 $("#Femail").val('');
                     	$(".login-form .clear_input").css('display','none');
                     }
                    
                     },
                     
                     error: function (response) {
                        //alert(JSON.stringify(response));
                    	 swal("BOOKD", "OOPS! Server Unreachable!Try Again", "error");
                     },
                     
                     timeout: 20000
                   
                     
                     });
              
	    	
	    	
	    }
	
	
	
	  
	
}


function loginback(){
	
	
	 $.mobile.navigate("#loginregister",{transition: "slide", reverse: false});
}

function log_out(){
	
	var device_id = localStorage.getItem("reg-id");
	
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
                  url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/app_logout',
                  data: {
                  tag: 'app_logout',
                  device_id :device_id,
                
                          
               
                  },
                  
                  success: function(response) {
                  //alert(response);
                  var jsObject = JSON.parse(response);
                  var result = jsObject.status;
                  var message = jsObject.msg;
                  if(result == 1){
                  	
             
                  }
                  else{
                  	
                  	 swal("BOOKD", "There was some problems!", "error");
                  	
                  }
                 
                  },
                  
                  error: function (response) {
                     //alert(JSON.stringify(response));
                	  swal("BOOKD", "OOPS! Server Unreachable!Try Again", "error");
                  },
                
                  
                  timeout: 20000
                  });
           
	    	
	    	
	    
	
	
	
	    
	
}

function logout(){
	
    swal({
        title: "Are you sure?",
        text: "Want to logout?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, LOG ME OUT!",
        closeOnConfirm: false
        },
        
       
        function(){
        	 $('.custom-loader').css({'display':'block'}); 
        
        setTimeout(function() {
               
        
                    localStorage.clear();
                  
                    $('.custom-loader').css({'display':'none'}); 
                    //$.mobile.navigate("#login");
                	swal({   title: "BOOKD!",   text: "LOGGED OUT...",   timer: 2000,   showConfirmButton: false }); 
                   
                    
                    $.mobile.navigate("#login");
                    setTimeout(function(){   location.reload(); }, 3000);
                    
                  
               
              
         
               	    	
               	   
               	
               	
                 
                   
                   /* $("#login_email").val('');
                    $("#login_password").val('');*/
                   
                   
                   
                   
                   }, 2000);
        });
	
	
}






function edit_details(){
	
	var uid =  localStorage.getItem("UNIQUE-ID");
	
	 jQuery.ajax({
         type: 'POST',
         beforeSend: function() {
       	  
        //	 $('.custom-loader').css({'display':'block'});   
        
        }, //Show spinner
          complete: function() {
        	 
           //setTimeout(function() {
        	//   $('.custom-loader').css({'display':'none'}); 
                     // }, 2000);
           
           
         }, //Hide spinner
           url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/get_places',
           data: {
           tag: 'profile_details',
           uid : uid,
         
                   
        
           },
           
           success: function(response) {
           //alert(response);
           var jsObject = JSON.parse(response);
           var result = jsObject.status;
           var firstname = jsObject.data.first_name;
           var lastname = jsObject.data.last_name;
           var email=jsObject.data.email;
           var contact_no = jsObject.data.contact_no;
           var home =  jsObject.data.home;
           var work =  jsObject.data.work;
           var hotel =  jsObject.data.hotel;
           var profile_pic = jsObject.data.profile_pic;
           //alert(profile_pic);
           /*alert(home);
           alert(work);
           alert(hotel);*/
           if(result == 1){
        	   
         	  localStorage.setItem("set-home", home);
           	  localStorage.setItem("set-work", work);
           	  localStorage.setItem("set-hotel", hotel);
           	
           
           	  $("#full-name").val(firstname+' '+lastname);
           	  $("#email-set").val(email);
           	  $("#mobile").val("+1-"+contact_no);
           	  
           	  if(!hotel == '' && home == '' && work == ''){
           		  //alert("13");
           
           	 $("#fav").empty();
           	 $("#fav").append('<h3>Favorite Places</h3> <ul id="set-co">');
        	 $("#set-co").empty();
         $("#set-co").append('<li class="clearfix" id="set_hotel" onclick="set_hot();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name" >Hotel</div><div class="place-address"id="set-hotel">'+hotel+'</div><a href="#" class="edit-place" onclick="set_hot();"><i class="fa fa-pencil"></i></a></li>');
           	  

           	  }
         		else if(!work == '' && home == '' && hotel == ''){
           		 // alert("12");
           		
           		$("#fav").empty();
           		 $("#fav").append('<h3>Favorite Places</h3> <ul id="set-co">');
           	   $("#set-co").empty();
         		   $("#set-co").append('<li class="clearfix" id="set_work" onclick="set_wo();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Work</div><div class="place-address" id="set-work">'+work+'</div><a href="#" class="edit-place" onclick="set_wo();"><i class="fa fa-pencil"></i></a></li>');
          
           	  }
         		else if(!home == '' && hotel == '' && work == ''){
           		 // alert("11");
           		   $("#set-co").empty();
           		$("#fav").empty();
           		 $("#fav").append('<h3>Favorite Places</h3> <ul id="set-co">');
           	  $("#set-co").empty();
           	   $("#set-co").append('<li class="clearfix" id="set_home" onclick="set_ho();"><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Home</div><div class="place-address" id="set-home">'+home+'</div><a href="#" class="edit-place" onclick="set_ho();"><i class="fa fa-pencil"></i></a></li>');
           		
           		

           	  }
        	   
         		else if(!work == '' && !hotel == '' && home == ''){
               		//alert("1");
               		
               		$("#fav").empty();
               		 $("#fav").append('<h3>Favorite Places</h3> <ul id="set-co">');
               		 $("#set-co").empty();
         		   $("#set-co").append('<li class="clearfix" id="set_work" onclick="set_wo();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Work</div><div class="place-address" id="set-work">'+work+'</div><a href="#" class="edit-place" onclick="set_wo();"><i class="fa fa-pencil"></i></a></li><li class="clearfix" id="set_hotel" onclick="set_hot();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name" >Hotel</div><div class="place-address"id="set-hotel">'+hotel+'</div><a href="#" class="edit-place" onclick="set_hot();"><i class="fa fa-pencil"></i></a></li>');
     
               	  }
         		else if(!home == ''  && !hotel == '' && work == ''){
               		  //alert("2");
               		 
               		$("#fav").empty();
               	 $("#fav").append('<h3>Favorite Places</h3> <ul id="set-co">');
               	$("#set-co").empty();
        $("#set-co").append('<li class="clearfix" id="set_home" onclick="set_ho();"><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Home</div><div class="place-address" id="set-home">'+home+'</div><a href="#" class="edit-place" onclick="set_ho();"><i class="fa fa-pencil"></i></a></li><li class="clearfix" id="set_hotel" onclick="set_hot();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name" >Hotel</div><div class="place-address"id="set-hotel">'+hotel+'</div><a href="#" class="edit-place" onclick="set_hot();"><i class="fa fa-pencil"></i></a></li>');
               	  }
               	else if(!work == '' && !home == '' && hotel == ''){
               		 // alert("3");
               		   
               		$("#fav").empty();
               		 $("#fav").append('<h3>Favorite Places</h3><ul id="set-co">');
               		$("#set-co").empty();
               	   $("#set-co").append('<li class="clearfix" id="set_home" onclick="set_ho();"><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Home</div><div class="place-address" id="set-home">'+home+'</div><a href="#" class="edit-place" onclick="set_ho();"><i class="fa fa-pencil"></i></a></li> <li class="clearfix" id="set_work" onclick="set_wo();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Work</div><div class="place-address" id="set-work">'+work+'</div><a href="#" class="edit-place" onclick="set_wo();"><i class="fa fa-pencil"></i></a></li>');
               	  }
               		
        		  
               
               	 else if(work  && home && hotel){
               		
               		//alert("5");
              
               	$("#fav").empty();
               		
                $("#fav").append('<h3>Favorite Places</h3> <ul id="set-co">');
             	$("#set-co").empty();
               	   $("#set-co").append('<li class="clearfix" id="set_home" onclick="set_ho();"><div class="icon"><i class="fa fa-home"></i></div><div class="place-name">Home</div><div class="place-address" id="set-home">'+home+'</div><a href="#" class="edit-place" onclick="set_ho();"><i class="fa fa-pencil"></i></a></li> <li class="clearfix" id="set_work" onclick="set_wo();"><div class="icon"><i class="fa fa-briefcase"></i></div><div class="place-name">Work</div><div class="place-address" id="set-work">'+work+'</div><a href="#" class="edit-place" onclick="set_wo();"><i class="fa fa-pencil"></i></a></li><li class="clearfix" id="set_hotel" onclick="set_hot();"><div class="icon"><i class="fa fa-building"></i></div><div class="place-name" >Hotel</div><div class="place-address"id="set-hotel">'+hotel+'</div><a href="#" class="edit-place" onclick="set_hot();"><i class="fa fa-pencil"></i></a></li>');
               	}
         	  
             	else{
            		 // alert("4");
            		
            		
              	 $("#set-co").empty();
              	 $("#fav").empty();
            	  }
        	
        	//  $('#div-img').prepend('<img src="'+profile_pic+'" alt="" />');
        	  //$("<img />").attr("src");
        	  $('#thumb-pic-set').css('background-image', 'url(' + profile_pic + ')');
        	 // alert($('#div-img').html()); 
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
           	
          // 	 swal("Flng", message, "error");
           	// $("#Femail").val('');
        	 	  $("#full-name").val('');
               	  $("#email").val('');
               	  $("#mobile").val('');
           }
          
           },
           
           error: function (response) {
               //alert(JSON.stringify(response));
          	  swal("BOOKD", "OOPS! Server Unreachable!Try Again", "error");
            },
          
            
            timeout: 20000
           
           });
    
	
	    
	
}


function timeisdone(){
	localStorage.setItem("page-id", "");
    $.mobile.navigate("#rating",{transition: "pop", reverse: false});
	
}




function checkConnection() {
    var networkState = navigator.connection.type;
    
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
    
    //alert('Connection type: ' + states[networkState]);
  
    if(states[networkState] == 'Unknown connection'||states[networkState] == 'No network connection'){
        
         swal("BOOKD", "No Internet Connection", "info");
        /* setTimeout(function() {
        	 //navigator.app.exitApp();
         }, 5000);*/
          
    }
    else if(states[networkState] == 'Cell 2G connection'){
    
     swal("BOOKD", "You are experiencing slow network connections, app performance may get hampered!", "warning");
    }
}



/*function cool(){
	 
	 alert("55");
	    var dob = $("#dob").val();
	    alert(typeof dob);
	    var res = dob.split(" ");
	    alert(res[0]);
	    alert(res[1]);
	    alert(res[2]);
}*/






/*Start of SignUp Page */
function signUp() {
  // alert("sign");

    var Fname  = $("#fname").val();
    var Lname  = $("#lname").val();
    var Email = $("#email").val();
    var Phone = $("#phno").val();
    var dob =   $("#dob").val();
    var res = dob.split(" ");
   
    var month = convertMonthNameToNumber(res[0]);
    
    var birthdate = res[1]+'-'+AddZero(month)+'-'+AddZero(res[2]);
     console.log(birthdate);
    var Password = $("#password").val();
    var cPassword  = $("#cpassword").val();
   
  if($("#terms").prop('checked') == true){
    //do something

    if (validate(Fname, Lname, Email, Phone, Password, cPassword, dob)) {  
   // var payname = $("#pmarcname").val();
   // var paycid = $("#pmarcllid").val();
       
//        
   var first_name  = $("#fname").val();
   var last_name  = $("#lname").val();
   var email = $("#email").val();
   var contact_no = $("#phno").val();
   var pass = $("#password").val();
   var cPassword  = $("#cpassword").val();
   var dob =   $("#dob").val();
   var res = dob.split(" ");
   var month = convertMonthNameToNumber(res[0]);

   var birthdate = res[1]+'-'+AddZero(month)+'-'+AddZero(res[2]);
   
//   var encrypted = CryptoJS.AES.encrypt(Password, "Secret Passphrase");
//    alert(encrypted);
//   var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
//   alert(decrypted.toString(CryptoJS.enc.Utf8));
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
                    url: 'http://www.unifiedinfotech.co.in/webroot/team1/DatingApp/service_call/registration',
                    data: {
                    tag: 'registration',
                    first_name : first_name,
                    last_name : last_name,
                    email: email,                   
                    contact_no: contact_no,
                    pass  : pass,  
                    birthdate : birthdate,
                 
                    },
                    
                    success: function(response) {
                   // alert(response);
                    var jsObject = JSON.parse(response);
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
                         $('#dob').val('');
                         $.mobile.navigate("#login");
                    }
                    else{
                    	
                    	 swal("BOOKD", message, "error");
                    	 //$("#fname").val('');
                         //$("#lname").val('');
                         //$("#email").val('');
                         //$("#phno").val('');
                         $("#password").val('');
                         $("#cpassword").val('');
                         $(".login-form .clear_input").css('display','none');
                    }
                   
                    },
                    error: function (response) {
                        //alert(JSON.stringify(response));
                   	  swal("BOOKD", "OOPS! Server Unreachable!Try Again", "error");
                     },
                   
                     
                     timeout: 20000
                    
                    });
             
               
    }  
  }
  else{
	  
	  swal("BOOKD", "Please check the terms and Privacy to register with us!", "error");
  }
	    
                  
    
}/*end of SignUp Page */

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
function convertMonthNameToNumber(monthName) {
    var myDate = new Date(monthName + " 1, 2000");
    var monthDigit = myDate.getMonth();
    return isNaN(monthDigit) ? 0 : (monthDigit + 1);
}



function validatefName(fname) {
    if (fname != '' &&  fname.match(/^[a-zA-Z]+$/)) {
        return true;
    } else {
        //showAlert("Please enter User name!");
        swal("BOOKD", "Please enter First name!", "error");
        return false;
    }
} 

function validatebirth(birth) {

    if (birth != '' ) {
        return true;
    } else {
        //showAlert("Please enter User name!");
        swal("BOOKD", "Please enter date of birth!", "error");
        return false;
    }
} 

/*function validatepname(payname) {
    if (payname != '') {
        return true;
    } else {
        //showAlert("Please enter User name!");
        swal("Rent My Room", "Please enter your PayPal Merchant Name to Receive online payments!", "error");
        return false;
    }
}

function validatepayid(paycid) {
    if (paycid != '') {
        return true;
    } else {
        //showAlert("Please enter User name!");
        swal("Rent My Room", "Please enter your PayPal ClientID to Receive online payments!", "error");
        return false;
    }
}*/
function validatelname(lname){
	if (lname != '' &&  lname.match(/^[a-zA-Z]+$/)) {
        return true;
    } else {
        //showAlert("Please enter User name!");
        swal("BOOKD", "Please enter your Last Name!", "error");
        return false;
    }
}


function validatePwd(spass) {
	
	/*var re1 = /^\w+$/;
	var re2 =  /[0-9]/;
	 var re3 = /[a-z]/;
	 var re4 = /[A-Z]/;*/
	 //var re5 = "[a-zA-Z0-9]+";
    if (spass == '') {
        //showAlert("Please provide Password!");
    	//alert("00");
        swal("BOOKD", "Please provide Password!", "error");
        return false;
    
    } if(spass.length < 8) {
    	//alert("01");
        //showAlert("password should be minimum of 8 characters!");
        swal("BOOKD", "Password should be minimum of 8 characters!", "error");
        return false;
    }
    /* if(!re5.test(spass)){
    		//alert("02");
    	 swal("Flng", "Password must contain only letters, numbers no special characters!!", "error");
    	return false;
    }*/
   
    else{
    	return true;
    	
    }
}



function validateConpwd(scpass, spass) {
	//alert(scpass);
	//alert(spass);
	
    if (scpass == spass) {
        return true;
    } else {
        //showAlert("Your Confirm Password do not matches your Password!");
        swal("BOOKD", "Your Confirm Password does not match your entered password!", "error");
        return false;
    }
}

function validateEmail(semail) {
	var emailPattern = "[a-zA-Z0-9._-]+@[a-z]+\\.+[a-z]+";
    if (semail == '') {
        //showAlert("Please provide your email address!");
        swal("BOOKD", "Please provide your email address!", "error");
        return false;
    } else if (!semail.match(emailPattern)) {
        //showAlert("Please provide valid email!");
        swal("BOOKD", "Please provide valid email!", "error");
        return false;
    } else {
        return true;
    }
}

function validateTelno(smobno)
{
    if (smobno == '') {
        //showAlert("Please provide your Contact Number!");
        swal("BOOKD", "Please provide your Contact Number!", "error");
        return false;
    } else if (smobno.match(/\D+/)) {
        //showAlert("Please provide valid Number!");
        swal("BOOKD", "Please provide valid Number!", "error");
        return false;
    }
    else {
        return true;
    }
}




/*  function valiadateConpwd()
	{
 var pwd1 = document.getElementById('signupasswd').value;
 var conpwd1 = document.getElementById('signupcnfpasswd').value;
 if (conpwd1 == pwd1) {
 return true;
 } else {
 showAlert("Your Confirm Password do not matches your Password!");
 return false;
 }
	} */
/*end of Validations for all fields */
function validate(Fname, Lname, Email, Phone, Password, cPassword, birth) {
    
    if (validatefName(Fname) && validatelname(Lname) && validateEmail(Email) && validateTelno(Phone) && validatebirth(birth) && validatePwd(Password) && validateConpwd(cPassword,Password))
        return true;
    else
        return false;
    
}


function validatepayment(){
	
	var card_no = localStorage.getItem("NO");

	var card_id = localStorage.getItem("CARD_ID");
	 var enter_cvv1 =  $("#card_cvv").val();
	if(card_no == '' || card_no == null){
		
		 swal("BOOKD", "Please provide Card!", "error");
	}
	else if(enter_cvv1 == ''){
		
		 swal("BOOKD", "Please enter Cvv No!", "error");
	}
	else{
		
		request_girl();
	}
	
}


// Splash Swipe
/*$(document).on('pageshow','#splash',function(){
   if(localStorage.getItem("flag11") == "true"){
		   setTimeout(function(){ 
			$('#splash .splash-screen').addClass('visible');
		   
		   setTimeout(function(){ 
			$('#splash .splash-screen').removeClass('visible'); 
			 
			setTimeout(function(){ 
			 var nextpage = $.mobile.activePage.next('[data-role="page"]');
			 if (nextpage.length > 0) {
			  $.mobile.changePage(nextpage, {transition: "fade", reverse: false}, true, true);
			 }
			}, 1000);
			
		   }, 2000);
		   
		   }, 1000);
   }
});*/


/*$(document).on('swipeleft', '#details', function(event){    
    alert();    
});*/

/*$(document).on('swipedown', '#details', function () {
    //alert("swipedown..");
	$('.bottom-slide').removeClass('visible');
	$('.slide-trigger').removeClass('down');
});
$(document).on('swipeup', '#details', function () {
    //alert("swipeup..");
	$('.bottom-slide').addClass('visible');
	$('.slide-trigger').addClass('down');
});*/



$(document).ready(function() {
	$("#details").swipe( {
	  swipeUp:function(event, direction, distance, duration) {
		$('.bottom-slide').addClass('visible');
		$('.slide-trigger').addClass('down');
	  },
	  swipeDown:function(event, direction, distance, duration) {
		$('.bottom-slide').removeClass('visible');
		$('.slide-trigger').removeClass('down');
	  },
	  threshold:100,
	  allowPageScroll:"vertical"
	});
});


$(document).ready(function() {
	// Clear Input Field
	//$('.cs').clearSearch();
	
	// Image Fit to Container
	$('.imageFit').imgLiquid({
		fill: true,
        horizontalAlign: 'center',
        verticalAlign: 'center'
	});
	
	// Picture Gallery
	/*$('#lightgallery').lightGallery({
		thumbMargin:0	
	});*/
	
	//$( '.swipebox' ).swipebox();
	
	// Bottom Slide
	$('.slide-trigger').on('click', function(e) {
		$('.bottom-slide').toggleClass('visible');
		$(this).toggleClass('down');
	});
	
	
});	

$(document).on('click', function(e) {
    var elem = $(e.target).closest('#ellipsis-handel'),
        box  = $(e.target).closest('#ellipsis-menu');
    
    if ( elem.length ) {
        e.preventDefault();
        $('#ellipsis-menu').toggle();
    }else if (!box.length){
        $('#ellipsis-menu').hide();
    }
});
















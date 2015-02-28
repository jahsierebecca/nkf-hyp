
  $( document ).ready(function() {
    
  	$("#water").on('click', function() {
  		$("#waterP").toggleClass("hidden");
  		$("#exerciseP").addClass("hidden");
  		$("#foodP").addClass("hidden");
  	});

  	$("#exercise").on('click', function() {
  	  	$("#exerciseP").toggleClass("hidden");
  	  	$("#waterP").addClass("hidden");
  		$("#foodP").addClass("hidden");	
  	});

  	$("#food").on('click', function() {
  		$("#foodP").toggleClass("hidden");
  	  	$("#exerciseP").addClass("hidden");
  		$("#waterP").addClass("hidden");	
  	});



  	// var width = $( window ).width();
  	// var widthCap = 768px;
  	// if (width > widthCap) {
  	// 	$(".menu").removeClass("hidden");
  	// }


  	$(".nav-icons").on('click', function() {
	$(".menu").slideToggle("hidden");
	});


  	var section = $(window);
	var width = section.width();
	var nav = $('.menu');
	if (width > 768) {
    	nav.removeClass('hidden');
	} 


  });
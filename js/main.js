
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

  	$(".nav-icons").on('click', function() {
	$(".menu").slideToggle("hidden");
 //  	$("#exerciseP").addClass("hidden");
	// $("#waterP").addClass("hidden");	
	});


  });
 
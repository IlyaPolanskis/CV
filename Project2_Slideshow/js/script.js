$(document).ready(function () {
	// SETTINGS
	var speed = 500;				// FADE SPEED
	var autoswitch = true;			// Auto slider option true = enabled
	var autoswitch_speed = 10000;	// Auto slider speed

	//Add init active class
	$('.slide').first().addClass('active');

	// Hide all slides
	$('.slide').hide();

	// Show only ONE slide
	$('.active').show();

	// SHOW NEXT IMAGE BUTTON HANDLER
	$('#next').click(nextSlide);

	// SHOW PREVIOUS IMAGE BUTTON HANDLER
	$('#back').click(previousSlide);

	// AUTO SLIDESWHOW
	if (autoswitch) {
		setInterval(nextSlide, autoswitch_speed)
	}

	// FUNCTIONS 

	// Switch to the next slide
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	// Switch to the previous slide
	function previousSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}



});
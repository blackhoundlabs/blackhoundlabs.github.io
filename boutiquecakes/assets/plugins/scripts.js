$(document).ready(function () {
	$("body").on('click', '.header_search-btn', function(event) {
		event.preventDefault();
		if ($('#header_search-form').hasClass('hidden')) {
			$('#header_search-form').addClass('visible');
			$('#header_search-form').removeClass('hidden');
		}
		else {
			$('#header_search-form').addClass('hidden');
			$('#header_search-form').removeClass('visible');
		}
	});

	// submenu accordion

	var arr = ['#sub-m-1', '#sub-m-2'];

	$('.nav_aside-menu').on('click', '.m', function(event) {
		event.preventDefault();

		var thisid = $(this).attr('id');
		var sub = '#sub-' + thisid;
		$(sub).toggleClass('visible');
	});

	$('body').on('click', '.nav_for-mobile', function(event) {
		event.preventDefault();

		$('.header_nav-small').toggleClass('visible-swipe');
		$('.nav_for-mobile-btn').toggleClass('x-icon');
		console.log(event);
	});

	$('body').on('click', '.nav_aside-menu-fixed', function(event) {
		event.preventDefault();

		$('.nav_aside-menu').toggleClass('visible-swipe');
		$('.nav_aside-menu-fixed').toggleClass('hidden');
	});

	$('body').on('click', '.x-icon-submenu', function(event) {
		event.preventDefault();

		$('.nav_aside-menu').toggleClass('visible-swipe');
		$('.nav_aside-menu-fixed').toggleClass('hidden');
	});	

	$('body').on('click', '.header_phone-order', function() {
		$('.call-order').toggleClass('visible');
		$('.overflow').toggleClass('visible');
	});

	$('body').on('click', '.order-btn', function() {
		$('.product-order').toggleClass('visible');
		$(document).scrollTop(0);
		$('.overflow').toggleClass('visible');
	});

	$('body').on('click', '.overflow', function() {
		$('.call-order').removeClass('visible');
		$('.product-order').removeClass('visible');
		$('.overflow').removeClass('visible');
	});

	$('body').on('click', '.x-close', function() {
		$('.call-order').removeClass('visible');
		$('.product-order').removeClass('visible');
		$('.overflow').removeClass('visible');
	});


	// slider

	$('.bxslider').bxSlider({
		slideWidth: 0
	});

});
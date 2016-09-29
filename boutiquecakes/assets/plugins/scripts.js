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


});
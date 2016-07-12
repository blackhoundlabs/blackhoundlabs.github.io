
	$("body").on("click", ".nav-control", function() {
		$(".small-menu").toggleClass("opened");
	});


	$("body").on("click", "section", function() {
		if ($(".small-menu").hasClass("opened")) {
			$(".small-menu").toggleClass("opened");
		}
	});	
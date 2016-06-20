// button scroll
	jQuery(document).ready(function(){

		$("#button_about").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#about").offset().top
		    }, 1000);
		});

		$("#button_skills").click(function() {
				$('html, body').animate({
						scrollTop: $("#skills").offset().top
				}, 1000);
		});

		$("#button_portfolio").click(function() {
				$('html, body').animate({
						scrollTop: $("#portfolio").offset().top
				}, 1000);
		});

    $("#button_contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
});

// button scroll
	jQuery(document).ready(function(){

		$("#button_about").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#about").offset().top
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



		// portfolio
		$('.gallery ul li a').click(function() {
				var itemID = $(this).attr('href');
				$('.gallery ul').addClass('item_open');
				$(itemID).addClass('item_open');
				return false;
		});
		$('.close').click(function() {
				$('.port, .gallery ul').removeClass('item_open');
				return false;
		});

		$(".gallery ul li a").click(function() {
				$('html, body').animate({
						scrollTop: parseInt($("#top").offset().top)
				}, 400);
		});

});

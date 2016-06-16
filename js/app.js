
// scroll do sekcji about me
	jQuery(document).ready(function(){
    console.log("dziala");

		$("#button_about").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#about").offset().top
		    }, 1000);
		});
    $("#button_contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
});

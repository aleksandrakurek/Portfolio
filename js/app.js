
		function onScrollInit( items, trigger ) {
		  items.each( function() {
		    var osElement = $(this),
		        osAnimationClass = osElement.attr('data-os-animation'),
		        osAnimationDelay = osElement.attr('data-os-animation-delay');

		        osElement.css({
		          '-webkit-animation-delay':  osAnimationDelay,
		          '-moz-animation-delay':     osAnimationDelay,
		          'animation-delay':          osAnimationDelay
		        });

		        var osTrigger = ( trigger ) ? trigger : osElement;

		        osTrigger.waypoint(function() {
		          osElement.addClass('animated').addClass(osAnimationClass);
		          },{
		              triggerOnce: true,
		              offset: '80%'
		        });
		  });
		}

		 onScrollInit( $('.os-animation') );
		 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );


	jQuery(document).ready(function(){

		$("#link-projects").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#projects").offset().top
		    }, 1000);
		});
		$("#button-projects").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#about").offset().top
		    }, 1000);
		});
		$("#link-about").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#about").offset().top
		    }, 1000);
		});
		$("#link-portfolio").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#portfolio").offset().top
		    }, 1000);
		});
		$("#link-contact").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#contact").offset().top
		    }, 1000);
		});
		$("#button-contact").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#contact").offset().top
		    }, 1000);
		});
});


!function ($) {

  $(function(){

    $(document).on('click.app','[data-ride="scroll"]',function (e) {
        e.preventDefault();
        var $target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $($target).offset().top - 80
        }, 1000, 'easeInOutExpo', function () {
            window.location.hash = $target;
        });
    });

  });
}(window.jQuery);


var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $('.navbar').addClass('rolled');
   } else {
      $('.navbar').removeClass('rolled');
   }
   lastScrollTop = st;
});

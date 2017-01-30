$(document).ready(function() {

	//Toggle schedule days
	$(".d2").click(function() {
		$("#day1").fadeOut(500);
		$("#day2").fadeIn(1000);
		$(".d1").css({"color":"#999999", "border-bottom":"0px"});
		$(".d2").css({"color":"#009fc2", "border-bottom":"2px solid #009fc2"});
	});

	$(".d1").click(function() {
		$("#day2").fadeOut(500);
		$("#day1").fadeIn(1000);
		$(".d2").css({"color":"#999999", "border-bottom":"0px"});
		$(".d1").css({"color":"#009fc2", "border-bottom":"2px solid #009fc2"});
	});

	//Scroll then fixed navigation
	$(window).bind('scroll', function() {
		var navHeight = $( window ).height() - 100;
			 if ($(window).scrollTop() > navHeight) {
				 $('nav').addClass('fixed');
			 }
			 else {
				 $('nav').removeClass('fixed');
			 }
	});

	//Scroll to anchor points
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
      
        var target = this.hash,
        $target = $(target);
      
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-100
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

});

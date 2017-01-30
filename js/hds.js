$(document).ready(function() {
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
});

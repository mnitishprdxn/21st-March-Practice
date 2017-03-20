
//Accordian functionality
$(".question").on('click', function(event) {
	//first toggle controls
	$(this).find(".controls").toggleClass('controls-on');
	//slide toggle current answere
	var curentAnswer = $(this).parent('li').find(".answer");
	curentAnswer.slideToggle();
	//slideup all other answers except current
	$(".answer").not(curentAnswer).slideUp();
});


//lightbox functionality

$(".play-video").on('click', function(event) {
	$('.lightbox').css('display','block');
});





















$(document).ready(function() {

	$('.small-img').click(function() {

		var ImgData = $(this).find('img').attr('src');
		$('.large-img').fadeOut(function(){
			$('.large-img').find('img').attr('src', ImgData);
			$('.large-img').fadeIn();
		});
	});

	});
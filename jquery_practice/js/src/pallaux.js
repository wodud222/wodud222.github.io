$(function(){
	var area2Postop = $('#area2').offset().top;
	var area3Postop = $('#area3').offset().top;
	var ashPosTop = $('#ashColorArea').offset().top;
	var wh = $(window).height();
	$('div').height(wh);

	$(window).scroll(function(){
	  var value = $(this).scrollTop();
	  $('#scrollValue').text(value);

	  	//Area1
	  $('#area1').css('background-position-y',value);

		//Area2

	if (value > area2Postop){
		$('area2').css('background-position-y',value - area2Postop);
		console.log('area2 variable');
	} else {
	$('#area2').css('background-position-y','top');
	console.log('area2 top');

	}
	
	//Area3

	if (value > area3Postop){
		$('#area3').css('background-position-y',(value - area3Postop)*2);
		console.log('area3 variable')
	
	} else {
		$('#area3').css('background-position-y','top');
		console.log('area3 top');

	}

	//Area4

	if (value > ashPosTop) {
		var area4Top = value -ashPosTop - 800;
		$('#area4').css('background-position-y', area4Top);
	
	} else{
		$('#area4').css('background-position-y',-200);
	
		}
	});


});
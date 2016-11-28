//  mousewheel_01.js
$(function() {
	/* // 마우스 휠 테스트 --------------------------------------------------------- 
	// 마우스 휠 이벤트기능: mousewheel(firefox제외), DOMMouseScroll(firefox에서만 존재)!
	$('html, body').on('mousewheel DOMMouseScroll', function(e) {
		var evt = e.originalEvent;
		var delta = 0;

			//firefox 에서는 originalEvent내에 detail이 존재
			if(!!evt.detail){
					console.log(evt.detail*40);
					$('p').text(evt.detail*40);
			}
			//그외 기능에서는 wheelDelta값이 존재
			else{
					console.log(evt.wheelDelta);
					$('p').text(evt.wheelDelta);
			}
	});
	*/

$('.wheel_area').on('mousewheel DOMMouseScroll', function(e) {
				var evt = e.originalEvent;
				var delta = 0;
			//firefox 에서는 originalEvent내에 detail이 존재
				var wheel_i = $(this).index();
				var mainb = $('#mainBox').css({display:'block'});
				var bodyb = $('#bodyBox').css({display:'block'});
				var elecb = $('#elecBox').css({display:'block'});
				var neckb = $('#neckBox').css({display:'block'});
				var hardb = $('#hardBox').css({display:'block'});

				var main = $('#mainBox')
				var body = $('#bodyBox')
				var elec = $('#elecBox')
				var neck = $('#neckBox')
				var hard = $('#hardBox')


			if(!!evt.detail){
				var wheel_delta = evt.wheelDetail;
				if( wheel_delta < 0 && mainb){
					main.fadeOut(500);
					body.fadeOut(500);
				}else if( wheel_delta<0 && bodyb){
					body.fadeOut(500);
					neck.fadeIn(500);
				}
			}
			//그외 기능에서는 wheelDelta값이 존재
			else{
				var wheel_delta = evt.wheelDelta;
				if( wheel_delta < 0 && mainb){
					main.fadeOut(500);
					body.fadeOut(500);
				}else if( wheel_delta<0 && bodyb){
					body.fadeOut(500);
					neck.fadeIn(500);
				}
			}
	});
});

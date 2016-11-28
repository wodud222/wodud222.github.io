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

$('#mainBox').on('mousewheel DOMMouseScroll', function(e) {
				var evt = e.originalEvent;
				var delta = 0;
			//firefox 에서는 originalEvent내에 detail이 존재
				var wheel_i = $(this).index();
				var article = $('#articleBox').find('article');


			if(!!evt.detail){
				var wheel_delta = evt.wheelDetail;
				if( wheel_delta < 0){
				article.fadeOut(500,function(){
				article.eq(0).stop().fadeOut(500);
				article.eq(1).stop().fadeIn(500);
				});
				}else{article.fadeOut(500,function(){
					  article.eq(1).stop().fadeOut(500);
					  article.eq(0).stop().fadeIn(500);
					  });
				}
			}
			//그외 기능에서는 wheelDelta값이 존재
			else{
				var wheel_delta = evt.wheelDelta;
				
				if( wheel_delta < 0){
				article.fadeOut(1000);
				article.eq(1).delay(500).fadeIn(1000);
				}
			}
	});
$('#bodyBox').on('mousewheel DOMMouseScroll', function(e) {
				var evt = e.originalEvent;
				var delta = 0;
			//firefox 에서는 originalEvent내에 detail이 존재
				var wheel_i = $(this).index();
				var article = $('#articleBox').find('article');


			if(!!evt.detail){
				var wheel_delta = evt.wheelDetail;
				if( wheel_delta < 0){
				article.fadeOut(500);
				article.eq(2).delay(500).fadeIn(1000);
				}
				else{article.fadeOut(500);
					 article.delay(500).eq(0).fadeIn(500);
					  }
				}//if
			
			//그외 기능에서는 wheelDelta값이 존재
			else{
				var wheel_delta = evt.wheelDelta;
				
				if( wheel_delta < 0){
				article.fadeOut(500);
				article.eq(2).delay(500).fadeIn(1000);
				
				}
				else{article.stop().fadeOut(500);
					 article.stop().delay(500).eq(0).fadeIn(500);
					
				}
					  
				}//else
			
	});
});
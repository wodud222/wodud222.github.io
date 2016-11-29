//show_up.js
$(function(){

//메인페이지

var bg_box_00 =  $('.bg_box').fadeIn(700);
var bg_box_01 =  $('.bg_box').find('.front').fadeIn(1200);
var bg_box_02 =  $('.bg_box').find('.back').fadeIn(1200);

var menu = $('#menu').delay(1000).fadeIn(500);
var logo = $('#topBtn').delay(1000).fadeIn(500);
// + $('#topBtn').delay(100).fadeIn(500);
var main_01 = $('#mainTitleBox').fadeIn(1500);
var red = $('.red').delay(1000).fadeIn(1500);
var blue = $('.blue').delay(1100).fadeIn(1500);
var black = $('.black').delay(1200).fadeIn(1500);
var brown =	$('.green').delay(1300).fadeIn(1500);
var snb_01 = $('#snb').find('li').eq(0).delay(1000).fadeIn(1000);
var snb_02 = $('#snb').find('li').eq(1).delay(1000).fadeIn(1000);
var snb_03 = $('#snb').find('li').eq(2).delay(1000).fadeIn(1000);
var snb_04 = $('#snb').find('li').eq(3).delay(1000).fadeIn(1000);
var snb_05 = $('#snb').find('li').eq(4).delay(1000).fadeIn(1000);
var scroll = $('#scrollDown').delay(3200).fadeIn(1000);
	

// neck
var neck_tit = $('#neckBox').find('#neckTitleBox').fadeIn()


// about
// 
var about_tit = $('#aboutBox').find('#aboutTitleBox').fadeIn(500,function(){
	animate({marginTop:200+'px'},500);
});
var about_txt = $('#aboutBox').find('#aboutTextBox').delay(2000).fadeIn(1500);
var about_btn = $('#aboutBox').find('button').delay(2500).fadeIn(1500);

//video



 // 링크연결 
 $('.mnbTextUl>li').on('click',function(e){
 	$('#mnb').fadeOut(1000,function(){
 		$('content').fadeOut(1000);
 		});
 	});




 //wave effect

 //body
 	var article_index = $('#articleBox').find('article').index(),
		article = $('#articleBox').find('article');

	(function() {
	var bodyLi_01 = $('#bodyBox').find('li').eq(0).find('span'),
	    bodyLi_02 = $('#bodyBox').find('li').eq(1).find('span'),
	    bodyLi_03 = $('#bodyBox').find('li').eq(2).find('span'),
	    bodyName = $('.bodyName');
	    span = $('#bodyBox').find('span');

			var bodyBox = $('#bodyBox').css('display');
			if(bodyBox == 'block'){
				// if(article.eq(1).css({display:'block'})){
				function bodyLi(li_list) {
					var timed = 100;
					li_list.animate({marginLeft:'50%'},timed*3,function(){
						li_list.animate({marginLeft:'35%'},timed,function(){
							li_list.animate({marginLeft:'50%'},timed*3,function(){
								li_list.animate({marginLeft:'35%'},timed,function(){
									li_list.animate({marginLeft:'50%'},timed*3,function(){
										li_list.animate({marginLeft:'30%'},timed,function(){
											li_list.animate({marginLeft:'50%'},timed*3);
											span.css({color:'#111'})

										});
									});
								});
							});
						});
					});
				};
				bodyLi(bodyLi_01);
				bodyLi(bodyLi_02);
				bodyLi(bodyLi_03);
				}//if	
		})();

});


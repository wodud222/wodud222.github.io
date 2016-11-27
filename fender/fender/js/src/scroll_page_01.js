// scroll_page_01.js

$(function() {
	
	// 네비게이션 부드럽게 처리효과
	var nav_link = $('#snb a');
	nav_link.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:$(this.hash).offset().top});
	});

//  기타 이미지 컬러 변경
	var Color_div = $('#mainColorBox>div')
	var g_red = $('.red');
	var g_blue = $('.blue');
	var g_black = $('.black');
	var g_green = $('.green');
	var baseUrl ="./img/"

	
	
	$('#mainColorBox>div').on('mouseenter',function(){

	var front_list = [
	
	{"name":"red_front","img":"red_front.png","alt":"red_front"},
	{"name":"blue_front","img":"blue_front.png","alt":"blue_front"},
	{"name":"black_front","img":"black_front.png","alt":"black_front"},
	{"name":"brown_front","img":"brown_front.png","alt":"brown_front"},
	
	];
	
	var back_list = [
	
	{"name":"red_back","img":"red_back.png","alt":"red_back"},
	{"name":"blue_back","img":"blue_back.png","alt":"blue_back"},
	{"name":"black_back","img":"black_back.png","alt":"black_back"},
	{"name":"brown_back","img":"brown_back.png","alt":"brown_back"},
	
	];
	
	var div_num = $('#mainColorBox>div').index(this);

	console.log(div_num);

	console.log(front_list[div_num].img);
	var fr_img = $('.bg_box').find('img');

	console.log(fr_img);
	fr_img.eq(0).attr({src:baseUrl+front_list[div_num].img});
	fr_img.eq(1).attr({src:baseUrl+back_list[div_num].img});
	

	});


// top버튼 좌표 찾기 -> 일단 보류
	
	var btn_top = $('#topBtn');
	btn_top.on('click',function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0});
	});

		var scroll_top = $(window).scrollTop();

	    // scroll 위치에 따른 배경색상 변경

// snb 클릭시 해당 페이지 색 변경 및 article box open
	
	
	var snb_index = $('#snb').find('li').index();
	var snb = $('#snb').find('li');
	var article_index = $('#articleBox').find('article').index();
	var article = $('#articleBox').find('article');

	console.log(snb_index);
	console.log(article_index);

	$('#snb').find('li').on('click', function() {

		snb.css({backgroundColor:'#fff'});
		$(this).css({backgroundColor:'#c20c0c'});


		if($(this).index() == 0){
			$('#articleBox').animate({backgroundColor:'#171B1E'},1000);
			article.fadeOut(500);		
			article.eq(0).delay(500).fadeIn(500);		
		}else if($(this).index() == 1){
			$('#articleBox').animate({backgroundColor:'#360E1A'},1000);
			article.fadeOut(500);		
			article.eq(1).delay(500).fadeIn(500);	
			
		}else if($(this).index() == 2){
			$('#articleBox').animate({backgroundColor:'#0915EB'},1000);
			article.fadeOut(500);
			article.eq(2).delay(500).fadeIn(500);

		}else if($(this).index() == 3){
			article.css({'display':'none'});
			article.eq(3).css({'display':'block'});
		
		}else if($(this).index() == 4){
			article.css({'display':'none'});
			article.eq(4).css({'display':'block'});
		}

	});

});
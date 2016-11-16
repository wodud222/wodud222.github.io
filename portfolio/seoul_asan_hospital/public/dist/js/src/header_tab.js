// header_tab.js

$(function(){
	$('#navi>ul>li').on('mouseenter',function(){
	var li_num = $('#navi>ul>li').index(this);

	console.log(li_num);

	$('#navi_popup').show().fadeIn(500);
	});
	$('#navi').on('mouseleave',function(){
	$('#navi_popup').hide();
	
	});
	
	$('.pop_01>ul>li').on('mouseenter',function(){
		$('.pop_02').show();
		$('.pop_02').on('mouseleave',function(){
		$('.pop_02').hide();
		});
var list_02 = [
	{"first":"찾아오시는길"},
	{"first":"주차 안내"},
	{"first":"주요 전화번호"},
	{"first":"층별 위치 안내"},
	{"first":"병원시설"},
];
	});

});



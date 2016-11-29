// header_tab.js

$(function(){
	
//메인 nav
	
	$('#navi>ul>li').on('mouseenter',function(){
	var li_num = $('#navi>ul>li').index(this);

	console.log(li_num);

	$('#navi_popup_pc').show()
	});
	$('#navi').on('mouseleave',function(){
	$('#navi_popup_pc').hide();
	
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



//accordion pop_up
    var acco = $('#navi_accordion');
    var acco_li = $('#navi_accordion').find('dt').next('dd').find('ul').eq(0).find('li');
    var acco_dd = $('#navi_accordion').find('dt').next('dd');
    

    $('#menu').on('click',function(){
      acco.fadeToggle(300);
      // acco_dd.on('click',function(){
      // acco_dd
      acco.on('mouseleave',function(){
      	acco.fadeOut();
      	})
      });

// var li_list = [
// {"first":"진료안내","second":"응급증상"},
// {"first":"진료안내","second":"응급증상","third":"","forth":""},
// {"first":"진료안내","second":"응급증상"},
// ];

 		// var acco_i = $('#navi_accordion').find('dt').next('dd').find('ul').eq(0).find('li').eq(i);

//dt hover시 dd오픈
acco.find('dt').on('click',function(){
		acco.find('dd').slideUp();
		$(this).next('dd').slideDown();
    	acco.find('dt')


        });
    	
 		acco_li.eq(0).on('mouseenter',function(){
    	acco_dd.find('ul').eq(1).fadeIn();
    	
    	acco.find('dd').eq(0).on('mouseleave',function(){
    	acco_dd.find('ul').eq(1).css({'display':'none'});
    		
    	});
    	

    		
    	
   });

    acco.find('.test_01').on('mouseenter',function(){
    	$(this).next('ul').fadeIn();
    });

//sub page lnb accordion
    
  $('#lnb').find('dt').on('click',function(){
    $(this).next('dd').slideToggle();

  });

}); //function



$(function(){
  $('#neckTextBox>ul').on('mouseenter',function(e){
    $(this).on('mouseleave',function(){
      e.preventDefault();
    })
    $(this).find('li').eq(0).find('span').fadeOut(500, function(){
      $(this).parent('li').eq(0).stop().animate({width:0},800, function(){
        var test = $(this).next('li').find('span').width();
        console.log(test);
        $(this).next('li').stop().animate({'width':test+'px'},800,function(){
          $(this).children('span').fadeIn(800);
          
        });
     	});
    });

  });


}); //jQuery.function()


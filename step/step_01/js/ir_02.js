$(document).ready(function(){
	$('#leftBtn').click(function(){
		if(10 >= $('.mario').offset().left){}else{$('.mario').animate({left:'-=80px'},500);}
	})
})

$('#rightBtn').click(function(){
	$('.mario').animate({left:'+=80px'},500);
});

});
			$('div').eq(2).css({color:'#333',borderRadius:'1rem'});
			$('div:odd').css({color:'#f0f',borderRadius:'50%'});
			$('div:even').css({color:'#333',borderRadius:'1rem'});
			$('div').first().css({backgroundColor:'#fc0'});
			$('div:first')

			$(function({
				var box = $('div');
				var timed = 300;

				$('#red').on('click',function(){
					$(this).next().animate({width:0,
						padding:0,overflow:'hidden'});

				});

				$('#yellow').on('click',function(){
					$(this).animate({width:0,padding:0,overflow:'hidden'});
				});

				$('#green').on('click',function(){
					var yellow = $(this).prev();
					var yWidth = yellow.width();
					if(yWidth === 0){
						yellow.animate({width:'100px',padding:'1rem'},1500);
					} else{
						yellow.animate({width:0,padding:0,overflow:'hidden'});
					}
				}); // toggle,fadeToggle, slideToggle
			});
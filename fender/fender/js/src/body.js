(function(){
    
    var text = $('#body .bodyText');
    
    
    
    for(i=0;i<3;i++){
        
    var span_w = text.find('div').eq(i).prev().width() + 26;
       
        text.find('div').eq(i).css({width:span_w});
    }
    
    text.find('div').mouseover(function(){
        
    
        $(this).prev().stop().animate({marginLeft:'0%'},400,'linear',function(){
            $(this).animate({marginLeft:'50%',backgroundColor:'#c20c0c',color:"#fff"},200,'linear');
            
            var li_num = text.find('span').index(this);
            console.log(li_num);
            if(li_num == 0){
               $(this).text('Telecaster');
            }else if(li_num == 1){
                $(this).text('Alder');
            }else{
                $(this).text('Polyester');
            }
        });/*animate_effect*/
        
        
        
    });/*mouseover*/
    
    text.find('div').mouseout(function(){
        
        $(this).prev().stop().animate({marginLeft:'0%',backgroundColor:'#fff',color:'#111'},400,'linear',function(){
            $(this).animate({marginLeft:'50%'},200,'linear');
           
            
            var li_num = text.find('span').index(this);
            if(li_num == 0){
                
                $(this).text('Body shape');
            }else if(li_num == 1){
                $(this).text('Body material');
            }else{
                $(this).text('Body finish');
            }
        });
        
    });/*mouseout*/
    
})(this.jQuery);
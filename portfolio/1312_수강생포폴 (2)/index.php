<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr" />
<title>�׸���ǻ�;�Ʈ_��Ʈ������</title>
<link rel="stylesheet" type="text/css" href="./profile/css/profile.css"/>
<script type="text/javascript" language="javascript" src="./profile/script/flash.js"></script>
<script> 
 function menuOn(imgEl) {
 imgEl.src = imgEl.src.replace("_off", "_on");
}
 
function menuOut(imgEl) {
 imgEl.src = imgEl.src.replace("_on", "_off");
}
</script>
<script type="text/javascript"src="profile/script/jquery.js"></script>
<script type="text/javascript">
$(document).ready(function() {
	
$("ul#btn_portfolio li").hover(function() { //Hover over event on list item
	$(this).find("span").show(); //Show the subnav
} , function() { //on hover out...
	$(this).find("span").hide(); //Hide the subnav
});

});
</script>
<!--�ֻ��� ��ũ�� ����-->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<link href='http://fonts.googleapis.com/css?family=Vollkorn' rel='stylesheet' type='text/css'>			
<script type="text/javascript">
			$(document).ready(function(){ 
			
			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			}); 
			
			$('.scrollup').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 500); //��ũ�� �ӵ�//
				return false;
			});
 
		});
		</script>
<!--�ֻ��� ��ũ�� ��-->
<script type="text/javascript">
			$(document).ready(function(){ 
			
			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scrollp').fadeIn();
				} else {
					$('.scrollp').fadeOut();
				}
			}); 
			
			$('.scrollp').click(function(){
				$("html, body").animate({ scrollTop: #portfolio_01 }, 500); //��ũ�� �ӵ�//
				return false;
			});
 
		});
		</script>
<!--�ֻ��� ��ũ�� ��-->
</head>

<body>
<div id="wrap">
	<div id="header">
  <div class="menu">
        	<h1><img src="profile/images/name.jpg" /></h1>
            <!-- �޴� ����-->
        	<div class="navi">
            	<h3><ul>
                    	<li class="nav none"><a href="#profile"><img src="./profile/images/layout/menu_01_tit_off.jpg" onmouseover="menuOn(this);" onmouseout="menuOut(this);"/></a></li>
                    </ul></h3>
                <ul>
                	<li class="nav"><a href="#my_profile"><img src="profile/images/layout/menu_01_s1_off.jpg" onmouseover="menuOn(this);" onmouseout="menuOut(this);"/></a></li>
                    <li class="nav"><a href="#my_introduce"><img src="profile/images/layout/menu_01_s2_off.jpg" onmouseover="menuOn(this);" onmouseout="menuOut(this);"/></a></li>
                </ul>
                <h3 class="ml40">
                	<ul>
                    	<li class="nav none"><a href="#portfolio"><img src="profile/images/layout/menu_02_tit_off.jpg" onmouseover="menuOn(this);" onmouseout="menuOut(this);" /></a></li>
                    </ul>
                </h3>
                <ul class="portfolio">
                	<li class="nav"><a href="#portfolio_01"><img src="profile/images/layout/menu_02_s1_off.jpg" onmouseover="menuOn(this);" onmouseout="menuOut(this);" /></a></li>
                    <li class="nav"><a href="#portfolio_02"><img src="profile/images/layout/menu_02_s2_off.jpg" onmouseover="menuOn(this);" onmouseout="menuOut(this);" /></a></li>
                  <li class="nav"><a href="#portfolio_03"><img src="profile/images/layout/menu_02_s3_off.jpg" onmouseover="menuOn(this);" onmouseout="menuOut(this);" /></a></li>
                  <li class="nav"><a href="#portfolio_etc"><img src="profile/images/layout/menu_02_s5_off.jpg" onmouseover="menuOn(this);" onmouseout="menuOut(this);" /></a></li>
                </ul>
                <h3 class="ml40"><ul>
                    	<li class="nav none"><a href="#story"><img src="profile/images/layout/menu_03_tit_off.jpg" onmouseover="menuOn(this);" onmouseout="menuOut(this);" /></a></li>
                    </ul>
                </h3>
            </div>
            <!-- �޴� ��-->
            <div class="topbtn">
            	<ul>
                	<li class="nav"><a href="#wrap"><img src="profile/images/layout/btn_top_t_off.jpg" onmouseover="menuOn(this);" onmouseout="menuOut(this);" /></a></li>
                </ul>
            </div>
            	<ul id="btn_portfolio">
                	<!-- �޴��� ����-->
                	<li class="mobile"><a href="tel:01071696516"><img src="profile/images/mobile.jpg" /></a></li>
                    <!-- �޴��� ����-->
                    <li><img src="profile/images/layout/btn_portfolio.jpg" />
                    	<span>
                    <!-- ������ũ���� 1--><a href="./st" target="_blank"><img src="profile/images/layout/btn_portfolio_01_off.jpg" class="pr1" onmouseover="menuOn(this);" onmouseout="menuOut(this);"/></a><!-- ������ũ���� 1--><!-- ������ũ���� 2--><a href="http://���̵�.dothome.co.kr/��������" target="_blank"><img src="profile/images/layout/btn_portfolio_02_off.jpg" class="pr1" onmouseover="menuOn(this);" onmouseout="menuOut(this);"/></a><!-- ������ũ���� 2--><!-- ������ũ���� 3--><a href="http://���̵�.dothome.co.kr/��������" target="_blank"><img src="profile/images/layout/btn_portfolio_03_off.jpg" onmouseover="menuOn(this);" onmouseout="menuOut(this);"/></a><!-- ������ũ���� 3--></span></li>
            	</ul>
  </div>
        
    </div>
    <div id="profile">
    	<div id="my_profile"><img src="profile/images/profile.jpg" /></div>
        <div id="my_introduce"><img src="profile/images/introduce.jpg" /></div>
    </div>
    <div id="portfolio">
    	<div id="portfolio_01">
 			<!-- ��Ʈ������ 01 ���� -->
            <div class="portfolio_img"><img src="profile/images/portfolio_main01.jpg" />
	
</div>
            <div class="portfolio_contents">
           	  <h2><img src="profile/images/portfolio_tit01.jpg" /></h2>
                <ul>
                	<li><a href="http://���̵�.dothome.co.kr/��������" target="_blank"><img src="profile/images/layout/btn_portfolio_website_off.jpg" onMouseOver="menuOn(this);" onMouseOut="menuOut(this);"/></a></li>
                    <li class="made ptext">2week</li>
                    <li class="concept ptext">�ѻ��ǿ� �����ܰ��� ���� �߽����� ���彺 �����̽ĵ� �ü���
                      �ַ��ϴ� ���ǿ��̴�. <br />
                      ������ Ȩ�������� �ܼ��� ���̾ƿ��� �ؽ�Ʈ
                    ������ ������ ������ ���̾�����...</li>
                    <li class="epilogue ptext">�ѻ��ǿ� �����ܰ��� ���� �߽����� ���彺 �����̽ĵ� �ü��� �ַ��ϴ� ���ǿ��̴�. ������ Ȩ�������� �ܼ��� ���̾ƿ��� �ؽ�Ʈ ������ ������ ������ ���̾�����...<br />
                    �ѻ��ǿ� �����ܰ��� ���� �߽����� ���彺 �����̽ĵ� �ü��� �ַ��ϴ� ���ǿ��̴�. ������ Ȩ�������� �ܼ��� ���̾ƿ��� �ؽ�Ʈ ������ ������ ������ ���̾�����...<br />
                    �ѻ��ǿ� �����ܰ��� ���� �߽����� ���彺 �����̽ĵ� �ü��� �ַ��ϴ� ���ǿ��̴�. ������ Ȩ�������� �ܼ��� ���̾ƿ��� �ؽ�Ʈ ������ ������ ������ ���̾�����...<br />
                    </li>
                </ul>
            </div>
            <!-- ��Ʈ������ 01 �� -->
     	</div>
        <div id="portfolio_02">
        	<!-- ��Ʈ������ 02 ���� -->
            <div class="portfolio_img"><img src="profile/images/portfolio_main02.jpg" />
	<div class="pline"></div>
</div>
            <div class="portfolio_contents">
           	  <h2><img src="profile/images/portfolio_tit02.jpg" /></h2>
                <ul>
                	<li><a href="http://���̵�.dothome.co.kr/��������" target="_blank"><img src="profile/images/layout/btn_portfolio_website_off.jpg" onMouseOver="menuOn(this);" onMouseOut="menuOut(this);"/></a></li>
                    <li class="made ptext">2week</li>
                    <li class="concept ptext">�ѻ��ǿ� �����ܰ��� ���� �߽����� ���彺 �����̽ĵ� �ü���
                      �ַ��ϴ� ���ǿ��̴�. <br />
                      ������ Ȩ�������� �ܼ��� ���̾ƿ��� �ؽ�Ʈ
                    ������ ������ ������ ���̾�����...</li>
                    <li class="epilogue ptext">�ѻ��ǿ� �����ܰ��� ���� �߽����� ���彺 �����̽ĵ� �ü��� �ַ��ϴ� ���ǿ��̴�. ������ Ȩ�������� �ܼ��� ���̾ƿ��� �ؽ�Ʈ ������ ������ ������ ���̾�����...<br />
                    �ѻ��ǿ� �����ܰ��� ���� �߽����� ���彺 �����̽ĵ� �ü��� �ַ��ϴ� ���ǿ��̴�. ������ Ȩ�������� �ܼ��� ���̾ƿ��� �ؽ�Ʈ ������ ������ ������ ���̾�����...<br />
                    �ѻ��ǿ� �����ܰ��� ���� �߽����� ���彺 �����̽ĵ� �ü��� �ַ��ϴ� ���ǿ��̴�. ������ Ȩ�������� �ܼ��� ���̾ƿ��� �ؽ�Ʈ ������ ������ ������ ���̾�����...<br />
                    </li>
                </ul>
            </div>
            <!-- ��Ʈ������ 02 �� -->	
    	</div>
        <div id="portfolio_03">
            <!-- ��Ʈ������ 03 ���� -->
            <div class="portfolio_img"><img src="profile/images/portfolio_main03.jpg" />
	<div class="pline"></div>
</div>
            <div class="portfolio_contents">
           	  <h2><img src="profile/images/portfolio_tit03.jpg" /></h2>
                <ul>
                	<li><a href="http://���̵�.dothome.co.kr/��������" target="_blank"><img src="profile/images/layout/btn_portfolio_website_off.jpg" onMouseOver="menuOn(this);" onMouseOut="menuOut(this);"/></a></li>
                    <li class="made ptext">2week</li>
                    <li class="concept ptext">�ѻ��ǿ� �����ܰ��� ���� �߽����� ���彺 �����̽ĵ� �ü���
                      �ַ��ϴ� ���ǿ��̴�. <br />
                      ������ Ȩ�������� �ܼ��� ���̾ƿ��� �ؽ�Ʈ
                    ������ ������ ������ ���̾�����...</li>
                    <li class="epilogue ptext">�ѻ��ǿ� �����ܰ��� ���� �߽����� ���彺 �����̽ĵ� �ü��� �ַ��ϴ� ���ǿ��̴�. ������ Ȩ�������� �ܼ��� ���̾ƿ��� �ؽ�Ʈ ������ ������ ������ ���̾�����...<br />
                    �ѻ��ǿ� �����ܰ��� ���� �߽����� ���彺 �����̽ĵ� �ü��� �ַ��ϴ� ���ǿ��̴�. ������ Ȩ�������� �ܼ��� ���̾ƿ��� �ؽ�Ʈ ������ ������ ������ ���̾�����...<br />
                    �ѻ��ǿ� �����ܰ��� ���� �߽����� ���彺 �����̽ĵ� �ü��� �ַ��ϴ� ���ǿ��̴�. ������ Ȩ�������� �ܼ��� ���̾ƿ��� �ؽ�Ʈ ������ ������ ������ ���̾�����...<br />
                    </li>
                </ul>
            </div>
            <!-- ��Ʈ������ 03 �� -->
    	</div>
        <div id="portfolio_etc">
          	<!-- ��Ÿ ��Ʈ������ ���� -->
            <div class="portfolio_etc"><img src="profile/images/portfolio_etc.jpg" />
                <div class="pline"></div>
            </div>
            <!-- ��Ÿ ��Ʈ������ �� -->
    	</div>
    </div>
    <div id="story"><img src="profile/images/story.jpg" /></div>
    <div id="footer">
    	<!-- Ǫ�� ���� -->
        <div class="footer_contents">
        	<p class="copyright">COPYRIGHT 2013 <span class="name">LEE SEOK JAE</span>. ALL RIGHTS RESERVED.</p>
        </div>
        <!-- Ǫ�� �� -->
    </div>
    <div><a href="#portfolio_01" class="scrollp"></a></div>
    <div><a href="#portfolio_01" class="scrollup"></a></div>
</div>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>		
        <script type="text/javascript" src="profile/script/jquery.easing.1.3.js"></script>
        <script type="text/javascript">
            $(function() {
                $('li.nav a').bind('click',function(event){
                    var $anchor = $(this);
                    
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 600,'easeInOutExpo');
                    /*
                    if you don't want to use the easing effects:
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000);
                    */
                    event.preventDefault();
                });
            });
        </script>
</body>
</html>
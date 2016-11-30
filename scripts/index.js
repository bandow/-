$(function(){
   //banner幻灯片-begin
    var mySwiper = new Swiper('.swiper-container', {
		autoplay: 5000,//可选选项，自动滑动
		pagination: '.swiper-pagination',
        paginationClickable: true
	});
    //login登录-begin
    $(".login-container ul li").each(function(index,element){
    	$(this).bind("click",function(){
            $(this).addClass("active").siblings().removeClass("active");
            if(index==0){
              	$(".line").css("left","7%");
            }else{
              	$(".line").css("left","57%");
            }
            $(".login-list .form").eq($(this).index()).show().siblings().hide();
    	});
    }); 
    $(".name input").on("focus",function(){
    	$(".error-prompt").show();
    })
	//backtop
    $(".back-top .top").bind("click",function(){
        $('html,body').animate({scrollTop: '0px'}, 800);
    }); 
    $(".back-top .qq").bind("mousemove",function(){
       $(this).addClass("active");
    });
     $(".back-top .qq").bind("mouseout",function(){
       $(this).removeClass("active");
    });
      $(".back-top .top").bind("mousemove",function(){
       $(this).addClass("active");
    });
     $(".back-top .top").bind("mouseout",function(){
       $(this).removeClass("active");
    });
});
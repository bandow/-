requirejs.config({
    paths: {
        jquery: 'lib/jquery-1.10.1.min',
        swiper: 'lib/swiper-3.4.0.jquery.min'
    }
});

requirejs(['jquery','swiper'],function($,swiper){  
    $(document).ready(function () {
	   //banner幻灯片-begin
        var mySwiper = new Swiper('.swiper-container', {
			autoplay: 5000,//可选选项，自动滑动
		});
        //login登录-begin
        $(".login-container ul li").each(function(index,element){
        	$(this).on("click",function(){
                $(this).addClass("active").siblings().removeClass("active");
                if(index==0){
                  	$(".line").css("left","5%");
                }else{
                  	$(".line").css("left","55%");
                }
                $(".login-list .form").eq($(this).index()).show().siblings().hide();
        	});
        });    
    });
});
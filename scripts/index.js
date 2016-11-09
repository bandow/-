requirejs.config({
    paths: {
        jquery: 'lib/jquery-1.10.1.min',
        swiper: 'lib/swiper-3.4.0.jquery.min',
        charts: 'lib/highcharts'
    }
});

requirejs(['jquery','swiper','charts'],function($,swiper,charts){  
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
                  	$(".line").css("left","7%");
                }else{
                  	$(".line").css("left","57%");
                }
                $(".login-list .form").eq($(this).index()).show().siblings().hide();
        	});
        }); 
        //icon-list  图标列表
        $(".icon-list .list-text").on("mousemove",function(){
             $(this).addClass("active").siblings().removeClass("active");
        }); 
        //直播视频
        $(".live-top ul li").on("click",function(){
            $(this).addClass("active").siblings().removeClass("active");
            $(".live-text .live-text-list").eq($(this).index()).show().siblings().hide();
			$(".title-nav li").on("mousemove",function(){
	            $(this).addClass("active").siblings().removeClass("active");
	            $(".live-text-list-container .list").eq($(this).index()).show().siblings().hide();
	            $(".big-img-list").on("mousemove",function(){
		            $(this).addClass("active").siblings().removeClass("active");
		        });
            });
        });
        //微信推广
        $(".WeChat-nav li").on("mousemove",function(){
            $(this).addClass("active").siblings().removeClass("active");
            $(".WeChat-text-all .WeChat-text-list").eq($(this).index()).show().siblings().hide();
        }); 


        //近7天头条阅读数图表
        $('#chart').highcharts({
	        chart: {
	            type: 'spline'
	        },
	        title: {
	            text: ''
	        },
	        subtitle: {
	            text: ''
	        },
	        xAxis: {
	            type: 'datetime',
	            dateTimeLabelFormats: { // don't display the dummy year
	                month: '%e. %b',
	                year: '%b'
	            },
	            title: {
	                text: 'Date'
	            }
	        },
	        yAxis: {
	            title: {
	                text: 'Snow depth (m)'
	            },
	            min: 0
	        },
	        tooltip: {
	            headerFormat: '<b>{series.name}</b><br>',
	            pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
	        },
	        plotOptions: {
	            spline: {
	                marker: {
	                    enabled: true
	                }
	            }
	        },
	        series: [{
	            name: '近7天头条阅读数量',
	            // Define the data points. All series have a dummy year
	            // of 1970/71 in order to be compared on the same x axis. Note
	            // that in JavaScript, months start at 0 for January, 1 for February etc.
	            data: [
	                [Date.UTC(1970, 9, 27), 0   ],
	                [Date.UTC(1970, 9, 28), 5 ],
	                [Date.UTC(1970, 9, 29), 10 ],
	                [Date.UTC(1970, 9, 30), 15 ],
	                [Date.UTC(1970, 10, 1), 5 ],
	                [Date.UTC(1970, 10, 2), 10 ],
	                [Date.UTC(1970, 10, 3), 5]
	            ]
	        }]
	    });
    });
});

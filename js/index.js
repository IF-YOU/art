// 顶部
var timer=null;
var i=0;
$(function(){
	$(".flash .con ul li").mouseover(function(){
		clearInterval(timer);
	});
	$(".flash .con ul li").click(function(){
		$(this).stop().animate({width:"905px"},300).siblings().stop().animate({width:"46px"},300)
	});
	$(".flash .con ul li").mouseout(function(){
		timer=setInterval("startMove()",2000)
	});
	
})
function startMove(){
	i++;
	if(i>$(".flash .con ul li").length-1){i=0}
		$(".flash .con ul li").stop().eq(i).animate({width:"905px"},300).siblings().stop().animate({width:"46px"},300)
};
timer=setInterval("startMove()",2000);
// 导航
$(function() {
	$("#nav>ul>li").hover(function() {
		$(this).addClass("sfhover");
		$("#nav ul ul").slideUp("fast");
		$(this).find("a:first").animate({"top": "12px"},"fast");
		$(this).find("span").animate({"top": "-40px"},"fast");
		if (!$(this).find("ul").is(":animated")) $(this).find("ul").slideDown("fast")
	},
	function() {
		$(this).removeClass("sfhover");
		$(this).find("a:first").animate({"top": "0px"},"fast");
		$(this).find("span").animate({"top": "0px"},"fast");
		if (!$(this).find("ul").is(":animated")) $(this).find("ul").slideUp("fast");
		$("#nav ul ul").slideUp("fast")
	})
	$(".showhiden").click(function(){
		$("#nav li").toggle(1500);
	})
});
// 轮播
$(document).ready(function($) {
	/* identifier variable must be unique ID */
	var sangar = $('#sangar-example').sangarSlider({
		timer :  500, // true or false to have the timer
		pagination : 'content-horizontal', // bullet, content, none
		paginationContent : ["images/11.jpg", "images/22.jpg", "images/33.jpg", "images/44.jpg", "images/55.jpg"], // can be text, image, or something			        
		paginationContentType : 'image', // text, image
		paginationContentWidth : 120, // pagination content width in pixel
		paginationImageHeight : 90, // pagination image height
		width : 850, // slideshow width
        height : 500, // slideshow height
        fixedHeight: true,
		scaleSlide : true // slider will scale to the container size
	});
})	
// 新闻资讯-轮播
var mySwiper = new Swiper('.swiper-container',{
	slidesPerView : 3,
	autoplay: 3000,
})

// 产品中心

$('.demo1').Tabs({
	event:'click'
});
    //直接显示遮罩效果开始
	$(".con-two").hover(function(){
		$(this).find(".txt-two").css("display","block");
		},function(){
			$(this).find(".txt-two").css("display","none");
	})
	//直接显示遮罩效果结束
// 合作
$("#tab_con a").hover(function(){
	$(this).find(".shows").css("display","block");
},function(){
	$(this).find(".shows").css("display","none");
})
$(function(){

	// 左侧轮播
	$("#tab_left_1").hover(function(){
			$("#tab_con_1").fadeIn(600);
			$('#tab_con_2').hide();
			$('#tab_con_3').hide();
			$('#tab_con_4').hide();
		});
		$("#tab_left_2").hover(function(){
			$("#tab_con_1").hide();
			$("#tab_con_3").hide();
			$("#tab_con_4").hide();
			$("#tab_con_2").fadeIn(600);
		});
		$("#tab_left_3").hover(function(){
			$("#tab_con_2").hide();
			$("#tab_con_1").hide();
			$("#tab_con_4").hide();
			$("#tab_con_3").fadeIn(600);
		});
		$("#tab_left_4").hover(function(){
			$("#tab_con_1").hide();
			$("#tab_con_2").hide();
			$("#tab_con_3").hide();
			$("#tab_con_4").fadeIn(600);
		});
});
// 艺术家
$(".authr").hover(function(){
	$(this).find(".chx").css("display","block");
},function(){
	$(this).find(".chx").css("display","none");
})
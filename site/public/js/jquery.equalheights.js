/*parsed HTML*/
$(function(){
	$(".maxheight").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})
	$(".maxheight2").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})

	$(".maxheight3").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})
	$(".maxheight4").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})
	$(".maxheight4").css({"overflow": "hidden"});
	$(".maxheight5").each(function(){
		$(this).contents().wrapAll("<div class='box_inner'></div>");
	})

})
/*add event*/
$(window).bind("resize", height_handler).bind("load", height_handler)
function height_handler(){
	if($(window).width()>465){
		$(".maxheight").equalHeights();
	}else{
		$(".maxheight").css({'height':'auto'});
	}
	if($(window).width()>465){
		$(".maxheight2").equalHeights();
	}else{
		$(".maxheight2").css({'height':'auto'});
	}
	if($(window).width()>740){
		$(".maxheight3").equalHeights();
	}else{
		$(".maxheight3").css({'height':'auto'});
	}
	if($(window).width()>465){
		$(".maxheight4").equalHeights();
	}else{
		$(".maxheight4").css({'height':'auto'});
	}
	if($(window).width()>465){
		$(".maxheight5").equalHeights();
	}else{
		$(".maxheight5").css({'height':'auto'});
	}

}
/*glob function*/
(function($){
	$.fn.equalHeights=function(minHeight,maxHeight){
		tallest=(minHeight)?minHeight:0;
		this.each(function(){
			if($(">.box_inner", this).outerHeight()>tallest){
				tallest=$(">.box_inner", this).outerHeight()
			}
		});
		if((maxHeight)&&tallest>maxHeight) tallest=maxHeight;
		return this.each(function(){$(this).height(tallest)})
	}
})(jQuery)

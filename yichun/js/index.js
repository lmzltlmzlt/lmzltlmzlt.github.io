$(function(){
	x=0;
	$(".rightbotton").click(function(){
		if(x<2){
			x=x+1;
			$(".imgbox").animate({marginLeft:-1060*x},1000);
			$(".underbottonimg").animate({marginLeft:-48+24*x},0);
			}
	})
	$(".leftbotton").click(function(){
		if(0<x){
			x=x-1;
			$(".imgbox").animate({marginLeft:-1060*x},1000);
			$(".underbottonimg").animate({marginLeft:-48+24*x},0);
			}	
	})
})
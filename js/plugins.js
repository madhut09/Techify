  $('.carousel').carousel({
  interval: 2000
})

  $('.gear-chek').click(function (){
  	$('.color-option').toggle(1000);
  	
  });

$(document).click(function (e) {
    var target = e.target;
    console.log($(target).attr('class'));
    if (!$(target).is('.gear-chek')) {
        $('.color-option').hide(1000);
    }
});


$('.color-option ul li').click(function (){
	// console.log($(this).attr("data-value"));
	$("link[href*='color']").attr("href",$(this).attr("data-value"));

});

// to remove div after loading
$(document).ready(function(){
	
	$(".loading-overly .spinner").fadeOut(2000,function(){
		$('body').css("overflow","auto");
		$(this).parent().fadeOut(1000,function(){
			$(this).remove();
		});
	});
});


//show button if scroll greater than 700

$(window).scroll(function(){
	if($(this).scrollTop()>=700)
	{
		$('#to_top').show();
	}
	else
		$('#to_top').hide();
});


//on click go to top of page

$('#to_top').click(function(){
	$('html,body').animate({scrollTop:0},500);
});


//noce scroll


$('.header-number').click(function(){
	$(this).parent().toggleClass('striked-bg');
	$(this).parent().find('input').toggleClass('striked-block');
})
$(window).on('load resize',function(){
    var pagew = $(window).outerWidth()
    var c_width = $('footer .container').outerWidth() - 30
    $('.fw_item').css('width','calc(100% + '+((pagew - c_width)/2)+'px)')
})
$(window).load(function() {
$('.doors_slider').each(function(){
     var owl = $(this);

  
  var prevFlag = false;
  owl.on('prev.owl.carousel', function(event) {
    prevFlag = true
  });

  owl.on('changed.owl.carousel initialized.owl.carousel', function(event) {
    var owlItems  = event.item.count;  
    var item      = event.item.index; 
    var calcItem  = Math.floor(item - (owlItems / 2) + 1); 

    if(prevFlag) {
      if (calcItem === 0) { 
        calcItem = owlItems; 
      }
    }

    if(prevFlag === false && calcItem === 0 || calcItem > owlItems) {
      calcItem = 1;
    }

      $(owl).closest('section').find('.total').text(owlItems)
      
       $(owl).closest('section').find('.current').text(calcItem)

    prevFlag = false
  });
  var ifmultiple = $(owl).hasClass("not_auto") ? false : true;

    
  owl.owlCarousel({
    
    loop:true,
    margin:30,
    autoWidth:ifmultiple,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1,
            margin:15
        },
        600:{
            items:2,
            margin:15
        },
        1000:{
            items:3
        }
    }
})
//    if($(owl).hasClass("posun") && !$(owl).hasClass('gal_slider')) {
//        $(owl).trigger('prev.owl.carousel')
//    }
})
    $('.go_next').click(function(){
$(this).closest('section').find('.owl-carousel').trigger('next.owl.carousel')})
    $('.go_prev').click(function(){
$(this).closest('section').find('.owl-carousel').trigger('prev.owl.carousel')})
});
$(document).ready(function(){
    $("input[name='phone']").mask("+7(000)000-00-00");
    $('.chose_item').click(function(){
        if($(this).closest('.chose_wrp').hasClass('multiple')){
            $(this).toggleClass('chosen')
        }else {
            $(this).closest('.chose_wrp').find('.chose_item').removeClass('chosen')
            $(this).addClass('chosen')
        }
    })
    var counter = 1;
    function checker(){
        if(counter == 3) {
            $('.next_step').hide()
            $('.steps_foot').addClass('last_step')
        }
    }
    $('.next_step').click(function(){
        if($('.step'+(counter)+'').find('.chosen').length > 0) {
            counter++;
            $('.q_item').hide()
            $('.step'+counter+'').show()
        }else {
            alert('Необходимо выбрать вариант ответа!')
        }
        checker()
    })
    $('.open_nav').click(function(){
        $('.topn_wrp').slideToggle(300)
    })
})
$(document).ready(function(){
    $('.pressing').click(function() {
        $(this).toggleClass('pressed')
        $(this).closest('form').find('button').toggleClass('noActive').prop('disabled', function(i, v) { return !v; });
    })
    $( 'a[href^="#"]' ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
    $('.pressing a').click(function() {
        event.preventDefault();
        event.stopPropagation();
        $('#politika').modal('toggle')
    })
    $('.item_slider').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dots:false,
    rewind:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    $('.add').click(function () {
        var max = $(this).closest('.plus_minus_wrp').find('input').attr("max")
		if (parseFloat($(this).closest('.plus_minus_wrp').find('input').val()) < parseFloat(max)) {
            
    	$(this).closest('.plus_minus_wrp').find('input').val(+$(this).closest('.plus_minus_wrp').find('input').val() + 1);
		}
});
$('.sub').click(function () {

    	if ($(this).closest('.plus_minus_wrp').find('input').val() > 1) $(this).closest('.plus_minus_wrp').find('input').val(+$(this).closest('.plus_minus_wrp').find('input').val() - 1);

});
    $('.list_all').click(function(){
        $('.hided').slideToggle(300)
        $(this).hide()
    })
    $('.filter_checks').each(function(){
        if($(this).find('label').length > 4) {
            var len = $(this).find('label').length - 4
            $(this).find('label').slice(-len).addClass("hided");
            $(this).append('<a href="" class="list_all_catalog">Развернуть</a>')
        }
    })
    $('.list_all_catalog').click(function(e){
        e.preventDefault()
        $(this).toggleClass('toggled')
        $(this).closest('.filter_item').find('.hided').fadeToggle(300)
        if($(this).hasClass('toggled')){
            $(this).text('Свернуть')
        }else {
            $(this).text('Развернуть')
        }
    })
    $('.open_filter').click(function(){
        $(this).toggleClass('slided_filt')
        if($(this).hasClass('slided_filt')){
            $(this).text('Свернуть фильтр')
        }else {
            $(this).text('Развернуть фильтр')
        }
        $('.filter_col').slideToggle(300)
    })
})
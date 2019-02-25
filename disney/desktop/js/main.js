(function($){
  $(function(){
    $('.disney-slick').slick({
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1
    });
    
    var sweetScroll = new SweetScroll({});
  });
})(jQuery);
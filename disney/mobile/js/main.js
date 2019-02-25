(function ($) {
  $(function () {
    $('.disney-slick').slick({
      infinite: true,
      dots: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
      }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
      }]
    });

    var sweetScroll = new SweetScroll({
      duration: 1000,
      easing: 'easeOutCubic'
    });
  });
})(jQuery);
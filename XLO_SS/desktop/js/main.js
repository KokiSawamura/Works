(function ($) {
  $(function () {

    var tab = {
      init: function () {
        this.setParameters();
        this.setDefaultHeight();
        this.$main.cbpContentSlider();

        this.$tab.on('click', function () {
          var THIS_HEIGHT = $($(this).attr('href')).outerHeight();

          $('.js-tab-content').css('height', THIS_HEIGHT);
        });
      },
      setParameters: function () {
        this.$main = $('#cbp-contentslider');
        this.$tab = $('.js-tab');
      },
      setDefaultHeight: function () {
        for (var i = 0, len = this.$tab.length; i < len; i++) {
          var $target = $(this.$tab.eq(i).attr('href'));

          $target.css('height', $target.outerHeight());
          
          if(i == 0) {
            $('.js-tab-content').css('height', $target.outerHeight());
          }
        };
      }
    };

    var sweetScroll = {
      init: function () {
        var scroller = new SweetScroll();
      }
    };

    tab.init();
    sweetScroll.init();
  });
})(jQuery);
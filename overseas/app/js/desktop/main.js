(function ($) {
  $(function () {

    var scrollTop = {
      init: function () {
        var self = this;

        this.setPrameters();
        this.setDefaultStyle();

        this.$scrollTop.on('click', function () {
          $('body,html').animate({
            scrollTop: 0
          }, this.SCROLL_SPEED, 'easeOutQuart');

          return false;
        });

        $(window).on('scroll', function () {
          if (!self.isRunning) {
            self.isRunning = true;

            window.requestAnimationFrame(function () {

              self.toggleButton($(this).scrollTop());

              self.isRunning = false;
            });
          }
        });
      },
      setPrameters: function () {
        this.$scrollTop = $('#scroll-top');
        this.SCROLL_SPEED = 1000;
        this.FADE_SPEED = 350;
        this.TOGGLE_POSITION = 2000; // 一貫性のために固定値とする
        this.isRunning = false;
      },
      setDefaultStyle: function () {
        var bodyPadding = parseInt($('body').css('padding-bottom')),
            scrollTopSpace = parseInt(this.$scrollTop.css('bottom'));

        $('body').css('padding-bottom', this.$scrollTop.outerHeight() + bodyPadding + scrollTopSpace * 2);

        this.toggleButton($(window).scrollTop());
      },
      toggleButton: function (scrollValue) {
        if (scrollValue > this.TOGGLE_POSITION) {
          this.$scrollTop.fadeIn(this.FADE_SPEED, 'easeOutCubic');
        } else {
          this.$scrollTop.fadeOut(this.FADE_SPEED, 'easeInCubic');
        }
      }
    }

    scrollTop.init();
  });
})(jQuery);

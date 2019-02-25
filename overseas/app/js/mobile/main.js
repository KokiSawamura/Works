(function ($) {
  $(function () {
    var scrollTop = {
      init: function () {
        var self = this;

        this.setParameters();
        this.setDefaultStyle();

        this.$scrollTop.on('click', function () {
          $('body,html').animate({
            scrollTop: 0
          }, this.SCROLL_SPEED, 'easeOutSine', function () {
            self.$scrollTop.fadeOut(this.FADE_SPEED, 'easeInCubic');
          });

          return false;
        });

        $(window).on({
          'scroll': function () {
            if (!self.isRunning) {
              self.isRunning = true;

              window.requestAnimationFrame(function () {
                var scrollTop = $(this).scrollTop();

                if (Math.abs(scrollTop - self.previousPosition) > 10) {
                  if (scrollTop > self.previousPosition) {
                    self.toggleButton('down');
                  } else {
                    self.toggleButton('up');
                  }
                }

                self.previousPosition = scrollTop;

                self.isRunning = false;
              });
            }
          }
        });
      },
      setParameters: function () {
        this.$scrollTop = $('.scroll-top');
        this.SCROLL_SPEED = 1000;
        this.FADE_SPEED = 250;
        this.isRunning = false;
        this.previousState;
        this.previousPosition;
      },
      setDefaultStyle: function () {
        this.toggleButton($(window).scrollTop());
      },
      toggleButton: function (state) {
        if (this.previousState !== state) {
          switch (state) {
            case 'up':
              this.$scrollTop.stop().fadeIn(this.FADE_SPEED, 'easeOutCubic');
              break;

            case 'down':
              this.$scrollTop.stop().fadeOut(this.FADE_SPEED, 'easeInCubic');
              break;
          }

          this.previousState = state;
        }
      }
    }

    var accordion = {
      init: function() {
        var self = this;

        this.setParameters();

        for(var i = 0, len = $('[data-toggle="accordion"]').length; i < len; i++) {
          var $trigger = $('[data-toggle="accordion"]').eq(i),
          $target = $($trigger.attr('data-target'));

          if($trigger.hasClass(this.COLLAPSED_CLASS_NAME)) {
            $trigger.addClass(this.COLLAPSED_CLASS_NAME);
            $target.addClass(this.COLLAPSED_CLASS_NAME).hide();
          } else {
            $trigger.addClass(this.EXPANDED_CLASS_NAME);
            $target.addClass(this.EXPANDED_CLASS_NAME);
          }
        }

        $('[data-toggle="accordion"]').on('click', function () {
          var state = 'collapsed';

          if($(this).hasClass(self.COLLAPSED_CLASS_NAME)) {
            state = 'collapsed';
          } else {
            state = 'expanded';
          }

          self.toggleClass(state, $(this), $($(this).attr('data-target')));
          self.toggleContent(state, $($(this).attr('data-target')));
        });
      },
      setParameters: function() {
        this.EXPANDED_CLASS_NAME = 'expanded';
        this.COLLAPSED_CLASS_NAME = 'collapsed';
      },
      toggleClass: function(state, $trigger, $target) {
        if(state == this.COLLAPSED_CLASS_NAME) {
          $trigger.addClass(this.EXPANDED_CLASS_NAME).removeClass(this.COLLAPSED_CLASS_NAME);
          $target.addClass(this.EXPANDED_CLASS_NAME).removeClass(this.COLLAPSED_CLASS_NAME);
        } else {
          $trigger.addClass(this.COLLAPSED_CLASS_NAME).removeClass(this.EXPANDED_CLASS_NAME);
          $target.addClass(this.COLLAPSED_CLASS_NAME).removeClass(this.EXPANDED_CLASS_NAME);
        }
      },
      toggleContent: function(state, $target) {
        if(state == this.COLLAPSED_CLASS_NAME) {
          $target.stop().slideDown();
        } else {
          $target.stop().slideUp();
        }
      }
    };

    scrollTop.init();
    accordion.init();
  });
})(jQuery);

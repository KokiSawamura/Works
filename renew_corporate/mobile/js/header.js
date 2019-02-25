(function ($) {
  'use strict';
  $(function () {
    'use strict';

    //　現在地のスタイルを変更
    var currentStyle = {
      init: function () {
        this.setParameters();
        this.applyStyle();
      },
      setParameters: function () {
        this.nav = $('#side-nav');
        this.pathname = location.pathname;
      },
      // location.pathnameと前方一致する直近の親階層にカレントクラスを付与
      // パラーメータ、ハッシュありなしは関与しない
      applyStyle: function () {
        var currentNav = {
          DOM: undefined,
          path: ''
        };

        this.nav.find('nav a').each(function (index) {
          var path = $(this).attr('href').split('#')[0].split('?')[0].replace(location.host, '').replace(/^https*:[\/]{2}/, '').replace('///', '');

          if (location.pathname.indexOf(path) === 0) { //前方一致
            if (currentNav.path.length < path.length) { //pathの文字数が多いほうが適切な配下とする
              currentNav = {
                DOM: $(this),
                path: path
              }
            }
          }
        });

        if (currentNav.DOM != undefined) {
          currentNav.DOM.addClass('side-nav-current').closest('dd').prev().addClass('js-nav-accordion-expanded');
        }
      }
    };

    // ナビの表示非表示
    var toggleNav = {
      init: function () {
        var self = this;

        this.setParameters();

        this.navToggle.on('click', function () {
          self.showContent();
        });

        // safariでoverflow:scrollのnavとそうでないmaskの共存で不具合がでるため、
        // maskを100m以上のtouchendが発生しないtouchstartはcloseする
        this.mask.on('click', function () {
          self.hideContnet();
        }).on('touchstart', function () {
          clearTimeout(self.timer);
          self.timer = setTimeout(function () {
            self.hideContnet();
          }, 100);
        }).on('touchend', function () {
          clearTimeout(self.timer);
        });

        this.close.on('click', function () {
          self.hideContnet();
        });
      },
      setParameters: function () {
        this.navToggle = $('.js-side-nav-toggle');
        this.nav = $('#side-nav');
        this.mask = $('.side-nav-mask');
        this.close = $('.side-nav-close');
        this.OPEN_CLASS_NAME = 'side-nav-drawer-open';
        this.DRAWER_VISIBLE_CLASS_NAME = 'side-nav-drawer-visible';
        this.MASK_VISIBLE_CLASS_NAME = 'side-nav-mask-visible';
        this.DISABLE_CLASS_NAME = 'side-nav-disable-scroll';
        this.timer;
      },
      showContent: function () {
        this.nav.addClass(this.OPEN_CLASS_NAME).addClass(this.DRAWER_VISIBLE_CLASS_NAME);
        $('html').addClass(this.DISABLE_CLASS_NAME);
        this.mask.addClass(this.MASK_VISIBLE_CLASS_NAME);
      },
      hideContnet: function () {
        this.nav.removeClass(this.OPEN_CLASS_NAME).delay(300).queue(function () {
          $(this).removeClass(this.DISABLE_CLASS_NAME);
        });
        $('html').removeClass(this.DISABLE_CLASS_NAME);
        this.mask.removeClass(this.MASK_VISIBLE_CLASS_NAME);
      }
    };

    // ナビ内のアコーディオン
    var accordion = {
      init: function () {
        var self = this;

        this.setParameters();
        this.setDefault();

        this.accordionToggle.on('click', function () {
          if ($(this).hasClass(self.EXPANDED_CLASS_NAME)) {
            self.slideUp($(this));
          } else {
            self.slideDown($(this));
          }
        });
      },
      setParameters: function () {
        this.accordionToggle = $('.js-nav-accordion-toggle');
        this.EXPANDED_CLASS_NAME = 'js-nav-accordion-expanded';
        this.COLLAPSED_CLASS_NAME = 'js-nav-accordion-collapsed';
      },
      setDefault: function () {
        for (var i = 0, len = this.accordionToggle.length; i < len; i++) {
          if (this.accordionToggle.eq(i).hasClass(this.EXPANDED_CLASS_NAME)) {
            this.slideDown(this.accordionToggle.eq(i));
          } else {
            this.slideUp(this.accordionToggle.eq(i));
          }
        }
      },
      slideDown: function ($toggleElement) {
        $toggleElement.next('dd').stop().slideDown();

        $toggleElement.removeClass(this.COLLAPSED_CLASS_NAME).addClass(this.EXPANDED_CLASS_NAME);
      },
      slideUp: function ($toggleElement) {
        $toggleElement.next('dd').stop().slideUp();

        $toggleElement.removeClass(this.EXPANDED_CLASS_NAME).addClass(this.COLLAPSED_CLASS_NAME);
      },
    };

    currentStyle.init();
    toggleNav.init();
    accordion.init();
  });
})(jQuery);
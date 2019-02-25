(function ($) {
  'use strict';
  $(function () {

    //　現在地のスタイルを変更
    var currentStyle = {
      init: function () {
        this.setParameters();
        this.applyStyle();
      },
      setParameters: function () {
        this.nav = $('#side-nav');
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

          if (location.pathname.indexOf(path) === 0 && currentNav.path.length < path.length) { //前方一致 and pathの文字数が多いほうが適切な配下とする
            currentNav = {
              DOM: $(this),
              path: path
            }
          }
        });

        // 現在地がトップ以外でも前方一致でトップになった場合に、トップがカレント表示されないよう値を初期化。
        if(currentNav.path === '/' && location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1) !== '/') {
          currentNav = {
            DOM: undefined,
            path: ''
          };
        }

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

    //　現在地のスタイルを変更 - ローカルナビ
    var currentStyleForLocalNav = {
      init: function () {
        this.setParameters();

        // アクティブクラスが存在しない場合のみ実行
        if($('.' + this.ACTIVE_CLASS_NAME).length === 0) {
          this.applyStyle();
        }
      },
      setParameters: function () {
        this.nav = $('#local-nav');
        this.ACTIVE_CLASS_NAME = 'local-nav-current';
      },
      // パラーメータ、ハッシュありなしは関与しない
      applyStyle: function () {
        var $currentNav;

        // .local-nav配下のaタグのhrefを検索
        this.nav.find('a').each(function (index) {
          // hrefからpathのみを抜粋
          var path = $(this).attr('href').split('#')[0].split('?')[0].replace(location.host, '').replace(/^https*:[\/]{2}/, '').replace('///', '');

          // 完全一致
          if (location.pathname === path) {
            $currentNav = $(this);
          }
        });

        if ($currentNav != undefined) {
          $currentNav.addClass(this.ACTIVE_CLASS_NAME);
        }
      }
    };

    // ナビの表示非表示 - ローカルナビ
    var toggleLocalNav = {
      init: function () {
        var self = this;

        this.setParameters();
        this.setDefault();
        this.resetDefault();

        this.$navToggle.on('click', function () {
          if ($(this).hasClass(self.EXPANDED_CLASS_NAME)) {
            self.hideContent($(this));
          } else {
            self.showContent($(this));
          }
        });

        // safariでoverflow:scrollのnavとそうでないmaskの共存で不具合がでるため、
        // maskを100m以上のtouchendが発生しないtouchstartはcloseする
        this.$mask.on('click', function () {
          self.hideContent(self.$navToggle);
        }).on('touchstart', function () {
          clearTimeout(self.timer);
          self.timer = setTimeout(function () {
            self.hideContent(self.$navToggle);
          }, 100);
        }).on('touchend', function () {
          clearTimeout(self.timer);
        });

        $(window).on('resize', function () {
          self.resetDefault();
        });
      },
      setParameters: function () {
        this.$navToggle = $('.js-local-nav-toggle');
        this.$fixedItem = $('.js-local-nav-fixed-item');
        this.$mask = $('.local-nav-mask');
        this.EXPANDED_CLASS_NAME = 'js-local-nav-expanded';
        this.COLLAPSED_CLASS_NAME = 'js-local-nav-collapsed';
        this.DRAWER_VISIBLE_CLASS_NAME = 'local-nav-drawer-visible';
        this.MASK_VISIBLE_CLASS_NAME = 'local-nav-mask-visible';
        this.DISABLE_CLASS_NAME = 'local-nav-disable-scroll';
        this.TOGGLE_SPEED = 250;
        this.timer;
      },
      setDefault: function () {
        for (var i = 0, len = this.$navToggle.length; i < len; i++) {
          if (this.$navToggle.eq(i).hasClass(this.EXPANDED_CLASS_NAME)) {
            this.showContent(this.$navToggle.eq(i));
          } else {
            this.hideContent(this.$navToggle.eq(i));
          }
        }
      },
      resetDefault: function () {
        // ローカルナビ内でスクロールできるように
        this.$navToggle.next('dd').css('max-height', $(window).outerHeight() - this.$fixedItem.outerHeight() - this.$navToggle.outerHeight());
      },
      showContent: function ($toggleElement) {
        $toggleElement.removeClass(this.COLLAPSED_CLASS_NAME).addClass(this.EXPANDED_CLASS_NAME).next('dd').stop().slideDown(this.TOGGLE_SPEED);
        $('html').addClass(this.DISABLE_CLASS_NAME);
        this.$mask.addClass(this.MASK_VISIBLE_CLASS_NAME);
      },
      hideContent: function ($toggleElement) {
        $toggleElement.removeClass(this.EXPANDED_CLASS_NAME).addClass(this.COLLAPSED_CLASS_NAME).next('dd').stop().slideUp(this.TOGGLE_SPEED);
        $('html').removeClass(this.DISABLE_CLASS_NAME);
        this.$mask.removeClass(this.MASK_VISIBLE_CLASS_NAME);
      }
    };

    currentStyle.init();
    toggleNav.init();
    accordion.init();
    currentStyleForLocalNav.init();
    toggleLocalNav.init();
  });
})(jQuery);

(function ($) {
  'use strict';
  $(function () {
    var dropdownMenu = {
      init: function () {
        var self  = this;
        this.setParameters();

        // pc tabletで同じソースが使用されるため、touchイベントを保持しているかで挙動を分岐
        if(this.hasTouchEvent) {
          // tabletの場合
          this.$dropdownMenuToggle.on('click', function () {
            if($(this).hasClass(self.ACTIVE_NAME)) {
              self.slideUp($(this));
            } else {
              self.slideDown($(this));
            }
          });
        } else {
          // pcの場合
          this.$dropdownMenuToggle.hover(
            function () {
              var $toggleContent = $(this);

              // dropdownで出現したコンテンツへのマウス移動の導線に、dropdownが通過しても良いように
              clearTimeout(self.timer);
              self.timer = setTimeout(function(){
                // 上記の通過か、意図したマウスオンか判断するため
                if(self.$prev != undefined && self.$prev[0] != $toggleContent[0]) {
                  self.slideUp();
                }

                self.$prev = $toggleContent;

                self.slideDown($toggleContent);
              }, 200);
            },
            function(){
              var $toggleContent = $(this);

              // dropdownで出現したコンテンツへのマウス移動の導線に、dropdownが通過しても良いように
              clearTimeout(self.timer);
              self.timer = setTimeout(function(){
                self.slideUp($toggleContent);
              }, 200);
            });
        };
      },
      setParameters: function () {
        this.timer;
        this.$prev               = undefined;
        this.$dropdownMenuToggle = $('.js-dropdown-menu-toggle');
        this.ACTIVE_NAME         = 'js-dropdown-menu-active';
        this.SLIDE_SPEED         = 250;
        this.hasTouchEvent       = ('ontouchstart' in window);
      },
      slideDown: function ($toggleContent) {
        $toggleContent.addClass(this.ACTIVE_NAME).children('dd').slideDown(this.SLIDE_SPEED);
      },
      slideUp: function ($toggleContent) {
        var $targetContent = this.hasTouchEvent ? $toggleContent : this.$dropdownMenuToggle;
        $targetContent.removeClass(this.ACTIVE_NAME).children('dd').slideUp(this.SLIDE_SPEED);
      },
    };

    //　現在地のスタイルを変更
    var currentStyleForLocalNav = {
      init: function () {
        this.setParameters();

        // アクティブクラスが存在しない場合のみ実行
        if($('.' + this.ACTIVE_CLASS_NAME).length === 0) {
          this.applyStyle();
        }
      },
      setParameters: function () {
        this.nav = $('.local-nav');
        this.ACTIVE_CLASS_NAME = 'ln-active';
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

    dropdownMenu.init();

    // for localnavi
    currentStyleForLocalNav.init();
  });
})(jQuery);

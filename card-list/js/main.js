(function ($) {
  'use strict';
  $(function () {

    // 比較モーダル
    var compareModal = {
      init: function () {
        var self = this;
        this.setParameters();

        this.cardSelectBtn.on('change', function () {
          self.limitCardSelectBtn();
          self.setSelectedCardToArray($(this));
          self.setSelectedCardToDom();
        });

        this.listResetTrigger.on('click', function () {
          switch ($(this).data('number')) {
            case 1:
              self.resetSelectedItem($(this).parents().attr('data-firstlist'));
              break;
            case 2:
              self.resetSelectedItem($(this).parents().attr('data-secondlist'));
              break;
          }
          return false;
        });

        this.modalTrigger.magnificPopup({
          type: 'inline',
          closeMarkup: '<div class="mfp-close-button js-mfp-close"><i class="rex-icon close"></i></div>',
          removalDelay: 200,
          mainClass: 'mfp-fade'
        });
        
        for(var i = 0, len = this.cardSelectBtn.length; i < len; i++) {
          if(this.cardSelectBtn.eq(i).prop('checked')) {
            this.cardSelectBtn.eq(i).prop('checked', true).change();
          }
        }
      },
      setParameters: function () {
        this.MAXCOUNT = 2;
        this.cardSelectBtn = $('.js-compare-modal-select');
        this.modalTrigger = $('.js-compare-modal-trigger');
        this.listResetTrigger = $('.js-list-reset');
        this.selectedCardArray = [];
      },
      // Xで非選択
      resetSelectedItem: function (value) {
        if(value != '') {
          this.cardSelectBtn.filter('[value=' + value + ']').prop('checked', false).change();
        }
      },

      // 選択可能なカード数を制限
      limitCardSelectBtn: function () {
        if (this.cardSelectBtn.filter(':checked').length >= this.MAXCOUNT) {
          this.cardSelectBtn.not(':checked').prop('disabled', true);
          this.applyAvailableStyle(true);
        } else {
          // ソートの対象外のdisabledを解除しないように
          $('.js-sort').children().not('.js-sort-disabled').find(this.cardSelectBtn).prop('disabled', false);
          this.applyAvailableStyle(false);
        }
      },

      // モーダル実行ボタンの利用可否を変更
      applyAvailableStyle: function (status) {
        if (status) {
          this.modalTrigger.removeClass('disabled');
        } else {
          this.modalTrigger.addClass('disabled');
        }
      },
      setSelectedCardToArray: function ($element) {
        var self = this;

        // 選択された順番を保持する
        if ($element.prop('checked')) {
          this.selectedCardArray.push($element.val());
        } else if (!$element.prop('checked')) {
          this.selectedCardArray.splice(this.selectedCardArray.indexOf($element.val()), 1);
        }
      },

      // 選択されたカードをdata属性としてHTMLにセット
      setSelectedCardToDom: function () {
        if ($.isEmptyObject(this.selectedCardArray)) {
          // セットされた値をリセット
          $('.js-compare-modal').attr('data-firstcard', '');
          $('[data-firstlist]').attr('data-firstlist', '');
          $('.js-compare-modal').attr('data-secondcard', '');
          $('[data-secondlist]').attr('data-secondlist', '');
        } else {
          $.each(this.selectedCardArray, function (i, value) {
            switch (i) {
              case 0:
                $('.js-compare-modal').attr('data-firstcard', value);
                $('[data-firstlist]').attr('data-firstlist', value);
                // セットされた値をリセット
                $('.js-compare-modal').attr('data-secondcard', '');
                $('[data-secondlist]').attr('data-secondlist', '');
                break;
              case 1:
                $('.js-compare-modal').attr('data-secondcard', value);
                $('[data-secondlist]').attr('data-secondlist', value);
                break;
            }
          });
        }
      }
    };

    // デザイン一覧用モーダル
    var designModal = {
      init: function () {
        $('.js-design-preview').magnificPopup({
          type: 'inline',
          closeMarkup: '<div class="mfp-close-button js-mfp-close"><i class="rex-icon close"></i></div>',
          removalDelay: 200,
          mainClass: 'mfp-fade',
          callbacks: {
            open: function () {
              var $slickElement = this.content.find($('.slick-design-silver'));
              if ($slickElement[0] && !$slickElement.hasClass('slick-initialized')) {
                $slickElement.slick({
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: true,
                  centerPadding: '60px'
                });
              }
            }
          }
        });
      }
    };

    // デザイン一覧用スライダー
    var slick = {
      init: function () {
        $('.slick-design-all').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
          ]
        });
      }
    };

    // モーダル閉じる用
    var closeModal = {
      init: function () {
        $(document).on('click', '.js-mfp-close', function () {
          $.magnificPopup.close();
        });
      }
    };

    // topへ戻るのスムーススクロール
    var smoothscroll = {
      init: function () {
        var scroller = new SweetScroll({
          easing: 'easeInOutCubic'
        });
      }
    };

    // topへ戻るボタンの表示非表示
    var showAndHide = {
      init: function () {
        $('.js-page-top').showAndHide({
          startPosition: $('.js-page-top-start').offset().top,
          easing: 'linear'
        });
      }
    };

    // スティッキーヘッダー
    var Sticky = new hcSticky('.card-list-header', {
      stickTo: '.js-card-list-sticky-wrap'
    });

    // sort.jsの実行
    var sort = {
      init: function () {
        this.setParameters();
        this.reset();
        this.setSort();
      },
      setParameters: function () {
        this.MAXCOUNT = 2;
        this.cardSelectBtn = $('.js-compare-modal-select');
        this.items = $('.js-sort').children();
      },
      reset: function () {
        $('.js-sort-button').prop('checked', false).change();
      },
      setSort: function () {
        var self = this;

        $('.js-sort').sort({
          sortButton: $('.js-sort-button'), //required
          disabledClassName: 'js-sort-disabled', //required
          sortOption: [['pink', 'silver', 'vissel', 'bank', 'academy'], ['pink'], ['pink', 'silver', 'amc'], ['gold', 'premium'], ['gold', 'premium'], ['academy'], ['bank'], ['amc']], //required,
          data: 'card',
          resizeTime: 200, //ミリ秒
          speed: 500, //ミリ秒
          easing: 'swing',
          defaultAnimation: true,
          callbacks: {
            beforeAnimation: function () {
              if(self.cardSelectBtn.filter(':checked').length < self.MAXCOUNT) {
                for (var i = 0, len = self.items.length; i < len; i++) {
                  var $element = self.items.eq(i);

                  if ($element.hasClass('js-sort-disabled')) {
                    $element.find('input').prop({
                      'disabled': true
                    });
                  } else {
                    $element.find('input').prop('disabled', false);
                  }
                }
              }
            },
          }
        });
      }
    };

    // フローティング
    var floating = {
      init: function () {
        var self = this;

        this.setParameters();

        $(window).on('scroll', function() {
          self.toggleClass($(this).scrollTop());
        });

        $(window).on('resize', function () {
          self.setParameters();
          self.toggleClass($(this).scrollTop());
        });
      },
      setParameters: function () {
        this.targetElement = $('.js-showAndHide');
        this.startPosition = $('.js-showAndHide-start').offset().top;
        this.endPosition = $('.js-showAndHide-end').offset().top + $('.js-showAndHide-end').outerHeight();
        this.ACTIVE_CLASS_NAME = 'active';
        this.WINDOW_HEIGHT = $(window).outerHeight();
      },
      toggleClass: function (value) {
        if(value + (this.WINDOW_HEIGHT / 2) > this.startPosition && value < this.endPosition) {
          this.targetElement.addClass(this.ACTIVE_CLASS_NAME);
        } else {
          this.targetElement.removeClass(this.ACTIVE_CLASS_NAME);
        }
      }
    };
    
    // 絞込コンテンツのドロップダウン
    var dropdown = {
      init: function () {
        var self = this;
        
        this.setParameters();
        
        this.$toggle.on('click', function () {
          self.toggleClass($(this).closest(self.$wrapper));
          self.toggleContent($(this).closest(self.$wrapper));
        });
        
        for(var i = 0, len = this.$wrapper.length; i < len; i++) {
          if(!this.$wrapper.eq(i).hasClass(this.collapsedClassName) && !this.$wrapper.eq(i).hasClass(this.expandedClassName)) {
            this.$wrapper.eq(i).addClass(this.collapsedClassName);
          }
          this.toggleContent(this.$wrapper.eq(i));
        }
      },
      setParameters: function () {
        this.$wrapper = $('.js-dropdown-wrapper');
        this.$content = $('.js-dropdown-content');
        this.$toggle = $('.js-dropdown-toggle');
        this.collapsedClassName = 'collapsed';
        this.expandedClassName = 'expanded';
      },
      toggleClass: function ($el) {
        if($el.hasClass(this.collapsedClassName)) {
          $el.removeClass(this.collapsedClassName);
          $el.addClass(this.expandedClassName);
        } else {
          $el.removeClass(this.expandedClassName);
          $el.addClass(this.collapsedClassName);
        }
      },
      toggleContent: function ($el) {
        if($el.hasClass(this.collapsedClassName)) {
          $el.find(this.$content).stop().slideUp(function() {
            Sticky.reinit();
            floating.setParameters();
            floating.toggleClass($(window).scrollTop());
          });
        } else {
          $el.find(this.$content).stop().slideDown(function() {
            Sticky.reinit();
            floating.setParameters();
            floating.toggleClass($(window).scrollTop());
          });
        }
      }
    };

    compareModal.init();
    designModal.init();
    slick.init();
    closeModal.init();
    smoothscroll.init();
    showAndHide.init();
    sort.init();
    floating.init();
    dropdown.init();
  });
})(jQuery);
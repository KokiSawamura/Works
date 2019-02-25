(function ($) {
  $(function () {
    var tab = {
      init: function () {
        var self = this;
        this.setPrameters();
        this.setDefault();
        this.animateContent();
        
        this.$input.on('change', function () {
          self.toggleActiveClass($(this), $(this).val());
          self.animateContent();
        });
      },
      setPrameters: function () {
        this.$tab = $('.js-tab');
        this.$content = $('[data-tab]');
        this.$input = this.$tab.find('input');
        this.ACTIVE_CLASS = 'active';
      },
      setDefault: function () {
        // for content
        $('[data-tab]').removeClass(this.ACTIVE_CLASS);
        
        for(var i = 0, len = this.$tab.length; i < len; i++) {
          var $target = this.$tab.eq(i);
          
          if($target.find('input').prop('checked')) {
            // for tab
            $target.addClass(this.ACTIVE_CLASS);
            
            // for content
            $('[data-tab="' + $target.find('input').val() +'"]').addClass(this.ACTIVE_CLASS);
          } else {
            
            //for tab
            $target.removeClass(this.ACTIVE_CLASS);
          };
        }
      },
      toggleActiveClass: function ($el, value) {
        // for tab
        this.$tab.removeClass(this.ACTIVE_CLASS);
        $el.closest(this.$tab).addClass(this.ACTIVE_CLASS);
        
        // for content
        this.$content.removeClass(this.ACTIVE_CLASS);
        $('[data-tab="' + value +'"]').addClass(this.ACTIVE_CLASS);
      },
      animateContent: function () {
        for(var i = 0, len = this.$content.length; i < len; i++) {
          var $target = this.$content.eq(i);
          
          if($target.hasClass(this.ACTIVE_CLASS)) {
            $target.fadeIn('swing');
          } else {
            $target.fadeOut('swing');
          }
        }
      }
    };
    
    tab.init();
  });
})(jQuery);
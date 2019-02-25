$(function () {
  'use strict';
  var dropdown = {
    init: function () {
      var self = this;
      
      this.DELAY_SPEED = 300;
      this.FADE_SPEED  = 200;
      
      $('.js-dropdown').hover(function(){
        $(this).find('.js-dropdown-menu').stop(true, true).css({
          display: 'block',
          opacity: 0
        }).animate({
          opacity: 1
        }, self.FADE_SPEED);
      }, function(){
        $(this).find('.js-dropdown-menu').stop(true, true).animate({
          opacity: 0
        }, self.FADE_SPEED, function(){
          $(this).css('display', 'none');
        })
      });
    }
  };
  dropdown.init();
});
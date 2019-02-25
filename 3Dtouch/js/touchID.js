(function($){
$(function(){
    $(window).load(function () {
        var $main = $('.touchMain');
        if(Modernizr.csstransitions && Modernizr.csstransforms && Modernizr.cssanimations) {
            var TIME = $main.data('time');
            setTimeout(function(){
                $main.addClass('touchMain--start');
            }, TIME);
        }
    });

    var $navi = $('.navi-wrapper'),
        naviH = $navi.height(),
        naviOffset = $navi.offset().top;

    $(window).scroll(function() {
        if ($(this).scrollTop() > naviOffset + naviH) {
            $navi.css('height', naviH).addClass('isFixed');
            $navi;
        } else if ($(this).scrollTop() < naviOffset) {
            $navi.css('height','').removeClass('isFixed');
        }
    });
});
})(jQuery);

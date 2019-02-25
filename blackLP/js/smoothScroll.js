(function($){
$(function(){
    var $scrollTrigger = $('.js-smoothScroll');
    $scrollTrigger.on('click',function(){
        smoothScroll($(this).attr("href"),500);
        return false;
    });
    function smoothScroll(href, speed) {
        $target = $(href == "#" || href == "" ? 'html' : href), // 移動先を取得
        $position = $target.offset().top; // 移動先を数値で取得

        $('html,body').animate({
            scrollTop: $position
        }, speed);
    }
});
})(jQuery);
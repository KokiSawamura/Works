(function($){
$(function(){
    var $filterContent = $('.js-filterContent'),
    $tag = $('.js-tag'),
    $selectVal = undefined,
    $selectClass = undefined,
    SPEED = 300;

    $('[name=filter]').change(function() {
        $selectVal = $(this).val();
        $selectClass = $('.js-tag--' + $selectVal);
        runFunc();
    });

    function runFunc(){
        if ($selectClass.length) {
            fadeInOut($selectClass);
        } else {
            fadeInOut($('.js-tag--none'));
        }
    }

    function fadeInOut(displayContent) {
        $tag.stop().fadeOut(SPEED);
        $filterContent.stop().animate({
                height: sumContentHeight(displayContent)
        }, SPEED, function(){
            displayContent.stop().fadeIn(SPEED);
        });
    }

    function sumContentHeight(displayContent) {
        var sum = 0;
        for(var i = 0, len = displayContent.length; i < len; i++) {
            sum += displayContent.eq(i).outerHeight(true);
        }
        return sum;
    }
});
})(jQuery);
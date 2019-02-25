(function($){
$(function(){
    var $filterContent = $('.js-filterContent'),
    $tag = $('.js-tag'),
    $this = undefined,
    $clickedTag = undefined,
    $clickedClass = undefined,
    presetBodyHeight = 0,
    presetContentHeight = 0,
    initFlag = true,
    SPEED = 300;

    /**
     * 初期表示されるものは.js-filter--currentクラスで判別。フィルタリング
     */
    preFunc();
    function preFunc() {
        presetData();
        runFunc();
        initFlag = false;
    }

    $('.js-filterTag').on('click', function(){
        $this = $(this);

        controlClass();

        presetData();

        /**
         * フィルタリングによりbodyがwindow以下の高さになる場合、上部にスムーススクロール
         */
        if ($(window).scrollTop() && $(window).height() > presetBodyHeight - presetContentHeight + sumContentHeight($clickedClass)) {
            smoothScroll(SPEED);
        } else {
            runFunc();
        }
        return false;
    });

    function controlClass() {
        $('.js-filterTag--current').removeClass('js-filterTag--current');
        $this.addClass('js-filterTag--current');
    }

    function presetData() {
        presetBodyHeight = $('body').outerHeight(true);
        presetContentHeight = $('.js-filterContent').height();
        $clickedTag = $('.js-filterTag--current').attr('href');
        $clickedClass = $('.js-tag--' + $clickedTag.slice(1));
    }

    function smoothScroll(SPEED) {
        $('html,body').animate({
            scrollTop: 0
        }, SPEED, function(){
            runFunc();
        });
    }

    function runFunc(){
        if ($clickedClass.length) {
            fadeInOut($clickedClass);
        } else {
            fadeInOut($('.js-tag--none'));
        }
    }

    function fadeInOut(displayContent) {
        if (initFlag) {
            $tag.not($clickedClass).hide();
        } else {
            $tag.stop().fadeOut(SPEED);
            $filterContent.stop().animate({
                    height: sumContentHeight(displayContent)
            }, SPEED, function(){
                displayContent.stop().fadeIn(SPEED);
            });
        }
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
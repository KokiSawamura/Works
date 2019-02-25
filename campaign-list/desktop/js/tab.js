(function($){
$(function(){
    var  $this = undefined,
    $tabBtn = $('.js-tabBtn'),
    $tabContentBlock = $('.tab-content-block'),
    flag = true,
    $openTab = undefined,
    SPEED = 2000;

    $tabBtn.on('click', function(){
        if (!$(this).closest('.tabBtn').hasClass('tabBtn--current') && flag) {
            flag = false;
            $this = $(this);
            $openTab = $($this.attr('href'));

            fadeInOut();
            controlTabClass();
        }
        return false;
    });

    function fadeInOut() {
        controlContentClass();
        flag = true;
    }

    function controlContentClass() {
        $('.tab-content--current').removeClass('tab-content--current');
        $openTab.addClass('tab-content--current');
    }

    function controlTabClass() {
        $('.tabBtn--current').removeClass('tabBtn--current');
        $this.closest('.tabBtn').addClass('tabBtn--current');
    }
});
})(jQuery);
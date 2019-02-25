(function($){
$(function(){
    var  $this = undefined,
    $tabBtn = $('.js-tabBtn'),
    $tabContentBlock = $('.tab-content-block'),
    flag = true,
    $openTab = undefined;

    $tabBtn.on('click', function(){
        if (!$(this).closest('.tabBtn').hasClass('tabBtn--current') && flag) {
            flag = false;
            $this = $(this);
            $openTab = $($this.attr('href'));

            controlContentClass();
            controlTabClass();
        }
        return false;
    });

    function controlContentClass() {
        $('.tab-content--current').removeClass('tab-content--current');
        $openTab.addClass('tab-content--current');
        flag = true;
    }

    function controlTabClass() {
        $('.tabBtn--current').removeClass('tabBtn--current');
        $this.closest('.tabBtn').addClass('tabBtn--current');
    }
});
})(jQuery);
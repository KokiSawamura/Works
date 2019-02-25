(function($){
$(function(){
    var $tabNav = $('.js-tab-nav'),
    $tabCurrent = $('.js-tab--current'),
    $tabContent = $('.js-tab-content'),
    tabCurrentIndex = $tabNav.children('li').index($tabCurrent),
    netContentH = $('body').outerHeight(true) - $('.js-tab-content--current').outerHeight(true),
    $self = undefined;

    toggleContentClass();

    $tabNav.children('li').on('click', function(){
        tabCurrentIndex = $tabNav.children('li').index($(this));
        $self = $(this);
        smoothScroll();
        return false;
    });

    function toggleContentClass() {
        $tabContent.removeClass('js-tab-content--current');
        $tabContent.eq(tabCurrentIndex).addClass('js-tab-content--current');
    }

    function toggleNavClass() {
        $tabNav.children('li').removeClass('js-tab--current');
        $self.addClass('js-tab--current');
    }

    function smoothScroll() {
        if ($(window).scrollTop() && $(window).height() > netContentH + $tabContent.eq(tabCurrentIndex).outerHeight(true)) {
            $('html,body').animate({
                scrollTop: 0
            }, 500, function(){
                toggleContentClass();
                toggleNavClass();
            });
        } else {
            toggleContentClass();
            toggleNavClass();
        }
    }
});
})(jQuery);
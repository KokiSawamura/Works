(function($){
$(function(){
    var $topVisual = $('.top-visual'),
    wH = $(window).height(),
    scrollValue = undefined,
    resizeTimerFlag = undefined;

    $(window).on('resize', function() {
        if (resizeTimerFlag) {
            clearTimeout(resizeTimerFlag);
        }
      
        resizeTimerFlag = setTimeout(function() {
            if (Modernizr.svg) {
                wH = $(window).height();
                navPosition = $topVisual.offset().top + wH - fixedNavH;
                resizeTopvisual();
                setPositionData();
            }
        }, 200);
    });

    $(window).scroll(function() {
        scrollValue = $(this).scrollTop();
        stickUpNav();
        addCurNav();
        controlCardApply();
    });

    /* resize top-visual */
    resizeTopvisual();
    function resizeTopvisual() {
        $topVisual.css('height', wH);
    }

    /* smooth scroll */
    var SPEED = 500,
    navH = $('#nav').outerHeight();

    $('.js-smooth-scroll-btn').on('click', function(){
        var href = $(this).attr('href'),
        $target = $(href == "#" || href == "" ? 'html' : href);

        $('body,html').animate({scrollTop: Math.ceil($target.offset().top) - navH}, SPEED);

        return false;
    });

    /* stick up navigation */
    var $fixedNav = $('.js-stickUpNav'),
    fixedNavH = $fixedNav.outerHeight(),
    navBotPosition = $topVisual.offset().top + wH,
    navTopPosition = navBotPosition - fixedNavH,
    fixFlag = true,
    unfixFlag = true;

    $fixedNav.css({
        bottom: -1 * fixedNavH,
        height: fixedNavH
    });

    function stickUpNav() {
        if (scrollValue > navBotPosition && fixFlag && $('.loader').is(':hidden')) {
            unfixFlag = true;
            fixFlag = false;

            $fixedNav.addClass('nav-wrap--fixed').css({
                position: 'fixed',
                top: -1 * fixedNavH,
                bottom: ''
            });
            $fixedNav.animate({top: 0, opacity: 1}, SPEED);

        } else if (scrollValue < navTopPosition && unfixFlag && $('.loader').is(':hidden')) {
            fixFlag = true;
            unfixFlag = false;

            if ($fixedNav.hasClass('nav-wrap--init') || $fixedNav.hasClass('nav-wrap--fixed')) {
                $fixedNav.stop().css({
                    opacity: 1,
                    position: 'absolute',
                    bottom: 0,
                    top: ''
                });
            }
        }
    }


    /* add current navi */
    var navListPosition = [],
    $targetLink = $(".js-nav a[href ^= '#']"),
    $navCurrent = $('.nav-list--current'),
    $navDots = $('.js-nav_dots'),
    $navDotsW = $navDots.width(),
    currentNum = 0;

    animateNav($navCurrent.position().left, $navCurrent.width());

    $('.js-nav_list').find('a').on('click', function(){
        $targetLink.removeClass('nav-list--current');
        $(this).addClass('nav-list--current');
    });

    setPositionData();
    function setPositionData() {
        for (var i = 0, len = $targetLink.length; i < len; i++) {
            var $target = $($targetLink.eq(i).attr('href'));
            navListPosition[i] = [Math.ceil($target.offset().top) - navH, Math.ceil($target.offset().top) - navH + $target.outerHeight()];
        }
    }

    function addCurNav() {
        for (var j = 0, len = $targetLink.length; j < len; j++) {
            if (scrollValue >= navListPosition[j][0] && scrollValue <= navListPosition[j][1] && currentNum != j) {
                currentNum = j;
                $navCurrent = $targetLink.eq(j);
                $targetLink.removeClass('nav-list--current');
                $navCurrent.addClass('nav-list--current');

                animateNav($navCurrent.position().left, $navCurrent.width());
            }
        }
    }

    function animateNav(positionLeft, w) {
        $navDots.stop().animate({opacity:0},function(){
            $(this).css('left', positionLeft + (w / 2) - ($navDotsW / 2)).animate({opacity:1});
        });
    }

    /* controlCardApply */
    var $applyBtn = $('.apply-btn');
    function controlCardApply() {
        if ($topVisual.offset().top + wH < scrollValue && $('#card-apply').offset().top > scrollValue + wH) {
            $applyBtn.fadeIn();
        } else {
            $applyBtn.fadeOut();
        }
    }
});
})(jQuery);
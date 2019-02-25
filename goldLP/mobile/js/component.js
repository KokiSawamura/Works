(function($){
$(function(){
    var agent = navigator.userAgent,
    android4x = undefined,
    $loader = $('.loader'),
    $applyBlock = $('.apply-block'),
    $header = $('#header'),
    $topVisual = $('.top-visual'),
    $footer = $('#footer01'),
    hH = $header.outerHeight(true),
    wH = $(window).height(),
    applyBlockH = $applyBlock.height(),
    presentDeg = window.orientation,
    scrollValue = undefined,
    controlLoaderFlag = true,
    showFlag = undefined;

    var startTime = new Date();

    if (agent.search(/Android/) != -1) {
        detectAndroid4x();
        setWindowH();
        $(window).on('resize', function() {
            setWindowH();
            func();
        });
    } else {
        $(window).on('orientationchange', function() {
            wH = $(window).height();
            func();
        });
    }

    $(window).load(function(){
        startPosition();
        loader();
    }).on({
        'touchstart': function() {
            this.touchYinit = event.changedTouches[0].pageY;
        },
        'touchend': function() {
            if (!showFlag && this.touchYinit - event.changedTouches[0].pageY < 0 && scrollValue + wH - applyBlockH > $topVisual.offset().top + wH && scrollValue + screen.height < $footer.offset().top) {
                $applyBlock.delay(500).fadeIn();
                showFlag = true;
            } else if (showFlag && $applyBlock.is(':visible') && this.touchYinit - event.changedTouches[0].pageY > 0 && agent.search(/Android/) == -1) {
                $applyBlock.delay(500).fadeOut();
                showFlag = false;
            }
        }
    }).scroll(function(){
        scrollValue = $(this).scrollTop();
        if (showFlag && (scrollValue + wH - applyBlockH < $topVisual.offset().top + wH || scrollValue + screen.height > $footer.offset().top)) {
            showFlag = false;
            $applyBlock.delay(500).fadeOut();
        }
    });

    $('.js-smooth-scroll-btn').on('click', function(){
        var href = $(this).attr('href'),
        $target = $(href === "#" || href === "" ? 'html' : href);

        $('body,html').animate({scrollTop: $target.offset().top}, 500);

        return false;
    });

    setTimeout(function(){
        if (controlLoaderFlag) {
            startAnimation();
        }
    }, 10000);

    function detectAndroid4x() {
        if (/Android/.test(agent) && /Linux; U;/.test(agent) && !/Chrome/.test(agent)) {
            android4x = true;
        } else {
            android4x = false;
        }
    }

    function setWindowH() {
        if (android4x) {
            wH =  screen.height / window.devicePixelRatio - window.screenTop;
        } else {
            wH = screen.height;
        }
    }

    function func() {
        detectOrientation();
        if (presentDeg != window.orientation) {
            resizeTop();
            presentDeg = window.orientation;
        }
    }

    detectOrientation();
    function detectOrientation() {
        var deg = window.orientation;
        if (Math.abs(deg) == 90) {
            $topVisual.addClass('top-visual--horizontal');
        } else {
            $topVisual.removeClass('top-visual--horizontal');
        }
    }

    startPosition();
    /* reposition scroll */
    function startPosition() {
        $('body, html').animate({scrollTop: hH});
    }

    /* loader */
    function loader(){
        var timeDiff = new Date() -startTime;
        if (timeDiff > 2000) {
            startAnimation();
        } else {
            setTimeout(function(){
                startAnimation();
            }, 2000 - timeDiff);
        }
    }

    resizeTop();
    /* resize and reposition */
    function resizeTop() {
        $topVisual.css('height', wH);
        $loader.css('height', wH);
    }

    function startAnimation() {
        controlLoaderFlag = false;

        $loader.fadeOut(function(){
            $(window).off('.noScroll');
            if (android4x) {
                $('.svg-wrap').css('opacity', '1');
                displayContent();
            } else {
                $('.svg-wrap').animate({opacity: 1}, 500);
                new Vivus('svg_card', {type: 'scenario-sync', duration: 25, start: 'autostart'}, function(){
                    displayContent();
                });
            }
        });
    }

    function displayContent() {
        var SPEED = 600;

        if (android4x) {
            $topVisual.addClass('isAnimation');
        } else {
            $('#svg_card').animate({opacity: 0}, SPEED, function(){
                $topVisual.addClass('isAnimation');
            });
        }
    }

    /* no scroll */
    noScroll();
    function noScroll() {
        $(window).on('touchmove.noScroll', function(e) {
            e.preventDefault();
        });
    }
});
})(jQuery);
(function($){
$(function(){
    var startTime = undefined,
    controlLoaderFlag = true;

    if (Modernizr.svg) {
        startTime = new Date();

        loader();

        setTimeout(function(){
            if (controlLoaderFlag) {
                relocation();
            }
        }, 10000); //ローダーのタイムアウト時間
    }

    $(window).load(function(){
        if (Modernizr.svg && controlLoaderFlag) {
            relocation();
        }
    });

    /* loader */
    function loader() {
        $('.loader').css({
            height: $(window).height()
        });
    }

    function relocation() {
        var oneTimeFlag = true;

        controlLoaderFlag = false;

        $('html,body').animate({scrollTop:Math.ceil($('.scroll-top').offset().top)}, function(){
            var timeDiff =  new Date() - startTime;
            if (oneTimeFlag && timeDiff > 2000) {
                funcSet();
            } else if (oneTimeFlag) {
                setTimeout(funcSet, 2000 - timeDiff);
            }
            oneTimeFlag = false;
        },0);
    }

    var funcSet = function() {
        $('.top-visual').addClass('isAnimation');
        /* loader */
        $('.loader').fadeOut(function(){
            $('.card-block').show();
            var svgTypo = new Vivus('svg-typography', {type: 'oneByOne', duration: 240, start: 'autostart'}, function(){
                typography();
            }),
            svgCard = new Vivus('svg-card', {type: 'scenario-sync', duration: 35, start: 'autostart'}, function(){
                cardCallback();
            });
        });
    }

    var $svgTypography = $('.svg-typography-wrap'),
    $svgCard = $('.svg-card-wrap'),
    $cardImg = $('.card-img'),
    $cardImgBlock = $('.card-img-block'),
    $cardApply = $('.card-apply');

    function typography() {
        $svgTypography.delay(200).fadeOut(500);
    }

    function cardCallback() {
        $svgCard.fadeOut(500, function() {
            $cardImg.animate({'opacity': 1}, 500, cardBlockCallback);
        });
    }

    var cardBlockCallback = function() {
        $cardImgBlock.animate({'left': 0, 'margin-left': 0}, 700, textCallback);
    }

    var textCallback = function() {
        var $cardTxt = $('.card-txt'),
        $bgImg = $('.top-visual_img-wrap'),
        $cardTxtLen = $cardTxt.length,
        $nav = $('#nav'),
        i = 0,
        j = 0,
        INTERVALTIME = 3000,
        DELAY = 2000;

        animateTxt();
        var animateTxtInterval = setInterval(animateTxt,3000);

        detectAnimation();
        var animateBgInterval = setInterval(detectAnimation,INTERVALTIME);

        $cardApply.animate({'opacity': 1}, 500);
        
        if (!$nav.hasClass('nav-wrap--fixed')) {
            $nav.addClass('nav-wrap--init').css('bottom', -1 * $nav.outerHeight()).animate({bottom: 0, opacity: 1}, 500);
        }

        function animateTxt() {
            if(i >= $cardTxtLen - 1) {
                $cardTxt.eq(i).fadeIn(500);
                clearInterval(animateTxtInterval);
            } else {
                $cardTxt.eq(i).fadeIn(500, function(){
                    $(this).delay(DELAY).fadeOut(500);
                });
            }
            i++;
        }

        function detectAnimation() {
            switch (j) {
                case j === 0:
                    animateBg(500, 1000);
                    INTERVALTIME = INTERVALTIME - 500;
                    break;

                case j >= $cardTxtLen - 2:
                    animateBg(1000, 1000);
                    INTERVALTIME = INTERVALTIME + 500;
                    break;

                case j >= $cardTxtLen - 1:
                    animateBg(1000, 500);
                    clearInterval(animateBgInterval);
                    break;

                default:
                    animateBg(1000, 1000);
                    INTERVALTIME = 3000;
                    break;
            }
            j++;
        }

        function animateBg(s1, s2) {
            $bgImg.eq(j).animate({'opacity': 1}, s1, function() {
                $(this).delay(DELAY).animate({'opacity': 0}, s2);
            });
        }
    }
});
})(jQuery);
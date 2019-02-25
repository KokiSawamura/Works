(function($){
$(function(){
    var $header = $('#header'),
    $topVisual = $('.top-visual'),
    $wrapper = $('.wrapper'),
    hH = $header.outerHeight(true),
    wH = $(window).height();

    /* resize and reposition */
    resizeTop();
    function resizeTop() {
        $topVisual.css({
            'height': wH + hH,
            'top': -1 * hH,
            'padding-top': 2 * hH
        });
        $wrapper.css('margin-top', wH);
    }

    /* reposition scroll */
    $('body, html').animate({scrollTop: hH});

    $('.top-visual_img-wrap').addClass('top-visual_img-wrap--init');

    var svgCard = new Vivus('svg_card', {type: 'scenario-sync', duration: 35, start: 'autostart'}, function() {
        $('.svg-wrap').addClass('svg-wrap--init');
    });
});
})(jQuery);
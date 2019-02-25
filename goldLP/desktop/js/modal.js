(function($){
$(function(){
    var $modalWrap = $('.js-modal-block-wrap'),
    $modalBtn = $('.js-modal-btn'),
    SPEED = 500;


    $modalBtn.on('click', function(){
        if ($(this).data('state') == 'open') {
            $modalWrap.css('display', 'block').animate({'opacity': 1}, SPEED);
        } else {
            $modalWrap.animate({'opacity': 0}, SPEED, function(){
                $(this).css('display', 'none');
            });
        }
        return false;
    });

});
})(jQuery);
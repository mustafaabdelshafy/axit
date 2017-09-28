/*global $*/
/*nav list*/
$('nav ul li').click(function () {
    'use strict';
    $(this).addClass('active').siblings().removeClass('active');
});
var tab = $('.features ul li');
tab.click(function () {
    'use strict';
    $(this).addClass('active').siblings().removeClass('active');
    $('.features .tab-content > div').hide();
    $($(this).data('class')).show();
});
/* toggle nice scroll */
$(document).ready(function () {
    'use strict';
    $("body").niceScroll();
    $(".do-nicescroll3").niceScroll({
        cursorwidth: 18,
        cursorcolor: '#ff8b38',
});
});

/* loading page */
$(window).load(function () {
    'use strict';
    $('.overlay-loading .loader').fadeOut(1000, function () {
        $(this).parent().fadeOut(1000, function () {
            $(this).remove();
            $('body').css('overflow', 'inhert');
        });
    });
});
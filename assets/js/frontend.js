$(document).ready(function () {


    $('.left-lighter').stop().animate({opacity: 1}, 1000);
    $('.right-lighter').stop().animate({opacity: 1}, 1000);
    $('.main').stop().animate({opacity: 1}, 3000);
    $('.bwin-logo').show(1500);


    var bg = $('.bg-image');

    if (bg.length) {
        bg.each(function () {
            var $node = $(this);
            var imgUrl = $node.data('bgimage');
            $node.css({
                backgroundImage: "url('" + imgUrl + "')"
            });
        });

    }
});



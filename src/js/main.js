

$(document).ready(function () {
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
        loop:true,
    });

    $('.burger').on('click', function () {
        $('.burger').toggleClass('burger_active');
        $('.header__nav').toggleClass('header__nav_active');
        $('.backdrop').toggleClass('backdrop_active')
    });

    $('.backdrop').on('click', function () {
        $('.burger').removeClass('burger_active');
        $('.header__nav').removeClass('header__nav_active');
        $('.backdrop').removeClass('backdrop_active')
    })
});
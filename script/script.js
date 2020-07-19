'use strict';
// slider_1
$('.slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    adaptiveHeight: true,

    autoplaySpeed: 5000,
    infinite: true,
    // autoplay: true,
    fade: true,
    cssEase: 'linear'

});

// slider_2
$('.latest-news-content__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
});
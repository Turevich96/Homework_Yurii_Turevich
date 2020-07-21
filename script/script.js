'use strict';
// slider_1
$('.slick-slider').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    adaptiveHeight: true,

    autoplaySpeed: 4000,
    infinite: true,

    fade: true,
    cssEase: 'linear'


});

// slider_2
$('.latest-news-content__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
});

// google map 
// Initialize and add the map
function initMap() {
    // Styles a map in night mode.


    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.674, lng: -73.945 },
        zoom: 12,
        disableDefaultUI: true,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]

    });

    const place = { lat: 40.674, lng: -73.945 };
    let marker = new google.maps.Marker({
        position: place,
        map: map,
        icon: './assets/image/marker-icon.png'
    })


}

// Scroll transition 
jQuery(function ($) {
    $('a[href*="#"]').on('click.smoothscroll', function (e) {
        var hash = this.hash, _hash = hash.replace(/#/, ''), theHref = $(this).attr('href').replace(/#.*/, '');
        if (theHref && location.href.replace(/#.*/, '') != theHref) return;
        var $target = _hash === '' ? $('body') : $(hash + ', a[name="' + _hash + '"]').first();
        if (!$target.length) return;
        e.preventDefault();
        $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 400, 'swing', function () {
            window.location.hash = hash;
        });
    });
});

// form 
let inputName = document.querySelector('.footer-content__form__right__name');
let inputMail = document.querySelector('.footer-content__form__right__name');
let button = document.querySelector('.footer-content__form__right__button');
button.addEventListener('click', getUser);
let user = [];
function getUser() {
    user[0] = inputName.value;
    user[1] = inputMail.value;
    console.log(user)

}
// Text button open 
let buttonText = document.querySelector('.button2');
let textDiv = document.querySelector('.text-top');
let textDivMore = document.querySelector('.what-we-do-content__rigth__text2');
let leftImg = document.querySelector('.left-im');


let count = 1;
buttonText.addEventListener('click', moreText);

function moreText(count) {

    if ((textDivMore.classList.length) == 1) {
        textDiv.classList.add('display-none');
        leftImg.classList.add('absolut');



        textDivMore.classList.add('display-block');
        buttonText.innerText = 'back'



    }

    else if ((textDivMore.classList.length) == 2) {

        textDiv.classList.remove('display-none');
        textDivMore.classList.remove('display-block');
        leftImg.classList.remove('absolut');
        buttonText.innerText = 'more details'

    }
}
// Text button open 
let buttonTextLeft = document.querySelector('.button_bottom');
let textDivLeft = document.querySelector('.text4');
let textDivMoreLeft = document.querySelector('.text3');
let leftImgLeft = document.querySelector('.left-im');


let countLeft = 1;
buttonTextLeft.addEventListener('click', moreTextLeft);

function moreTextLeft(count) {

    if ((textDivMoreLeft.classList.length) == 2) {
        textDivLeft.classList.add('display-none');
        leftImgLeft.classList.add('absolut');



        textDivMoreLeft.classList.add('display-block');
        buttonTextLeft.innerText = 'back'



    }

    else if ((textDivMoreLeft.classList.length) == 3) {

        textDivLeft.classList.remove('display-none');
        textDivMoreLeft.classList.remove('display-block');
        leftImgLeft.classList.remove('absolut');
        buttonTextLeft.innerText = 'more details'

    }
}

// more gallery
let galleryMore = document.querySelector('.box2');
let buttonGallary = document.querySelector('.section-galerry-content__button-box__button');

buttonGallary.addEventListener('click', gallaryMo);

function gallaryMo() {
    if (galleryMore.classList.length == 2) {
        galleryMore.classList.add('display-block');
        buttonGallary.innerText = 'back'
    }
    else {
        // galleryMore.classList.remove('display-block');
        galleryMore.classList.remove('display-block');


        buttonGallary.innerText = 'more details'
    }

}






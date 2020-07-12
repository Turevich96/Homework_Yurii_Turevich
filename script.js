'use strict';


$(document).ready(function () {

    $('.li1').css('border-bottom', '3px solid white')
    $('#tabs-2').css('display', 'none');
    $('#tabs-3').css('display', 'none');



    $('.link1').click(function () {
        $('#tabs-2').css('display', 'none');
        $('#tabs-3').css('display', 'none');
        $('#tabs-1').css('display', 'block');
        $('.li1').css('border-bottom', '3px solid white')
        $('.li3').css('border-bottom', 'none')
        $('.li2').css('border-bottom', 'none')
    })


    $('.link2').click(function () {
        $('#tabs-1').css('display', 'none');
        $('#tabs-2').css('display', 'block');
        $('#tabs-3').css('display', 'none');
        $('.li2').css('border-bottom', '3px solid white')
        $('.li1').css('border-bottom', 'none')
        $('.li3').css('border-bottom', 'none')
    })

    $('.link3').click(function () {
        $('#tabs-1').css('display', 'none');
        $('#tabs-3').css('display', 'block');
        $('#tabs-2').css('display', 'none');

        $('.li3').css('border-bottom', '3px solid white')
        $('.li1').css('border-bottom', 'none')
        $('.li2').css('border-bottom', 'none')
    })

})
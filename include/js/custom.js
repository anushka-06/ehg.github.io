'use strict';

function toggleMenu() {
    var el = document.getElementsByClassName("toggle");
    var element = document.getElementsByTagName("body")[0];
    for (var f = 0; f < el.length; f++) {
        var elit = el[f];
        element.classList.toggle('open-menu');

    }

}

var $ = jQuery.noConflict();

jQuery(document).ready(function($) {

    $(".scroll-now").click(function() {

        $('html,body').animate({

                scrollTop: $("#about").offset().top - 80
            },

            'fast');

    });


    /*==========================*/
    /* inner hero sliders */
    /*==========================*/
    if ($('.inner-hero-slider').length > 0) {
        jQuery('.inner-hero-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 800,
            // autoplay:true,
            cssEase: 'cubic-bezier(0.830, -0.040, 0.310, 1.355',
            dots: false,
            arrows: true,
            infinite: true,
            centerMode: false,
            draggable:false,

        });
    }

    /*==========================*/
    /* hero sliders */
    /*==========================*/
    $('.hero-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        // autoplay:true,
        cssEase: 'cubic-bezier(0.830, -0.040, 0.310, 1.355',
        dots: false,
        arrows: true,
        infinite: true,
        draggable:false,
        asNavFor: '.hero-text-slider'
    });
    $('.hero-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true,
        speed: 800,
        cssEase: 'cubic-bezier(0.830, -0.040, 0.310, 1.355',
        asNavFor: '.hero-img-slider',
        dots: false,
        arrows: false,
        centerMode: true,
        fade: true,
        draggable:false,
        focusOnSelect:false
    });

    /*==========================*/
    /* Mobile Slider */
    /*==========================*/
    if ($('.mobile-slider').length > 0) {
        jQuery('.mobile-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            speed: 1000,
            arrows: false,
            infinite: true,
            centerMode: false,
            responsive: [{
                    breakpoint: 5000,
                    settings: "unslick"
                },
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false,
                        adaptiveHeight: false
                    }
                },
                {
                    breakpoint: 579,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        adaptiveHeight: false
                    }
                }
            ]
        });
    }

    /*==========================*/
    /* Mobile Slider */
    /*==========================*/
    if ($('.card-block-slider ').length > 0) {
        jQuery('.card-block-slider ').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            speed: 1000,
            arrows: false,
            infinite: true,
            centerMode: false,
            responsive: [{
                    breakpoint: 5000,
                    settings: "unslick"
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false,
                        adaptiveHeight: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        adaptiveHeight: true
                    }
                }
            ]
        });
    }
    /*==========================*/
    /* Scroll on animate */
    /*==========================*/
    function onScrollInit(items, trigger) {
        items.each(function() {
            var osElement = $(this),
                osAnimationClass = osElement.attr('data-os-animation'),
                osAnimationDelay = osElement.attr('data-os-animation-delay');
            osElement.css({
                '-webkit-animation-delay': osAnimationDelay,
                '-moz-animation-delay': osAnimationDelay,
                'animation-delay': osAnimationDelay
            });
            var osTrigger = (trigger) ? trigger : osElement;
            osTrigger.waypoint(function() {
                osElement.addClass('animated').addClass(osAnimationClass);
            }, {
                triggerOnce: true,
                offset: '95%',
            });
            // osElement.removeClass('fadeInUp');
        });
    }
    onScrollInit($('.os-animation'));
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container'));


    /*==========================*/
    /* Header fix */
    /*==========================*/
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }


});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
});
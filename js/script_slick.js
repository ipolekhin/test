$(function() {

    $('.regular').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
    });

    $('.catalog-list.carusel').slick({
        infinite: true,
        slidesToShow: 5,
        variableWidth: false,
        centerMode: false,
        cssEase: 'linear',
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ]
    });

    $('.slider-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('.brand-list').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
				    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

    $('.service-carusel-list').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

    $('.number1').slick({
        fade: true,
    });

    $('.number2').slick({
    });

    $('.number3').slick({
    });

    $('.comments-info-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.comments-photo-list'
    });

    $('.comments-photo-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.comments-info-list',
    });

    $('.partner-comments-info-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.partner-comments-photo-list'
    });

    $('.partner-comments-photo-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.partner-comments-info-list',
    });

    $('.stuff-carusel-list').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

    $('.students-work-list').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

    $('.shop-category-list').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

});
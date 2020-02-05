$(function() {

    $('.nav-block-slider-mob-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
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

    $('.test-number1').slick();

    $('.number1, .number2, .number3').slick({
        fade: true,
        asNavFor: '.studio-carusel-list',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('.studio-carusel-list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.number1',
        arrows: false,
        vertical: true,
        responsive: [
            {
                breakpoint: 570,
                settings: {
                    vertical: false,
                }
            }
        ]
    });

    $('.comments-info-list, .partner-comments-info-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.comments-photo-list, .partner-comments-photo-list'
    });

    $('.comments-photo-list, .partner-comments-photo-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.comments-info-list, .partner-comments-info-list',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    autoplay:true,
                    autoplaySpeed:3000,
                    arrows: false,
                    fade: true,
                }
            }
        ]
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
        variableWidth: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
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

$(document).on('ready', function() {

    var navblock = document.querySelector('.main-navigation');
    var backtoggler = document.querySelector('.back-toggler');
    var submenutarget = document.querySelector('.submenu-target');
    var navbartoggler = document.querySelector('.navbar-toggler');
    var subscribelink = document.querySelector('.subscribe-link');
    var popupsubscribe = document.querySelector('.modal-subscribe');
    var close = document.querySelectorAll('.modal-close');
    var popup = document.querySelectorAll('.modal');
    var subscribeform = document.querySelector('.subscribe-form');
    var header = document.querySelector('header');
    var main = document.querySelector('main');
    var footer = document.querySelector('footer');

    submenutarget.addEventListener('click', function(e) {
        e.preventDefault;
        if(window.innerWidth < 992) {
            this.nextElementSibling.classList.add('collapsed');
            navbartoggler.classList.add('right');
        }
    });

    backtoggler.addEventListener('click', function(e) {
        e.preventDefault();
        backtoggler.parentElement.classList.remove('collapsed');
        navbartoggler.classList.remove('right');
    });

    navbartoggler.addEventListener('click', function() {
        if (navbartoggler.classList.contains('collapsed')) {
            navbartoggler.classList.remove('collapsed');
            navblock.classList.remove('collapsed');
            let collapsed = document.querySelectorAll('.collapsed');
            for (i = 0; i < collapsed.length; i++) {
                collapsed[i].classList.remove('collapsed');
            }
            navbartoggler.classList.remove('right');
        } else {
            navbartoggler.classList.add('collapsed');
            navblock.classList.add('collapsed');
        }
    });

    $('.search-string').on('focus', function() {
        $resultElement = $('.search_content');
        $resultElement.toggle();
    });

    $(document).on('click', function(e) {
      if (!$(e.target).closest('.search').length) {
        $('.search_content').hide();
      }
      e.stopPropagation();
    });

    var searchinput = document.querySelector('.search-string');
    searchinput.addEventListener('focus', function(){
        if(window.innerWidth > 576 && window.innerWidth < 992) {
            navblock.classList.add('opacityon');
        }
    });
    searchinput.addEventListener('blur', function(){
        navblock.classList.remove('opacityon');
    });

    $('.regular').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
    });

    $('.catalog-list').slick({
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

    subscribelink.addEventListener('click', function(e) {
        e.preventDefault();
        popupsubscribe.classList.add('modal-show');
        stylesBlur();
    });

    // Эффект размытия фона
    function stylesBlur() {
        header.classList.add('blur');
        main.classList.add('blur');
        footer.classList.add('blur');
    }

    // Закрытие модального окна
    var closeClickHandler = function(event) {
        event.target.closest('.modal').classList.remove('modal-show');
        let blur = document.querySelectorAll('.blur');
        if (blur) {
            for (i = 0; i < blur.length; i++) {
                blur[i].classList.remove('blur');
            }
        }
        console.log('закрыть');
    };

    for (i = 0; i < close.length; i++) {
        let button = close[i];
        button.addEventListener('click', closeClickHandler, false);
    }

    subscribeform.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('отправить форму');
        subscribeform.innerHTML = '<div class="sucess">Спасибо, что Вы с Нами!</div>';
    });

    window.addEventListener(('keydown'), function(e) {
        if (e.keyCode === 27) {
            let blur = document.querySelectorAll('.blur');
            let modalopen = document.querySelector('.modal-open');
            let collapsed = document.querySelectorAll('.collapsed');
            for (i = 0; i < blur.length; i++) {
                blur[i].classList.remove('blur');
            }

            for (i = 0; i < collapsed.length; i++) {
                collapsed[i].classList.remove('collapsed');
            }

            for (i = 0; i < popup.length; i++) {
                if (popup[i].classList.contains('modal-show')) {
                    e.preventDefault();
                    popup[i].classList.remove('modal-show');
                }
            }

            if (modalopen) {
                modalopen.classList.remove('modal-open')
            }

            if (navbartoggler.classList.contains('collapsed')) {
                navbartoggler.classList.remove('collapsed');
            }

            if (navbartoggler.classList.contains('right')) {
                navbartoggler.classList.remove('right');
            }
        }
    });

    $('.course-details-btn').click( function () {
        var descr = $(this).next('.details').html();
        var modalcoursedetails = $('body').find('.modal-course-details');
        $('body').addClass('modal-open');
        modalcoursedetails.addClass('modal-show');
        modalcoursedetails.children('div').html(descr);
        stylesBlur();
    });

    $('.modal-close').click( function () {
        modalcoursedetails.removeClass('modal-show');
        $('.blur, body').removeClass();
    });

    $('.modal').click(function(e) {
        if ($(e.target).hasClass('modal-show')) {
            $(e.target).removeClass('modal-show');
            $('.blur, .modal-open').removeClass();
        }
    });

    $('.tab-studio-info .tabs-studio-info > li a').click( function () {
        $('.tab-studio-info .tabs-studio-info > li a').removeClass('current');
        $(this).addClass('current');

        $('.tab-studio-content > div').hide();
        t_content=$(this).attr('href');
        $(t_content).show();

        return false
    });
    $('.tab-studio-info .tabs-studio-info > li a:first').trigger('click');

    $('#select-towns').change(function() {
        var agencyselect = this.value;
        var agencylist = document.querySelectorAll('.agency-info-list div');
        for (i = 0; i < agencylist.length; i++) {
            if (agencylist[i].classList.contains(agencyselect)) {
                agencylist[i].classList.add('show');
            }
            else {
                agencylist[i].classList.remove('show');
            }
        }
    });

});
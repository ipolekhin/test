$(function() {
    var navblock = document.querySelector('.main-navigation');
    var backtoggler = document.querySelector('.back-toggler');
    var submenutarget = document.querySelector('.submenu-target');
    var navbartoggler = document.querySelector('.navbar-toggler');
    var subscribelink = document.querySelector('.subscribe-link');
    var popupsubscribe = document.querySelector('.modal-subscribe');
    var subscribeform = document.querySelector('.subscribe-form');
    var certificaterequestlink = document.querySelector('.certificate-reques-link');
    var popupcertificaterequest = document.querySelector('.modal-certificate-request');
    var certificaterequestform = document.querySelector('.certificate-request-form');
    var close = document.querySelectorAll('.modal-close');
    var popup = document.querySelectorAll('.modal');
    var header = document.querySelector('header');
    var main = document.querySelector('main');
    var footer = document.querySelector('footer');

    submenutarget.addEventListener('click', function (e) {
        e.preventDefault;
        if (window.innerWidth < 992) {
            this.nextElementSibling.classList.add('collapsed');
            navbartoggler.classList.add('right');
        }
    });

    //планшет и мобильная версия, при первом клике срабатывает hover
    if (window.innerWidth < 992) {
        var goods = document.querySelectorAll('.catalog-item');
        if (goods) {
            var abc = document.createElement('div');
            for (var i = 0; i < goods.length; i++) {
                goods[i].addEventListener('click', function (e) {
                    if (!this.classList.contains('js-hover-click')) {
                        e.preventDefault();
                        this.classList.add('js-hover-click');
                        if (abc.classList.contains('js-hover-click')) {
                            abc.classList.remove('js-hover-click');
                        }
                        abc = this;
                    }
                });
            }
        }
    }

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
        if (!$(e.target).closest('.basket_tooltip, .basket_info').length) {
            $('.basket_tooltip').removeClass('show');
        }
        if(window.innerWidth < 992) {
            if (!$(e.target).closest('.user-navigation--login').length) {
                $('.user-info').removeClass('show');
            }
        }
        if (!$(e.target).closest('.custom-select, .options, .select-price').length) {
            $('.custom-select.open, .options.open, .select-price.open').removeClass('open');
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

    //user-menu
    $('.login-link').click(function (e) {
        e.preventDefault();
        if(window.innerWidth < 992) {
            $(this).siblings('.user-info').toggleClass('show');
        }
    });

    //В мобильно версии при нажатии на крестик закрыть user-menu
    $('.close-user-menu').click(function (e) {
        e.preventDefault()
        if(window.innerWidth < 577) {
            $(this).parents('.user-info').removeClass('show');
        }
    });

    //Корзина
    $('.basket_info').click(function(e){
        if(window.innerWidth > 768) {
            e.preventDefault();
            $(this).next('.basket_tooltip').toggleClass('show');
        }
    });

    // Эффект размытия фона
    function stylesBlur() {
        header.classList.add('blur');
        main.classList.add('blur');
        footer.classList.add('blur');
    }

    //Открыть форму подписаться на новости
    subscribelink.addEventListener('click', function(e) {
        e.preventDefault();
        popupsubscribe.classList.add('modal-show');
        stylesBlur();
    });

    //Сообщение об успешной подписки на новости
    subscribeform.addEventListener('submit', function(e) {
        e.preventDefault();
        subscribeform.innerHTML = '<div class="sucess">Спасибо, что Вы с Нами!</div>';
    });

    if (certificaterequestlink) {
        //Открыть форму запросить сертификат
        certificaterequestlink.addEventListener('click', function(e) {
            e.preventDefault();
            popupcertificaterequest.classList.add('modal-show');
            stylesBlur();
        });

        //Сообщение об успешном запросе сертификата
        certificaterequestform.addEventListener('submit', function(e) {
            e.preventDefault();
            certificaterequestform.innerHTML = '<div class="sucess">Мы скоро отправим сертификат вам на почту!</div>';
        });
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
    };

    for (i = 0; i < close.length; i++) {
        let button = close[i];
        button.addEventListener('click', closeClickHandler, false);
    }

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

    $('.course-details-btn').click( function (e) {
        e.preventDefault();
        var descr = $(this).next('.details').html();
        var modalcoursedetails = $('body').find('.modal-course-details');
        $('body').addClass('modal-open');
        modalcoursedetails.addClass('modal-show');
        modalcoursedetails.find('.details').html(descr);
        stylesBlur();
        $('.modal-close').click( function () {
            modalcoursedetails.removeClass('modal-show');
            $('.blur, body').removeClass('blur');
        });
    });

    //Запись к мастеру, берет значение у атрибута data-text="..." и записывает в форму input value
    $('.appointment').click(function (e) {
        e.preventDefault();
        $('.modal-appointment').addClass('modal-show');
        var appointment = $(this).data('text');
        $('input[name=appointment]').val(appointment);
    });

    //Показать все курсы
    $('.show-all-courses').click(function (e) {
       e.preventDefault();
       $(this).siblings('.courses-item').toggleClass('show');
       $(this).toggleClass('show');
       if ($(this).hasClass('show')) {
           $(this).text('Скрыть курсы');
       } else {
           $(this).text('Посмтреть все курсы');
       }
    });

    $('.modal').click(function(e) {
        if ($(e.target).hasClass('modal-show')) {
            $(e.target).removeClass('modal-show');
            $('.blur').removeClass('blur');
            $('.modal-open').removeClass('modal-open');
        }
    });

    $('.tab-studio-info .tabs-studio-info > li a').click( function (e) {
        e.preventDefault();
        $('.tab-studio-info .tabs-studio-info > li a').removeClass('current');
        $(this).addClass('current');

        $('.tab-studio-content > div').hide();
        t_content = $(this).attr('href');
        $(t_content).show();
    });
    $('.tab-studio-info .tabs-studio-info > li a:first').trigger('click');

    //пересчет
    function recalculationCountSum() {
        var  price_sum = 0, sum = 0, block = $('.basket_tooltip-list');
        //итоговая сумма
        block.find('td.price').each(function() {
            price_sum += parseInt($(this).html());
        });
        $('.amount-price span').html(price_sum + ' ₽');
        // количество в корзине
        block.find('input').each(function(i, input) {
            sum += parseInt($(input).val());
            if (sum > 9) {
                sum = '+9';
            }
        });
        $('.order_item_count').html(sum);
    }

    // Количество товаров quantity
    $('.quantity button').click(function (e) {
        e.preventDefault();
        var $this = $(this).parent().find('input'),
            btn = $(this), qty = parseFloat($this.val()),
            min = 1, max = 999, new_qty,
            elementid = btn.parents('.goods__item').attr('data-element_id');

        if (btn.hasClass('plus')) {
            new_qty = (qty < max) ? qty + 1 : qty;
        } else {
            new_qty = (qty > min) ? qty - 1 : qty;
        }

        $('.goods__item[data-element_id="'+elementid+'"]').each(function() {
            var product_price = $(this).find('td.price');
            product_price.text(product_price.data('price') * new_qty + ' ₽');
        });
        $this.val(new_qty).change();
        recalculationCountSum();
    });

    //удаление товара из корзины
    $('.quantity.basket .goods__remove').click(function (e) {
        if ($(e.target).closest('.quantity.basket .goods__remove').length) {
            e.stopPropagation();
            e.preventDefault();
            var elementid = $(this).parents('.goods__item').attr('data-element_id');
            $('.goods__item[data-element_id="'+elementid+'"]').each(function() {
                $(this).remove();
            });
            var tooltipcount = $('.tooltip_count span');
            var countitem = tooltipcount.attr('data-count') - 1;
            tooltipcount.attr('data-count', countitem);
            if (countitem > 0) {
                tooltipcount.text('В корзине еще '+ countitem + ' товаров');
            }
            else {
                tooltipcount.text('');
            }
            recalculationCountSum();
        }
    });

    // Фото товара
    $('.product-thumb-list .product-thumb-item').click(function () {
        var thumb = $(this);
        $('.product-thumb-item.current').removeClass('current');
        thumb.addClass('current');
        var productphoto = $('.product-photo-item');
        var imgselect = thumb.find('img').data('number');
        productphoto.removeClass('current');
        $('.product-photo-item').each(function(index){
            if (imgselect == index) {
                $(this).addClass('current');
            }
        });
    });

    //Функция показывает контакты выбранного города на странице Agency
    var showContactsTown  = function (town) {
        var agencylist = document.querySelectorAll('.agency-info-list div');
        for (i = 0; i < agencylist.length; i++) {
            if (agencylist[i].classList.contains(town)) {
                agencylist[i].classList.add('show');
            }
            else {
                agencylist[i].classList.remove('show');
            }
        }
    }

    //CustomSelect
    function customSelect(el){
        var options = [],
            option = $(el).children('option'),
            customSelect, currentSelect;
        $(el).hide();
        $(option).each(function(){
            options.push($(this).html());
        });
        $(el).after('<ul class="custom-select" data-selected-value="' + options[0] + '">');
        customSelect = $(el).siblings('.custom-select');
        customSelect.append('<li class="selected-option"><span>' + options[0] + '</span>');
        customSelect.children('.selected-option').append('<ul class="options">');
        currentSelect = $(el).children('option:selected').text();
        if (currentSelect) {
            customSelect.find('.selected-option span').text(currentSelect);
        }

        for(var i = 1; i < options.length; i++) {
            customSelect.find('.options').append('<li class="' +
                $(option[i]).prop('class') + '">' + options[i] + '</li>');
        }

        customSelect.click(function(){
            $(this).toggleClass('open');
            $('.options',this).toggleClass('open');
        });

        customSelect.find('.options li').click(function(){
            var selection = $(this).text();
            if (el === '#select-towns') {
                var town = $(this).prop('class');
                showContactsTown(town);
            }
            var dataValue = $(this).attr('data-value');
            var selected = customSelect.find('.selected-option span').text(selection);
            for(var i = 1; i < option.length; i++) {
                if($(option[i]).text() === selected.text()) {
                    $(option[i]).attr('selected', 'true');
                    $(option[i]).siblings().removeAttr('selected');
                }
            };
            customSelect.attr('data-selected-value',dataValue);
        });
    };
    customSelect('#select-category');
    customSelect('#select-collection');
    customSelect('#select-post');
    customSelect('#select-adress');
    customSelect('#select-status');
    customSelect('#select-towns');

    // Multiselect
    function custommultiSelect(el){
        var options = [],
            option = $(el).children('option'),
            custommultiSelect;
        $(el).hide();
        $(option).each(function(){
            options.push($(this).html());
        });
        $(el).after('<ul class="custom-select">');
        custommultiSelect = $(el).siblings('.custom-select');
        custommultiSelect.append('<li class="selected-option"><span>' + options[0] + '</span>');
        custommultiSelect.after('<ul class="options">');

        for (var i = 1; i < options.length; i++) {
            custommultiSelect.next('.options').append('<li data-value="' + $(option[i]).val() +'">' +
                '<i  class="' + $(option[i]).prop('class') + '"' + ' ></i></li>');
        }

        //Выборка цвета
        function selectedColor() {
            custommultiSelect.find('.selected-option').html('<span>' + options[0] + '</span>');
            var optionselected = $(el).children('option:selected');
            optionselected.each(function (i) {
                custommultiSelect.find('.selected-option span').append('<i class="'+ $(optionselected[i]).prop('class') + '"></i>');
            });
        }
        selectedColor();

        custommultiSelect.click(function(){
            $(this).toggleClass('open');
            $(this).next('.options').toggleClass('open');
            $(this).next('.options.open').find('li').each(function(index){
                index++;
                if($(option[index]).prop('selected')) {
                    $(option[index]).prop('selected', true);
                    $(this).addClass('focus');
                }
            });
        });
        custommultiSelect.next('.options').find('li').click(function(){
            var dataValue = $(this).attr('data-value');
            for(var i = 1; i < option.length; i++) {
                if($(option[i]).val() === dataValue) {
                    if($(option[i]).prop('selected')) {
                        $(option[i]).prop('selected', false);
                        $(this).removeClass('focus');
                        selectedColor();
                    } else {
                        $(option[i]).prop('selected', true);
                        $(this).addClass('focus');
                        selectedColor();
                    }
                }
            };
        });
    };
    custommultiSelect('#select-color');

    //Price select
    function customPriceSelect(el){
        customPriceSelect = $(el).siblings('.custom-select');
        $(customPriceSelect).click(function(){
            $(this).toggleClass('open');
            $(this).next('.select-value').toggleClass('open');
        });
    };
    customPriceSelect('#select-price');

    //Козина
    function amountMinPrice() {
        var amountprice = parseInt($('.amount-price span').html());
        var purchase = $('.comments-submit');
        if (amountprice < 1500) {
            $('.notify-block, .notify-block-top, .price-min, .price-min-top').addClass('show');
            purchase.addClass('disabled');
            purchase.find('button').addClass('disabled');
        }
        if ($('.goods__absence').hasClass('absence')) {
            $('.notify-block, .goods-absence').addClass('show');
            purchase.addClass('disabled');
            purchase.find('button').addClass('disabled');
        }
    };

    $('.purchase').click(function (e) {
        e.preventDefault();
        var amountprice = parseInt($('.amount-price span').html());
        if (!$(e.target).hasClass('disabled')) {
            alert('Заказ оформлен. Сумма заказа ' + amountprice);
        }
    });
    amountMinPrice();

    //изменение адреса
    $('.change-adress').click(function (e) {
        e.preventDefault();
        var fields = $('.block-contacts input');
        fields.prop('disabled', false);
        $(e.target).hide();
        $('.block-contacts').append('<div class="save-adress"><button class="change-apply button" href="#">Сохранить измененеия</button></div>');
        console.log(fields);
        //сохранение адреса
        $('.change-apply').click(function (e) {
            e.preventDefault();
            $(e.target).remove();
            $('.change-adress').show();
            var fields = $('.block-contacts input');
            fields.prop('disabled', true);
            console.log(fields);
        });
    });

    //Личный кабинет
    //Табы
    $('.tabs .tabs__link').click( function () {
        $('.tabs .tabs__link').removeClass('current');
        $(this).addClass('current');

        $('.tabs-content__item').hide();
        var t_content = $(this).attr('href');
        $(t_content).show();

        return false
    });
    $('.tabs .tabs__link:first').trigger('click');

    //Показать весь заказ
    $('.show-all-order').click(function(e){
        e.preventDefault();
        $(this).siblings('.order-item__goods-list').children('.inorder-good-item').each(function(index) {
            if (index > 3) {
                $(this).toggleClass('show');
            }
        });
    });

    //ЛК удалит адрес
    var removeadress = document.querySelector('.remove-adress-link');
    var popupremoveadress = document.querySelector('.modal-remove-adress');
    if (removeadress || popupremoveadress) {
        removeadress.addEventListener('click', function (e) {
            e.preventDefault();
            popupremoveadress.classList.add('modal-show');
            stylesBlur();
        });
    }

    //ЛК - тображения блока ФИО получатель
    if ($('#recipient-other').prop('checked')) {
        $('.recipient-group .recipient-fio').show();
    }
    $('.recipient-group input[name="recipient"]').click(function () {
        var $this = $(this).val();
        var recipientfio = $('.recipient-group .recipient-fio');
        if ($this == 'recipient-other') {
            recipientfio.show();
        } else {
            recipientfio.hide();
        }
    });


});

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

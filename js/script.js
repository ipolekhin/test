$(function() {
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
        if (!$(e.target).closest('.basket_tooltip, .basket_info').length) {
            $('.basket_tooltip').removeClass('show');
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

    //Корзина
    $('.basket_info').click(function(){
        $(this).next('.basket_tooltip').toggleClass('show');
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
        $('.modal-close').click( function () {
            modalcoursedetails.removeClass('modal-show');
            $('.blur, body').removeClass();
        });
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

    // Количество товаров quantity
    $('.quantity button').click(function () {
        var $this = $(this).parent().find('input'), btn = $(this), qty = parseFloat($this.val()), min = 1, max = 999, new_qty;
        if(btn.hasClass('plus')) {
            new_qty = (qty < max) ? qty + 1 : qty;
        } else {
            new_qty = (qty > min) ? qty - 1 : qty;
        }
        $this.val(new_qty).change();
    });

    // Пересчет суммы и количество товаров quantity basket
    $('.quantity.basket button, .quantity.basket .goods__remove').click(function (e) {
        var btn = $(this), price_sum = 0, sum = 0;
        var count = btn.siblings('.goods__count').find('input').val();
        var product_price = btn.parents('td').siblings('td.price');
        if ($(e.target).closest('.quantity.basket .goods__remove').length) {
            e.stopPropagation();
            e.preventDefault();
            var tooltipcount = $('.tooltip_count span');
            var countitem = tooltipcount.attr('data-count') - 1;
            tooltipcount.attr('data-count', countitem);
            btn.parents('tr').remove();
            if (countitem > 0) {
                tooltipcount.text('В корзине еще '+ countitem + ' товаров');
            }
            else {
                tooltipcount.text('');
            }
        }
        $(product_price).text(product_price.data('price') * count + ' ₽');
        $('.basket_tooltip-list').find('td.price').each(function() {
            price_sum += parseInt($(this).html());
        });
        // количество в корзине
        $('.basket_tooltip-list').find('input').each(function(i, input) {
            sum += parseInt($(input).val());
        });
        // Итоговая сумма
        $('.amount-price span').html(price_sum + ' ₽');
        // Количество в корзине
        $('.order_item_count').html(sum);
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

    function customSelect(el){
        var options = [],
            option = $(el).children('option'),
            customSelect;
        $(el).hide();
        $(option).each(function(){
            options.push($(this).html());
        });
        $(el).after('<ul class="custom-select" data-selected-value="' + options[0] + '">');
        customSelect = $(el).siblings('.custom-select');
        $(customSelect).append('<li class="selected-option"><span>' + options[0] + '</span>');
        $(customSelect).children('.selected-option').append('<ul class="options">');

        for(var i = 1; i < options.length; i++) {
            $(customSelect).find('.options').append('<li class="' +
                $(option[i]).prop('class') + '">' + options[i] + '</li>');
        }


        for (var i = 1; i < options.length; i++) {
            $(custommultiSelect).next('.options').append('<li data-value="'+ options[i] +'">' +
                '<i  class="' + $(option[i]).prop('class') + '"' + ' ></i></li>');
        }

        $(customSelect).click(function(){
            $(this).toggleClass('open');
            $('.options',this).toggleClass('open');
        });
        $(customSelect).find('.options li').click(function(){
            var selection = $(this).text();
            var dataValue = $(this).attr('data-value');
            var selected = $(customSelect).find('.selected-option span').text(selection);
            for(var i = 1; i < option.length; i++) {
                if($(option[i]).text() === selected.text()) {
                    $(option[i]).attr('selected', 'true');
                    $(option[i]).siblings().removeAttr('selected');
                }
            };
            $(customSelect).attr('data-selected-value',dataValue);
        });
    };
    customSelect('#select-category');
    customSelect('#select-collection');
    customSelect('#select-post');

    //Multiselect
    function custommultiSelect(el){
        var options = [],
            option = $(el).children('option'),
            custommultiSelect;
        $(el).hide();
        $(option).each(function(){
            options.push($(this).html());
        });
        $(el).after('<ul class="custom-select" data-selected-value="' + options[0] + '">');
        custommultiSelect = $(el).siblings('.custom-select');
        $(custommultiSelect).append('<li class="selected-option"><span>' + options[0] + '</span>');
        $(custommultiSelect).after('<ul class="options">');

        for (var i = 1; i < options.length; i++) {
            $(custommultiSelect).next('.options').append('<li data-value="'+ options[i] +'">' +
                '<i  class="' + $(option[i]).prop('class') + '"' + ' ></i></li>');
        }
        $(custommultiSelect).click(function(){
            $(this).toggleClass('open');
            $(this).next('.options').toggleClass('open');
            $(this).next('.options.open').find('li').each(function(index){
                index++
                if($(option[index]).prop('selected')) {
                    $(option[index]).prop('selected', true);
                    $(this).addClass('focus');
                }
            });
        });
        $(custommultiSelect).next('.options').find('li').click(function(){
            var dataValue = $(this).attr('data-value');
            for(var i = 1; i < option.length; i++) {
                if($(option[i]).text() === dataValue) {
                    if($(option[i]).prop('selected')) {
                        $(option[i]).prop('selected', false);
                        $(this).removeClass('focus');
                    } else {
                        $(option[i]).prop('selected', true);
                        $(this).addClass('focus');
                    }
                }
            };
        });
    };
    custommultiSelect('#select-color');

    //price select
    function customPriceSelect(el){
        customPriceSelect = $(el).siblings('.custom-select');
        $(customPriceSelect).click(function(){
            $(this).toggleClass('open');
            $(this).next('.select-price').toggleClass('open');
        });
    };
    customPriceSelect('#select-price');

});

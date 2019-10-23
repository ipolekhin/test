$(document).on('ready', function() {
    
    var navblock = document.querySelector('.main-navigation');
    var backtoggler = document.querySelector('.back-toggler');
    var submenutarget = document.querySelector('.submenu-target');
    var navbartoggler = document.querySelector('.navbar-toggler');
    var close = document.querySelector('.modal-close');
    var subscribelink = document.querySelector('.subscribe-link');
    var popupsubscribe = document.querySelector('.modal-subscribe');    
    var popup = document.querySelector('.modal');
    var subscribeform = document.querySelector('.subscribe-form');
    var header = document.querySelector('header');
    var main = document.querySelector('main');
    var footer = document.querySelector('footer');    
    
    submenutarget.addEventListener('click', function(e) {
        e.preventDefault;
        this.nextElementSibling.classList.add('collapsed');
        navbartoggler.classList.add('right');
    });
    
    backtoggler.addEventListener('click', function(e){
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
    
    subscribelink.addEventListener('click', function(e) {
        e.preventDefault();
        popupsubscribe.classList.add('modal-show');
        header.classList.add('blur');
        main.classList.add('blur');
        footer.classList.add('blur');
    });
    close.addEventListener('click', function(e) {
        e.preventDefault();
        let blur = document.querySelectorAll('.blur');
        popupsubscribe.classList.remove('modal-show');  
        console.log(blur);
        
        for (i = 0; i < blur.length; i++) {
            blur[i].classList.remove('blur');
        }
    });
    subscribeform.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('отправить форму');
        subscribeform.innerHTML = '<div class="sucess">Спасибо, что Вы с Нами!</div>';
    });
    window.addEventListener(('keydown'), function(e) {
        if (e.keyCode === 27) {            
            let blur = document.querySelectorAll('.blur');
            let collapsed = document.querySelectorAll('.collapsed');
            for (i = 0; i < blur.length; i++) {
                blur[i].classList.remove('blur');
            }
            
            for (i = 0; i < collapsed.length; i++) {
                collapsed[i].classList.remove('collapsed');
            }
            
            if (popup.classList.contains('modal-show')) {
                e.preventDefault();
                popup.classList.remove('modal-show');              
            }
            
            if (navbartoggler.classList.contains('collapsed')) {
                navbartoggler.classList.remove('collapsed');              
            }
            
            if (navbartoggler.classList.contains('right')) {
                navbartoggler.classList.remove('right');                 
            }
        }
    });
    
});
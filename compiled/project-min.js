$(function(){var e=document.querySelector(".main-navigation"),t=document.querySelector(".back-toggler"),s=document.querySelector(".submenu-target"),o=document.querySelector(".navbar-toggler"),i=document.querySelector(".subscribe-link"),l=document.querySelector(".modal-subscribe"),n=document.querySelector(".subscribe-form"),a=document.querySelector(".certificate-reques-link"),c=document.querySelector(".modal-certificate-request"),r=document.querySelector(".certificate-request-form"),d=document.querySelectorAll(".modal-close"),u=document.querySelectorAll(".modal"),p=document.querySelector("header"),h=document.querySelector("main"),m=document.querySelector("footer");if(s.addEventListener("click",function(e){e.preventDefault,window.innerWidth<992&&(this.nextElementSibling.classList.add("collapsed"),o.classList.add("right"))}),window.innerWidth<992){var f=document.querySelectorAll(".catalog-item");if(f)for(var v=document.createElement("div"),g=0;g<f.length;g++)f[g].addEventListener("click",function(e){this.classList.contains("js-hover-click")||(e.preventDefault(),this.classList.add("js-hover-click"),v.classList.contains("js-hover-click")&&v.classList.remove("js-hover-click"),v=this)})}t.addEventListener("click",function(e){e.preventDefault(),t.parentElement.classList.remove("collapsed"),o.classList.remove("right")}),o.addEventListener("click",function(){if(o.classList.contains("collapsed")){o.classList.remove("collapsed"),e.classList.remove("collapsed");let t=document.querySelectorAll(".collapsed");for(g=0;g<t.length;g++)t[g].classList.remove("collapsed");o.classList.remove("right")}else o.classList.add("collapsed"),e.classList.add("collapsed")}),$(".search-string").on("focus",function(){$resultElement=$(".search_content"),$resultElement.toggle()}),$(document).on("click",function(e){$(e.target).closest(".search").length||$(".search_content").hide(),$(e.target).closest(".basket_tooltip, .basket_info").length||$(".basket_tooltip").removeClass("show"),window.innerWidth<992&&($(e.target).closest(".user-navigation--login").length||$(".user-info").removeClass("show")),$(e.target).closest(".custom-select, .options, .select-price").length||$(".custom-select.open, .options.open, .select-price.open").removeClass("open"),e.stopPropagation()});var b=document.querySelector(".search-string");function k(){p.classList.add("blur"),h.classList.add("blur"),m.classList.add("blur")}b.addEventListener("focus",function(){window.innerWidth>576&&window.innerWidth<992&&e.classList.add("opacityon")}),b.addEventListener("blur",function(){e.classList.remove("opacityon")}),$(".login-link").click(function(e){e.preventDefault(),window.innerWidth<992&&$(this).siblings(".user-info").toggleClass("show")}),$(".close-user-menu").click(function(e){e.preventDefault(),window.innerWidth<577&&$(this).parents(".user-info").removeClass("show")}),$(".basket_info").click(function(e){window.innerWidth>768&&(e.preventDefault(),$(this).next(".basket_tooltip").toggleClass("show"))}),i.addEventListener("click",function(e){e.preventDefault(),l.classList.add("modal-show"),k()}),n.addEventListener("submit",function(e){e.preventDefault(),n.innerHTML='<div class="sucess">Спасибо, что Вы с Нами!</div>'}),a&&(a.addEventListener("click",function(e){e.preventDefault(),c.classList.add("modal-show"),k()}),r.addEventListener("submit",function(e){e.preventDefault(),r.innerHTML='<div class="sucess">Мы скоро отправим сертификат вам на почту!</div>'}));var w=function(e){e.target.closest(".modal").classList.remove("modal-show");let t=document.querySelectorAll(".blur");if(t)for(g=0;g<t.length;g++)t[g].classList.remove("blur")};for(g=0;g<d.length;g++){d[g].addEventListener("click",w,!1)}function S(){var e=0,t=0,s=$(".basket_tooltip-list");s.find("td.price").each(function(){e+=parseInt($(this).html())}),$(".amount-price span").html(e+" ₽"),s.find("input").each(function(e,s){(t+=parseInt($(s).val()))>9&&(t="+9")}),$(".order_item_count").html(t)}window.addEventListener("keydown",function(e){if(27===e.keyCode){let t=document.querySelectorAll(".blur"),s=document.querySelector(".modal-open"),i=document.querySelectorAll(".collapsed");for(g=0;g<t.length;g++)t[g].classList.remove("blur");for(g=0;g<i.length;g++)i[g].classList.remove("collapsed");for(g=0;g<u.length;g++)u[g].classList.contains("modal-show")&&(e.preventDefault(),u[g].classList.remove("modal-show"));s&&s.classList.remove("modal-open"),o.classList.contains("collapsed")&&o.classList.remove("collapsed"),o.classList.contains("right")&&o.classList.remove("right")}}),$(".course-details-btn").click(function(e){e.preventDefault();var t=$(this).next(".details").html(),s=$("body").find(".modal-course-details");$("body").addClass("modal-open"),s.addClass("modal-show"),s.find(".details").html(t),k(),$(".modal-close").click(function(){s.removeClass("modal-show"),$(".blur, body").removeClass("blur")})}),$(".appointment").click(function(e){e.preventDefault(),$(".modal-appointment").addClass("modal-show");var t=$(this).data("text");$("input[name=appointment]").val(t)}),$(".show-all-courses").click(function(e){e.preventDefault(),$(this).siblings(".courses-item").toggleClass("show"),$(this).toggleClass("show"),$(this).hasClass("show")?$(this).text("Скрыть курсы"):$(this).text("Посмтреть все курсы")}),$(".modal").click(function(e){$(e.target).hasClass("modal-show")&&($(e.target).removeClass("modal-show"),$(".blur").removeClass("blur"),$(".modal-open").removeClass("modal-open"))}),$(".tab-studio-info .tabs-studio-info > li a").click(function(e){e.preventDefault(),$(".tab-studio-info .tabs-studio-info > li a").removeClass("current"),$(this).addClass("current"),$(".tab-studio-content > div").hide(),t_content=$(this).attr("href"),$(t_content).show()}),$(".tab-studio-info .tabs-studio-info > li a:first").trigger("click"),$(".quantity button").click(function(e){e.preventDefault();var t,s=$(this).parent().find("input"),o=$(this),i=parseFloat(s.val()),l=o.parents(".goods__item").attr("data-element_id");t=o.hasClass("plus")?i<999?i+1:i:i>1?i-1:i,$('.goods__item[data-element_id="'+l+'"]').each(function(){var e=$(this).find("td.price");e.text(e.data("price")*t+" ₽")}),s.val(t).change(),S()}),$(".quantity.basket .goods__remove").click(function(e){if($(e.target).closest(".quantity.basket .goods__remove").length){e.stopPropagation(),e.preventDefault();var t=$(this).parents(".goods__item").attr("data-element_id");$('.goods__item[data-element_id="'+t+'"]').each(function(){$(this).remove()});var s=$(".tooltip_count span"),o=s.attr("data-count")-1;s.attr("data-count",o),o>0?s.text("В корзине еще "+o+" товаров"):s.text(""),S()}}),$(".product-thumb-list .product-thumb-item").click(function(){var e=$(this);$(".product-thumb-item.current").removeClass("current"),e.addClass("current");var t=$(".product-photo-item"),s=e.find("img").data("number");t.removeClass("current"),$(".product-photo-item").each(function(e){s==e&&$(this).addClass("current")})});var L,C,y=function(e){var t=document.querySelectorAll(".agency-info-list div");for(g=0;g<t.length;g++)t[g].classList.contains(e)?t[g].classList.add("show"):t[g].classList.remove("show")};function T(e){var t,s,o=[],i=$(e).children("option");$(e).hide(),$(i).each(function(){o.push($(this).html())}),$(e).after('<ul class="custom-select" data-selected-value="'+o[0]+'">'),(t=$(e).siblings(".custom-select")).append('<li class="selected-option"><span>'+o[0]+"</span>"),t.children(".selected-option").append('<ul class="options">'),(s=$(e).children("option:selected").text())&&t.find(".selected-option span").text(s);for(var l=1;l<o.length;l++)t.find(".options").append('<li class="'+$(i[l]).prop("class")+'">'+o[l]+"</li>");t.click(function(){$(this).toggleClass("open"),$(".options",this).toggleClass("open")}),t.find(".options li").click(function(){var s=$(this).text();if("#select-towns"===e){var o=$(this).prop("class");y(o)}for(var l=$(this).attr("data-value"),n=t.find(".selected-option span").text(s),a=1;a<i.length;a++)$(i[a]).text()===n.text()&&($(i[a]).attr("selected","true"),$(i[a]).siblings().removeAttr("selected"));t.attr("data-selected-value",l)})}function _(e){_=$(e).siblings(".custom-select"),$(_).click(function(){$(this).toggleClass("open"),$(this).next(".select-value").toggleClass("open")})}T("#select-category"),T("#select-collection"),T("#select-post"),T("#select-adress"),T("#select-status"),T("#select-towns"),function(e){var t,s=[],o=$(e).children("option");$(e).hide(),$(o).each(function(){s.push($(this).html())}),$(e).after('<ul class="custom-select">'),(t=$(e).siblings(".custom-select")).append('<li class="selected-option"><span>'+s[0]+"</span>"),t.after('<ul class="options">');for(var i=1;i<s.length;i++)t.next(".options").append('<li data-value="'+$(o[i]).val()+'"><i  class="'+$(o[i]).prop("class")+'" ></i></li>');function l(){t.find(".selected-option").html("<span>"+s[0]+"</span>");var o=$(e).children("option:selected");o.each(function(e){t.find(".selected-option span").append('<i class="'+$(o[e]).prop("class")+'"></i>')})}l(),t.click(function(){$(this).toggleClass("open"),$(this).next(".options").toggleClass("open"),$(this).next(".options.open").find("li").each(function(e){e++,$(o[e]).prop("selected")&&($(o[e]).prop("selected",!0),$(this).addClass("focus"))})}),t.next(".options").find("li").click(function(){for(var e=$(this).attr("data-value"),t=1;t<o.length;t++)$(o[t]).val()===e&&($(o[t]).prop("selected")?($(o[t]).prop("selected",!1),$(this).removeClass("focus"),l()):($(o[t]).prop("selected",!0),$(this).addClass("focus"),l()))})}("#select-color"),_("#select-price"),$(".purchase").click(function(e){e.preventDefault();var t=parseInt($(".amount-price span").html());$(e.target).hasClass("disabled")||alert("Заказ оформлен. Сумма заказа "+t)}),L=parseInt($(".amount-price span").html()),C=$(".comments-submit"),L<1500&&($(".notify-block, .notify-block-top, .price-min, .price-min-top").addClass("show"),C.addClass("disabled"),C.find("button").addClass("disabled")),$(".goods__absence").hasClass("absence")&&($(".notify-block, .goods-absence").addClass("show"),C.addClass("disabled"),C.find("button").addClass("disabled")),$(".change-adress").click(function(e){e.preventDefault();var t=$(".block-contacts input");t.prop("disabled",!1),$(e.target).hide(),$(".block-contacts").append('<div class="save-adress"><button class="change-apply button" href="#">Сохранить измененеия</button></div>'),console.log(t),$(".change-apply").click(function(e){e.preventDefault(),$(e.target).remove(),$(".change-adress").show();var t=$(".block-contacts input");t.prop("disabled",!0),console.log(t)})}),$(".tabs .tabs__link").click(function(){$(".tabs .tabs__link").removeClass("current"),$(this).addClass("current"),$(".tabs-content__item").hide();var e=$(this).attr("href");return $(e).show(),!1}),$(".tabs .tabs__link:first").trigger("click"),$(".show-all-order").click(function(e){e.preventDefault(),$(this).siblings(".order-item__goods-list").children(".inorder-good-item").each(function(e){e>3&&$(this).toggleClass("show")})});var q=document.querySelector(".remove-adress-link"),D=document.querySelector(".modal-remove-adress");(q||D)&&q.addEventListener("click",function(e){e.preventDefault(),D.classList.add("modal-show"),k()}),$("#recipient-other").prop("checked")&&$(".recipient-group .recipient-fio").show(),$('.recipient-group input[name="recipient"]').click(function(){var e=$(this).val(),t=$(".recipient-group .recipient-fio");"recipient-other"==e?t.show():t.hide()})}),$(function(){$(".regular").slick({dots:!0,infinite:!0,slidesToShow:4,slidesToScroll:3}),$(".catalog-list.carusel").slick({infinite:!0,slidesToShow:5,variableWidth:!1,centerMode:!1,cssEase:"linear",arrows:!1,responsive:[{breakpoint:992,settings:{slidesToShow:3,variableWidth:!0}},{breakpoint:768,settings:{slidesToShow:3,variableWidth:!0}},{breakpoint:576,settings:{slidesToShow:1,variableWidth:!0}}]}),$(".slider-list").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:992,settings:{arrows:!0}},{breakpoint:570,settings:{arrows:!1}}]}),$(".brand-list").slick({infinite:!1,slidesToShow:4,slidesToScroll:1,variableWidth:!0,arrows:!1,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:570,settings:{slidesToShow:1,arrows:!1}}]}),$(".service-carusel-list").slick({infinite:!1,slidesToShow:5,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:570,settings:{slidesToShow:1,arrows:!1}}]}),$(".test-number1").slick(),$(".number1, .number2, .number3").slick({fade:!0,asNavFor:".studio-carusel-list",responsive:[{breakpoint:991,settings:{arrows:!1}}]}),$(".studio-carusel-list").slick({slidesToShow:4,slidesToScroll:1,focusOnSelect:!0,asNavFor:".number1",arrows:!1,vertical:!0,responsive:[{breakpoint:570,settings:{vertical:!1}}]}),$(".comments-info-list, .partner-comments-info-list").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,draggable:!1,fade:!0,asNavFor:".comments-photo-list, .partner-comments-photo-list"}),$(".comments-photo-list, .partner-comments-photo-list").slick({slidesToShow:3,slidesToScroll:1,focusOnSelect:!0,asNavFor:".comments-info-list, .partner-comments-info-list",responsive:[{breakpoint:991,settings:{slidesToShow:1,fade:!0}},{breakpoint:570,settings:{slidesToShow:1,autoplay:!0,autoplaySpeed:3e3,arrows:!1,fade:!0}}]}),$(".stuff-carusel-list").slick({infinite:!1,slidesToShow:3,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:570,settings:{slidesToShow:1,arrows:!1}}]}),$(".students-work-list").slick({infinite:!1,slidesToShow:4,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:570,settings:{slidesToShow:1,arrows:!1}}]}),$(".shop-category-list").slick({infinite:!1,slidesToShow:6,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:991,settings:{slidesToShow:4,slidesToScroll:1,arrows:!1}},{breakpoint:570,settings:{slidesToShow:1,arrows:!1}}]})});
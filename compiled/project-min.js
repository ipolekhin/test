$(function(){var e=document.querySelector(".main-navigation"),s=document.querySelector(".back-toggler"),t=document.querySelector(".submenu-target"),o=document.querySelector(".navbar-toggler"),l=document.querySelector(".subscribe-link"),n=document.querySelector(".modal-subscribe"),a=document.querySelectorAll(".modal-close"),c=document.querySelectorAll(".modal"),r=document.querySelector(".subscribe-form"),d=document.querySelector("header"),u=document.querySelector("main"),h=document.querySelector("footer");t.addEventListener("click",function(e){e.preventDefault,window.innerWidth<992&&(this.nextElementSibling.classList.add("collapsed"),o.classList.add("right"))}),s.addEventListener("click",function(e){e.preventDefault(),s.parentElement.classList.remove("collapsed"),o.classList.remove("right")}),o.addEventListener("click",function(){if(o.classList.contains("collapsed")){o.classList.remove("collapsed"),e.classList.remove("collapsed");let s=document.querySelectorAll(".collapsed");for(i=0;i<s.length;i++)s[i].classList.remove("collapsed");o.classList.remove("right")}else o.classList.add("collapsed"),e.classList.add("collapsed")}),$(".search-string").on("focus",function(){$resultElement=$(".search_content"),$resultElement.toggle()}),$(document).on("click",function(e){$(e.target).closest(".search").length||$(".search_content").hide(),e.stopPropagation()});var p=document.querySelector(".search-string");function m(){d.classList.add("blur"),u.classList.add("blur"),h.classList.add("blur")}p.addEventListener("focus",function(){window.innerWidth>576&&window.innerWidth<992&&e.classList.add("opacityon")}),p.addEventListener("blur",function(){e.classList.remove("opacityon")}),$(".regular").slick({dots:!0,infinite:!0,slidesToShow:4,slidesToScroll:3}),$(".catalog-list.carusel").slick({infinite:!0,slidesToShow:5,variableWidth:!1,centerMode:!1,cssEase:"linear",arrows:!1,responsive:[{breakpoint:992,settings:{slidesToShow:3,variableWidth:!0}},{breakpoint:768,settings:{slidesToShow:3,variableWidth:!0}},{breakpoint:576,settings:{slidesToShow:1,variableWidth:!0}}]}),$(".slider-list").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:992,settings:{arrows:!0}},{breakpoint:570,settings:{arrows:!1}}]}),$(".brand-list").slick({infinite:!1,slidesToShow:4,slidesToScroll:1,variableWidth:!0,arrows:!1,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:570,settings:{slidesToShow:1,arrows:!1}}]}),$(".service-carusel-list").slick({infinite:!1,slidesToShow:5,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:570,settings:{slidesToShow:1,arrows:!1}}]}),$(".number1").slick({fade:!0}),$(".number2").slick({}),$(".number3").slick({}),$(".comments-info-list").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,draggable:!1,fade:!0,asNavFor:".comments-photo-list"}),$(".comments-photo-list").slick({slidesToShow:3,slidesToScroll:1,focusOnSelect:!0,asNavFor:".comments-info-list"}),$(".partner-comments-info-list").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,draggable:!1,fade:!0,asNavFor:".partner-comments-photo-list"}),$(".partner-comments-photo-list").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".partner-comments-info-list"}),$(".stuff-carusel-list").slick({infinite:!1,slidesToShow:3,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:570,settings:{slidesToShow:1,arrows:!1}}]}),$(".students-work-list").slick({infinite:!1,slidesToShow:4,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:570,settings:{slidesToShow:1,arrows:!1}}]}),$(".shop-category-list").slick({infinite:!1,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:570,settings:{slidesToShow:1,arrows:!1}}]}),l.addEventListener("click",function(e){e.preventDefault(),n.classList.add("modal-show"),m()});var f=function(e){e.target.closest(".modal").classList.remove("modal-show");let s=document.querySelectorAll(".blur");if(s)for(i=0;i<s.length;i++)s[i].classList.remove("blur")};for(i=0;i<a.length;i++){a[i].addEventListener("click",f,!1)}function v(e){var s,t=[],o=$(e).children("option");$(e).hide(),$(o).each(function(){t.push($(this).html())}),$(e).after('<ul class="custom-select" data-selected-value="'+t[0]+'">'),s=$(e).siblings(".custom-select"),$(s).append('<li class="selected-option"><span>'+t[0]+"</span>"),$(s).children(".selected-option").append('<ul class="options">');for(var i=1;i<t.length;i++)$(s).find(".options").append("<li data-value="+t[i]+">"+t[i]+"</li>");$(s).click(function(){$(this).toggleClass("open"),$(".options",this).toggleClass("open")}),$(s).find(".options li").click(function(){for(var e=$(this).text(),t=$(this).attr("data-value"),i=$(s).find(".selected-option span").text(e),l=1;l<o.length;l++)$(o[l]).text()===i.text()&&($(o[l]).attr("selected","true"),$(o[l]).siblings().removeAttr("selected"));$(s).attr("data-selected-value",t)})}function g(e){console.log("поехали"),g=$(e).siblings(".custom-select"),$(g).click(function(){$(this).toggleClass("open"),$(this).next(".select-price").toggleClass("open")})}r.addEventListener("submit",function(e){e.preventDefault(),console.log("отправить форму"),r.innerHTML='<div class="sucess">Спасибо, что Вы с Нами!</div>'}),window.addEventListener("keydown",function(e){if(27===e.keyCode){let s=document.querySelectorAll(".blur"),t=document.querySelector(".modal-open"),l=document.querySelectorAll(".collapsed");for(i=0;i<s.length;i++)s[i].classList.remove("blur");for(i=0;i<l.length;i++)l[i].classList.remove("collapsed");for(i=0;i<c.length;i++)c[i].classList.contains("modal-show")&&(e.preventDefault(),c[i].classList.remove("modal-show"));t&&t.classList.remove("modal-open"),o.classList.contains("collapsed")&&o.classList.remove("collapsed"),o.classList.contains("right")&&o.classList.remove("right")}}),$(".course-details-btn").click(function(){var e=$(this).next(".details").html(),s=$("body").find(".modal-course-details");$("body").addClass("modal-open"),s.addClass("modal-show"),s.children("div").html(e),m(),$(".modal-close").click(function(){s.removeClass("modal-show"),$(".blur, body").removeClass()})}),$(".modal").click(function(e){$(e.target).hasClass("modal-show")&&($(e.target).removeClass("modal-show"),$(".blur, .modal-open").removeClass())}),$(".tab-studio-info .tabs-studio-info > li a").click(function(){return $(".tab-studio-info .tabs-studio-info > li a").removeClass("current"),$(this).addClass("current"),$(".tab-studio-content > div").hide(),t_content=$(this).attr("href"),$(t_content).show(),!1}),$(".tab-studio-info .tabs-studio-info > li a:first").trigger("click"),$("#select-towns").change(function(){var e=this.value,s=document.querySelectorAll(".agency-info-list div");for(i=0;i<s.length;i++)s[i].classList.contains(e)?s[i].classList.add("show"):s[i].classList.remove("show")}),$(".quantity button").click(function(){var e,s=$(this).parent().find("input"),t=$(this),o=parseFloat(s.val());e=t.hasClass("plus")?o<99?o+1:o:o>1?o-1:o,s.val(e).change()}),$(".product-thumb-list .product-thumb-item").click(function(){var e=$(this);$(".product-thumb-item.current").removeClass("current"),e.addClass("current");var s=$(".product-photo-item"),t=e.find("img").data("number");s.removeClass("current"),$(".product-photo-item").each(function(e){t==e&&$(this).addClass("current")})}),v("#select-category"),v("#select-collection"),function(e){var s,t=[],o=$(e).children("option");$(e).hide(),$(o).each(function(){t.push($(this).html())}),$(e).after('<ul class="custom-select" data-selected-value="'+t[0]+'">'),s=$(e).siblings(".custom-select"),$(s).append('<li class="selected-option"><span>'+t[0]+"</span>"),$(s).after('<ul class="options">');for(var i=1;i<t.length;i++)$(s).next(".options").append('<li data-value="'+t[i]+'"><i  class="'+$(o[i]).prop("class")+'" ></i></li>');$(s).click(function(){$(this).toggleClass("open"),$(this).next(".options").toggleClass("open"),$(this).next(".options.open").find("li").each(function(e){e++,$(o[e]).prop("selected")&&($(o[e]).prop("selected",!0),$(this).addClass("focus"))})}),$(s).next(".options").find("li").click(function(){for(var e=$(this).attr("data-value"),s=1;s<o.length;s++)$(o[s]).text()===e&&($(o[s]).prop("selected")?($(o[s]).prop("selected",!1),$(this).removeClass("focus")):($(o[s]).prop("selected",!0),$(this).addClass("focus")))})}("#select-color"),g("#select-price")});
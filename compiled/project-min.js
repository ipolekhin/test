$(document).on("ready",function(){var e=document.querySelector(".main-navigation"),s=document.querySelector(".back-toggler"),t=document.querySelector(".submenu-target"),l=document.querySelector(".navbar-toggler"),o=document.querySelector(".modal-close"),n=document.querySelector(".subscribe-link"),c=document.querySelector(".modal-subscribe"),r=document.querySelector(".modal"),a=document.querySelector(".subscribe-form"),d=document.querySelector("header"),u=document.querySelector("main"),m=document.querySelector("footer");t.addEventListener("click",function(e){e.preventDefault,this.nextElementSibling.classList.add("collapsed"),l.classList.add("right")}),s.addEventListener("click",function(e){e.preventDefault(),s.parentElement.classList.remove("collapsed"),l.classList.remove("right")}),l.addEventListener("click",function(){if(l.classList.contains("collapsed")){l.classList.remove("collapsed"),e.classList.remove("collapsed");let s=document.querySelectorAll(".collapsed");for(i=0;i<s.length;i++)s[i].classList.remove("collapsed");l.classList.remove("right")}else l.classList.add("collapsed"),e.classList.add("collapsed")}),$(".search-string").on("focus",function(){$resultElement=$(".search_content"),$resultElement.toggle()}),$(document).on("click",function(e){$(e.target).closest(".search").length||$(".search_content").hide(),e.stopPropagation()});var v=document.querySelector(".search-string");v.addEventListener("focus",function(){window.innerWidth>576&&window.innerWidth<992&&e.classList.add("opacityon")}),v.addEventListener("blur",function(){e.classList.remove("opacityon")}),$(".regular").slick({dots:!0,infinite:!0,slidesToShow:4,slidesToScroll:3}),$(".catalog-list").slick({infinite:!0,slidesToShow:5,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:992,settings:{slidesToShow:3,variableWidth:!1}},{breakpoint:576,settings:{slidesToShow:2,variableWidth:!1}}]}),$(".slider-list").slick({infinite:!0,slidesToShow:1,slidesToScroll:1}),$(".brand-list").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:991,settings:{infinite:!0,slidesToShow:3,slidesToScroll:1}},{breakpoint:570,settings:{slidesToShow:2}}]}),n.addEventListener("click",function(e){e.preventDefault(),c.classList.add("modal-show"),d.classList.add("blur"),u.classList.add("blur"),m.classList.add("blur")}),o.addEventListener("click",function(e){e.preventDefault();let s=document.querySelectorAll(".blur");for(c.classList.remove("modal-show"),console.log(s),i=0;i<s.length;i++)s[i].classList.remove("blur")}),a.addEventListener("submit",function(e){e.preventDefault(),console.log("отправить форму"),a.innerHTML='<div class="sucess">Спасибо, что Вы с Нами!</div>'}),window.addEventListener("keydown",function(e){if(27===e.keyCode){let s=document.querySelectorAll(".blur"),t=document.querySelectorAll(".collapsed");for(i=0;i<s.length;i++)s[i].classList.remove("blur");for(i=0;i<t.length;i++)t[i].classList.remove("collapsed");r.classList.contains("modal-show")&&(e.preventDefault(),r.classList.remove("modal-show")),l.classList.contains("collapsed")&&l.classList.remove("collapsed"),l.classList.contains("right")&&l.classList.remove("right")}})});
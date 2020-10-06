
$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        dots:true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    });

    $('.news__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/left-arrows.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/right-arrow.svg"></img></button>'
    });

    $('.drop-down').on('click', function(){
        $('.drop-down__list').toggleClass('active-list');
      });

      $('.menu-btn').on('click', function(){
        $('.menu-btn__line, .menu').toggleClass('active');
      });
});


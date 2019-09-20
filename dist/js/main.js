$(document).ready(function(){
  $('.carousel__inner').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/prevArrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/nextArrow.svg"></button>',

  });
});
$(document).ready(function(){
  $('.carousel__inner').slick({
    centerMode: true,
    centerPadding: '80px',
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    variableWidth: true,
    variableHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/prevArrow.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/nextArrow.svg"></button>'

  });
});
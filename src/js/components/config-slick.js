$(document).ready(function(){

  // ——— winners slider ————————————————————————————————————————————————————————
  $('.js-slider-winners').not('.slick-initialized').slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        },
      },
    ],
  });

  // ——— promotions slider —————————————————————————————————————————————————————
  $('.js-slider-promo').not('.slick-initialized').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true
  });

});

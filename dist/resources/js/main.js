/*
 * Chosen jQuery plugin to add an image to the dropdown items.
 */
(function($) {
  $.fn.chosenImage = function(options) {
    return this.each(function() {
      var $select = $(this);
      var imgMap = {};

      // 1. Retrieve img-src from data attribute and build object of image sources for each list item.
      $select.find('option').filter(function() {
        return $(this).text();
      }).each(function(i) {
        imgMap[i] = $(this).attr('data-img-src');
      });

      // 2. Execute chosen plugin and get the newly created chosen container.
      $select.chosen(options);
      var $chosen = $select.next('.chosen-container').addClass('chosenImage-container');

      // 3. Style lis with image sources.
      $chosen.on('click.chosen, mousedown.chosen, keyup.chosen', function(event) {
        $chosen.find('.chosen-results li').each(function() {
          var imgIndex = $(this).attr('data-option-array-index');
          $(this).css(cssObj(imgMap[imgIndex]));
        });
      });

      // 4. Change image on chosen selected element when form changes.
      $select.change(function() {
        var imgSrc = $select.find('option:selected').attr('data-img-src') || '';
        $chosen.find('.chosen-single span').css(cssObj(imgSrc));
      });
      $select.trigger('change');

      // Utilties
      function cssObj(imgSrc) {
        var bgImg = (imgSrc) ? 'url(' + imgSrc + ')' : 'none';
        return {
          'background-image': bgImg
        };
      }
    });
  };
})(jQuery);

/*** configs ***/
$(document).ready(function() {
  $('.js-chosen-select').chosen({
    disable_search: true,
  });

  $(".js-chosen-image-select").chosenImage({
    disable_search: true,
  });
});

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

$(document).ready(function(){
  // open/hide mobile menu on click on burger menu
  $(document).on('click', '.js-burger-toggle', function clickOnBurgerToggler() {
    // close account-menu if opened
    if ($('.js-account-toggle').hasClass('account-toggle--opened')) {
      $('.js-account-toggle').removeClass('account-toggle--opened');
      $('.page-header__auth').removeClass('page-header__auth--opened');
      $('body').removeClass('hey-account');
    }
    // add classes for burger-menu
    $('body').toggleClass('hey-burger');
    $(this).toggleClass('burger-toggle--opened');
    $('.page-header__top').toggleClass('page-header__top--opened');
  });

  // open/hide mobile menu on click on account menu
  $(document).on('click', '.js-account-toggle', function clickOnAccountToggler() {
    // close burger-menu if opened
    if ($('.js-burger-toggle').hasClass('burger-toggle--opened')) {
      $('.js-burger-toggle').removeClass('burger-toggle--opened');
      $('.page-header__top').removeClass('page-header__top--opened');
      $('body').removeClass('hey-burger');
    }
    // add classes for account-menu
    $('body').toggleClass('hey-account');
    $(this).toggleClass('account-toggle--opened');
    $('.page-header__auth').toggleClass('page-header__auth--opened');
  });
});

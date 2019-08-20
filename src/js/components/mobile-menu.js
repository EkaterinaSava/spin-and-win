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

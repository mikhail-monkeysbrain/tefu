let 
  $navTrigger = $('.header--nav');

function _openNav () {
  $navTrigger.click(function () {
    $(this).toggleClass('header--nav__opened');
  })
}

$(document).ready(
  _openNav()
)
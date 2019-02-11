let $windowSize = $(window).width();

function _remSize () {
  let $rem = $(window).width() / 192;
  $('html').css('font-size', $rem + 'px');
  $('.sprite').css('zoom', $rem / 10);
}

function _remSizeResize () {
  $(window).resize(function () {
    _remSize()
  })
}

$(document).ready(
  _remSize(),
  _remSizeResize() 
);
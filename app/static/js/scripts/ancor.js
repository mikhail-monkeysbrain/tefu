let 
  $ancor = $('.jsAncor')
  body = $("html, body"),
  $headerHeight = $('.header').height();

function _ancor () {
  $ancor.click(function () {
    let 
      $hash = $(this).attr('href'),
      $target = $($hash)[0],
      $offset = $target.offsetTop - $headerHeight;
    body.stop().animate({
        scrollTop: $offset
      }, 500, 'swing')
  });
}

$(document).ready(
  _ancor()
)
function _tabs () {
  $('.amenities--tabs').tabs()
}

function _tabsSlick () {
  let 
    $countObject = $('.amenities--tabs__pseudo .amenities--tabs--item').length -1,
    $slider = $('.amenities--tabs__pseudo');


  $slider.slick({
    infinite: true,
    slidesToShow: $countObject,
    slidesToScroll: 1
  }).on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.amenities--tabs--list .amenities--tabs--item').eq(currentSlide).find('a').trigger('click')
  });

  $('.amenities--tabs__pseudo').on('click', '.amenities--tabs--item', function () {
    let $index = $(this).attr('data-slick-index');
    $slider.slick('slickGoTo', $index);
  })
}

$(document).ready(
  _tabs(),
  _tabsSlick()
)
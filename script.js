$(document).ready(function(){
  $('.slider').bxSlider({
    mode: 'horizontal',
    speed: 600,
    slideWidth: 300,
    slideHeight: 200,
    startSlide: 0,
    randomStart: false,
    infiniteLoop: true,
    pager:false,
    responsive: true,
    captions: true,
    auto: true,
    pause: 5000,
    controls: false,
  });
  });
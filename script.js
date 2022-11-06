var left_div = document.getElementById('tag');
var bottom_div = document.getElementById('text');
var right_div = document.getElementById('text2');

window.addEventListener('scroll', animation);

function animation(e) {
  var left_div_pos = left_div.offsetTop;
  var bottom_div_pos = bottom_div.offsetTop;
  var right_div_pos = right_div.offsetTop;

  var window_pos = window.pageYOffset;

  if (window_pos > left_div_pos - 10) {
    left_div.classList.add('header2-container');
    console.log('its working');
  }
  if (window_pos > bottom_div_pos - 10) {
    bottom_div.classList.add('text-box');
    console.log('its working');
  }
  if (window_pos > right_div_pos - 500) {
    right_div.classList.add('text-box2');
    console.log('Its working');
  }
}

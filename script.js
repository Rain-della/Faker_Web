var left_div = document.getElementById('tag');
var bottom_div = document.getElementById('text');

window.addEventListener('scroll', animation);

function animation(e) {
  var left_div_pos = left_div.offsetTop;
  var bottom_div_pos = bottom_div.offsetTop;

  var window_pos = window.pageYOffset;

  if (window_pos > left_div_pos - 10) {
    left_div.classList.add('header2-container');
    console.log("its working")
  }
  if (window_pos > bottom_div_pos - 10) {
    bottom_div.classList.add('text-box');
    console.log("its working")
  }
}

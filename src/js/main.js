// document.addEventListener('DOMContentLoaded', function() {
//
// });
//
// let prevScrollpos = window.pageYOffset;
//
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("elegant").style.top = "0";
//   } else {
//     document.getElementById("elegant").style.top = "-75px";
//   }
//
//   prevScrollpos = currentScrollPos;
// }

$(document).ready(function(){

  let prevScrollpos = $(window).scrollTop();

  $(window).scroll(function() {
    var currentScrollPos = $(window).scrollTop();

    console.log($(window).scrollTop());

    if(prevScrollpos > currentScrollPos) {
      $('#elegant').css('top', '0px');
    } else {
      $('#elegant').css('top', '-150px');
    }
  });

  // $('#card-group1').css('display', 'none');
  // $('#card-group1').delay(500).fadeIn(1000);

  // $('#section-group').css('display', 'none');
  // $('#section-background').delay(500).fadeIn(1000);
  // $('#card-one').delay(500).fadeIn(1000);
  // $('#card-two').delay(1000).fadeIn(1500);
  // $('#card-three').delay(1000).fadeIn(2000);
  // $('#card-four').delay(2000).fadeIn(2500);
});

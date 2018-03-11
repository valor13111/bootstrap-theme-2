// function parallax() {
//   var parallax_landing = document.getElementById('parallax-1');
//   parallax_landing.style.top = -(window.pageYOffset / 4) + 'px';
// }
//
// window.addEventListener("scroll", navbarScroll, false);

// document.addEventListener("DOMContentLoaded", function(event) {
//
//   let prevScrollpos = window.pageYOffset;
//
//   window.onscroll = function() {
//     event.console.log("HI");
//     var currentScrollPos = window.pageYOffset;
//     console.log("HIHIHI");
//
//     if (prevScrollpos > currentScrollPos) {
//       document.getElementById("elegant").style.top = "0";
//     } else {
//       document.getElementById("elegant").style.top = "-75px";
//     }
//
//     prevScrollpos = currentScrollPos;
//   }
//
// });

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// let prevScrollpos = window.pageYOffset;
//
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   console.log("HIHIHI");
//
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("elegant").style.top = "0";
//   } else {
//     document.getElementById("elegant").style.top = "-75px";
//   }
//
//   prevScrollpos = currentScrollPos;
// }

function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

ready(function(){
  let prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    event.console.log("HI");
    var currentScrollPos = window.pageYOffset;
    console.log("HIHIHI");

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("elegant").style.top = "0";
    } else {
      document.getElementById("elegant").style.top = "-75px";
    }

    prevScrollpos = currentScrollPos;
  }
});

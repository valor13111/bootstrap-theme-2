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
});

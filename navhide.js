$(document).ready(function() {
    var scrollTop = 0;
    $(window).scroll(function() {
      scrollTop = $(window).scrollTop();
      if (scrollTop >= 100) {
        $('.nav').addClass('nav-hide').removeClass('nav-show');
      } else if (scrollTop < 100) {
        $('.nav').addClass('nav-show').removeClass('nav-hide');
      }
    });
  
    // fügt das folgende hinzu:
    var lastScrollTop = 0;
    $(window).scroll(function() {
      var currentScrollTop = $(this).scrollTop();
      if (currentScrollTop < lastScrollTop) {
        $('.nav').addClass('nav-show').removeClass('nav-hide');
      }
      lastScrollTop = currentScrollTop;
    });
  });
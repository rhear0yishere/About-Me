


$( document ).ready(function() {

  

// Hamburger Nav Bar
  $('.fa-bars').on('click', function () {

    if ($(this).hasClass('active')) {

      $(this).removeClass('active');

      $('nav ul').slideUp();

    } else {

      $('#main-nav a').removeClass('active');

      $(this).addClass('active');

      $('nav ul').slideDown();

    }


  });


})










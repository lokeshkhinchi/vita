import $ from "jquery";
import { scrollspy } from 'bootstrap/js/dist/scrollspy';

export const toggleMenu = () => {
  $('.menu-icon').on( 'click', function() {
    $('header.left').toggleClass('open');
    $('.mobile-header, main.content').toggleClass('push');
  });
  
  $('main.content, header.left button.close, .nav-link ').on( 'click', function() {
    $('header.left').removeClass('open');
    $('.mobile-header, main.content').removeClass('push');
  });
}

export const bootScrollspy = () => {
  /*=========================================================================
  One Page Scroll with jQuery
  =========================================================================*/
  // $('.vertical-menu li a[href^="#"]:not([href="#"])').on('click', function(event) {
  //   console.log(event);
  // var $anchor = $(this);
  // $('html, body').stop().animate({
  //   scrollTop: $($anchor.attr('href')).offset().top-50
  // }, 800, 'easeInOutQuad');
  // event.preventDefault();
  // });

  /*=========================================================================
  Bootstrap Scrollspy
  =========================================================================*/
  $("body").scrollspy({ target: ".scrollspy", offset: 50});
}


/*=========================================================================
  Scroll to Top
=========================================================================*/
export const scrollTop = () => {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 250) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('#return-to-top').on('click', function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 400);
  });
}


/*=========================================================================
Background Image with Data Attribute
=========================================================================*/
export const backgroundImageDataAttribute = () => {
  let bg_img = document.getElementsByClassName('background');
  for (var i = 0; i < bg_img.length; i++) {
    var src = bg_img[i].getAttribute('data-image-src');
    bg_img[i].style.backgroundImage="url('" + src + "')";
  }
}

/*=========================================================================
Spacer with Data Attribute
=========================================================================*/

export const spacerDataAttribute = () => {
  var list = document.getElementsByClassName('spacer');
  for (var i = 0; i < list.length; i++) {
    var size = list[i].getAttribute('data-height');
    list[i].style.height = "" + size + "px";
  }
}


/*=========================================================================
            Carousels
=========================================================================*/
export const testimonialsSettings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    }
  ]
};

export const clientsSettings = {
  dots: false,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      }
    }
  ]
};

/*=========================================================================
Progress bar animation with Waypoint JS
=========================================================================*/
export const progressWaypoint = () => {
  if ($('.skill-item').length > 0) { 
    $('.progress-bar').each(function() {
      var bar_value = $(this).attr('aria-valuenow') + '%';                
      $(this).animate({ width: bar_value }, { easing: 'linear' });
    });
  }
}

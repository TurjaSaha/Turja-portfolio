//type js
var typed = new Typed('.type', {
    strings: [
      "Front-End-developer.",
       "UI/UX Designer.",
       "web designer."
       ],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
  });

  //service js
  
$('.services_slider').slick({
  dots: false,
  infinite: true,
  arrows : false,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

//test slider

$('.test_slider').slick({
  dots: false,
  infinite: true,
  arrows : false,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
//menu fixed
$(function(){
  var menuoffset =$("#custom_nav").offset().top;

  $(window).on('scroll', function(){

    var winscroll = $(window).scrollTop();

    if (winscroll > 0) {
      $('#custom_nav').addClass('menufixed');
    } else {
      $('#custom_nav').removeClass('menufixed');
    }

    
    //back to top
    
    if(winscroll > 1000){
      $(".backtop").fadeIn(1000);
    } else{
      $(".backtop").fadeOut(1000);
    }

  });
    
});

$(".backtop").on('click', function(){
  $("html,body").animate({
    scrollTop:0
  }, 1000);
});

//preloader

$(window).on('load',function(){
  $('.preloader_main').delay(1000).fadeOut(1000);
});

// scroll reveal

ScrollReveal({
  reset: true,
  delay: 500,
  duration:1500,
});

ScrollReveal().reveal('.navbar-brand',{
  reset: false,
  origin: 'right',
  delay: 600,
  distance : '160px',
});

ScrollReveal().reveal('.banner_heading',{
  origin: 'left',
  delay: 600,
  distance : '160px',
});

ScrollReveal().reveal('.banner_img',{
  origin: 'top',
  delay: 600,
  distance : '160px',
});

ScrollReveal().reveal('section h3',{
  origin: 'left',
  distance : '140px',
});

ScrollReveal().reveal('.about_left',{
  origin: 'bottom',
  distance : '160px',
});

ScrollReveal().reveal('.about_right',{
  origin: 'top',
  distance : '160px',
});

ScrollReveal().reveal('.services_slider, .port_all, .test_slider, .blog_all',{
  origin: 'bottom',
  distance : '100px',
 });

 ScrollReveal().reveal('.contact_left',{
  origin: 'bottom',
  distance : '100px',
});

ScrollReveal().reveal('.scroll_location',{
  origin: 'left',
  distance : '60px',
  delay: 400
})

;ScrollReveal().reveal('.scroll_phone',{
  origin: 'left',
  distance : '100px',
  delay: 600
})

;ScrollReveal().reveal('.scroll_mail',{
  origin: 'left',
  distance : '160px',
  delay: 800
});


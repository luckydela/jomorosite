 $(document).ready(function () {

  /*testimonil slider*/
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
     responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 543,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  /*blog slider*/
  $('.slider').slick({
    dots: false,
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: true,
     responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 543,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });


  /*screenshots js*/

  $('.autoplay').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
     responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });


  /*-- top button js start --*/

  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.top_button').fadeIn(500);
    } else {
      $('.top_button').fadeOut(500);
    }
  });
  $('.top_button').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
  /*-- top button js end --*/
  /*header fix*/
  function FixedHeaderTop() {
    var num = 112;
    if ($(document).width() >= 992) {
      $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
          $('.header').addClass('fixed');
        } else {
          $('.header').removeClass('fixed');
        }
      });
    } else {
      $('.header').removeClass('fixed');
    }
  }
  $(document).ready(function () {
    FixedHeaderTop();
  });
  $(window).resize(function () {
    FixedHeaderTop();
  });


  /*header fix end*/
  /*sidebar js*/

  $('#sidebarCollapse').on('click', function () {
    $(this).toggleClass('active');
  });

  $(document).on('click', function(event){
    var $trigger = $('#content');
    if($trigger !== event.target && !$trigger.has(event.target).length){
      $('#sidebarCollapse').removeClass('active');
    }            
  });
   $('#dismiss').on('click', function () {
     $('#sidebarCollapse').removeClass('active');
  });
  /*sidebar js end*/
  /*google map*/ 
  $(document).on("click", function(event){
    var $trigger = $(".google-map");
    if($trigger !== event.target && !$trigger.has(event.target).length){
     $(".map").fadeOut('slow');
     $(".google-map").css("height", "100px");
     $(".map-img").fadeIn('slow');
   }            
 });


  $(".map-img").click(function(){
    $(".google-map").css("height", "520px");
    $(".map").fadeIn('slow');
    $(".map-img").fadeOut('slow');

  });

  /*smooth scroll*/ 
  $('#sidebar ul li a , .contact-us-btn').click(function(){
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 700);
    return false;
  });

  /*blog-content*/
  $(".blog-btn").click(function(){
    $(".blog-contain.active" ).removeClass('active')
    $(this).closest( ".blog-contain" ).addClass('active')
  });

  $(document).on("click", function(event){
    var $trigger = $(".blog-contain");
    if($trigger !== event.target && !$trigger.has(event.target).length){
     $(".blog-contain" ).removeClass('active')
   }            
 });

});

 $(window).on('load', function(){ 
  $(".loaderdiv").removeClass("spinner");
});


/*tab-slider*/
 function vertslider() {
  $('.bxslider').bxSlider({
    mode: 'vertical',
    minSlides: 3,
    infiniteLoop: false,
    responsive: true,
    pager: false,
    infiniteLoop: false,
    responsive: true,
    navText : ["<a class='btn prev'><span class='txt'><i class='fa fa-angle-left'></i></span></a>","<a class='btn next'><span class='txt'><i class='fa fa-angle-right'></i></span></a>"],
    hideControlOnEnd: true, 
    moveSlides: 1
  });

}
 $(window).on('load', function(){ 
 vertslider();
});
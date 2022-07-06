

$(document).ready(function(){
    // one page nav plugin 
    $('#nav').onePageNav({
        currentClass: 'current',
        scrollSpeed: 950,
    });
    // Magnific image popup plugin
    $('.project-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true,
        }
    });
    //  Magnific video popup plugin
    $('.video-popup').magnificPopup({
        type:'iframe',
    });
    // counter up plugin
    $('.counter-up').counterUp({
        delay: 10,
        time: 1000
    });
    // slick slider plugin
      $('.banner-area').slick({
    slidesToShow: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
    dots: false,
    infinite: true,
    loop: true,
    autoplay: true,
  });

    // Testimonials slide
    $('.testimonials').slick({
        slidesToShow: 2,
        arrows:false,
        autoplay:true,
        infinite: true,
        loop: true,
        dots: true,
          responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
    });

    $('#nav').slicknav();
})

// sticky header js
$(window).on('scroll', function(){
    if($(this).scrollTop()>50){
        $('.header-area').addClass('sticky');
    }
    else {
        $('.header-area').removeClass('sticky');
    }
})


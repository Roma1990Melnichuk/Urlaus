$('.slyder__col').slick({
  responsive: [{
    
      breakpoint: 768,
      settings: {

        arrows: true,
        unslick: false,
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      }
    },

    {

      breakpoint: 1024,

      settings: {
        dots: false,
        unslick: false,
        centerMode: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: true,
        cssEase: 'linear'

      }
    },

  ]
});


// window.addEventListener("resize", function() {
//   if (window.innerWidth <= 768) {
//     $('slyder__col').slick('unslick');
//     sliderIsLive = false;
//   }
//   else {
//     if (sliderIsLive) {
//       $('slyder__col').slick();
//       sliderIsLive = true;
//     }
//   }
// });
$(document).ready(function(){
    $('.person__gallery').slick({
    
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '200px',
        arrows: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,
              centerMode: true,
              centerPadding: '80px',
              swipeToSlide: true,
              autoplay: true,
              autoplaySpeed: 2000
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,
              centerMode: true,
              centerPadding: '0px',
              swipeToSlide: true,
              autoplay: true,
              autoplaySpeed: 2000
            }
          }

   
        ]
      
      });

     $('.review').slick({
        infinite: true,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows: false,
        autoplay: true,
        centerMode: true,
       swipeToSlide: true,
      variableWidth: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,
              swipeToSlide: true,
              autoplaySpeed: 2000
            }
          }
   
        ]
      });



     $('.container--kv').slick({
      infinite: true,
  
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2500,
      arrows: false,
      autoplay: true,
      infinite: true, 
      centerMode: false,
       swipeToSlide: true,
      variableWidth: true
   });

      
  });

  
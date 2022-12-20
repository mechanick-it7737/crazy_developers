
$(document).ready(function () { 
  $('.slider').slick({
    arrows: true,
    adaptiveHight: false,
    slidesToShow:1,
    slidesToScroll: 1,
    spped: 1500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus:true, 
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: false,
    centerMode: true,
    variableWidth: true,

      responsive: [
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });
});
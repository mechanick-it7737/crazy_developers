$(document).ready(function () { 
  $('.slider').slick({
    arrows: true,
    adaptiveHight: true,
    slidesToShow:3,
    slidesToScroll: 1,
    spped: 1000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnFocus:true, 
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: false,
    centerMode:true,
    asNavFor: ".sliderbig"
  });

  $('.sliderbig').slick({
    arrows: false,
    fade: true,
    asNavFor:".slider"
})
});
const nextArrow = document.getElementsByClassName('arrow');
const prevArrow = document.getElementsByClassName('arrow2');

$(".owl-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause:true,
  smartSpeed: 1500,
  loop: true,
  margin: 10,
  items: 1,
  dots: true,
  nav: true,
  navText: [
    nextArrow,
    prevArrow
  ],
});

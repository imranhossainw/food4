
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }); 

    $('.counter').counterUp({
      delay: 1,
      time: 1000
  });
  
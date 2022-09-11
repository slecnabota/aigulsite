const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  slidesPerView: 3,

  spaceBetween: 30,

  slidesPerGroup: 1,

  autoplay: {
    delay: 2700,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },
  breakpoints:{
    320:{
    slidesPerView: 1,
    spaceBetween: 30,
    },
    992:{
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});

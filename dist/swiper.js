// <!-- Swiper JS -->

// <!-- Initialize Swiper Ist -->
const swiper = new Swiper(".swiper", {
    // slidesPerView: 4,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    // spaceBetween: 10,
    mousewheel: true,
    keyboard: true,
    cssMode: true,  breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 1020px
      1020: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },

    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },

    // grid: {
    //   rows: 1,
    // },
  });

// <!-- Initialize Swiper 2nd autoplay -->
const swipers = new Swiper(".swiper-autoplay", {
  spaceBetween: 10,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  mousewheel: true,
  keyboard: true,
  cssMode: true,
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1020px
    1020: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  // slidesPerView: 4,
  //   grid: {
  //     rows: 1,
  //   },
});

// <!-- Initialize Swiper 3rd -->

const swiperl = new Swiper(".swiperl", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  spaceBetween: 20,
  mousewheel: true,
  keyboard: true,
  cssMode: true,
  navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  slidesPerView: 4,
  grid: {
    rows: 1,
  },
});







  const swiperg = new Swiper(".mySwiperg", {
    direction: "vertical",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
      cssMode: true,
      loop: true,
      speed: 1200,
      effect: "slide", // Ensures smooth sliding
      easing: "ease-in-out", // Smooth easing
  });
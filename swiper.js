// <!-- Swiper JS -->

// <!-- Initialize Swiper Ist -->
const swiper = new Swiper(".swiper", {
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    mousewheel: true,
    keyboard: true,
    cssMode: true,
    breakpoints: {
      // when window width is >= 640px
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 1020px
      1020: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    spaceBetween: 20,

    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    slidesPerView: "auto",

    grid: {
      rows: 1,
    },
  });

// <!-- Initialize Swiper 2nd autoplay -->
const swipers = new Swiper(".swiper-autoplay", {
  // spaceBetween: 20,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  mousewheel: true,
  keyboard: true,
  cssMode: true,
  breakpoints: {
    // when window width is >= 640px
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 1020px
    1020: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  // slidesPerView: 4,
    grid: {
      rows: 1,
    },
});

// <!-- Initialize Swiper 3rd -->

const swiperl = new Swiper(".swiperl", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  // spaceBetween: 20,
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
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 1020px
    1020: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
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
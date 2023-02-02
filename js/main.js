// Drop Downs Menus
const dropBtns = document.querySelectorAll('.drop-btn')
const dropLists = document.querySelectorAll('.drop-list');

dropBtns.forEach(dropBtn => {
  dropBtn.addEventListener("click", (e) => {
    dropLists.forEach(dropList => {
      dropList.classList.remove("active")
    })
    e.target.nextElementSibling.classList.toggle("active")
  })
})

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains('drop-btn') && !e.target.classList.contains('drop-list')) {
    dropLists.forEach(dropLists => {
      dropLists.classList.remove('active');
    })
  } else {
    dropLists.forEach(dropList => {
      dropList.addEventListener("click", (e) => e.stopPropagation())
    })
  }
})

// Landing Swiper
var swiper = new Swiper(".swiper-landing", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  centeredSlides: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".news-swiper", {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1.5,
    slideShadows: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
    },
    "@0.75": {
      slidesPerView: 1,
    },
    "@1.00": {
      slidesPerView: 1.2,
    },
    "@1.50": {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".research-swiper", {
  spaceBetween: 20,
  loop: true,
  loopFillGroupWithBlank: true,
  centeredSlides: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },
    "@1.50": {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".books-swiper", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  speed: 1200,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1.90,
    },
    "@0.75": {
      slidesPerView: 3,
    },
    "@1.00": {
      slidesPerView: 3,
    },
    "@1.50": {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".meters-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 1800,
  parallax: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// initialize Bootstrap Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
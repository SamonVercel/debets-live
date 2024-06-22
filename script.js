var header = document.getElementById("header");
let allow = true;
window.addEventListener("scroll", function () {
  let y = window.scrollY;
  if (y > 80 && allow) {
    header.style.transition = "0.5s";
    header.style.top = "-180px";
    setTimeout(() => {
      header.classList.add("stick");
    }, 1);
    setTimeout(() => {
      header.style.position = "fixed";
      header.style.top = "0px";
      header.classList.remove("stick");
    }, 190);
    allow = false;
  }
  if (y == 0) {
    allow = true;
    header.style.position = "absolute";
    header.style.top = "0px";
  }
});

var closeIcon = document.getElementById("close-icon");
var menuBtn = document.getElementById("menu-btn");
var closeBtn = document.getElementById("close-btn");
var nav = document.getElementById("nav");

menuBtn.onclick = function () {
  nav.classList.add("show");
  closeIcon.classList.add("show");
};

closeBtn.onclick = function () {
  nav.classList.remove("show");
  closeIcon.classList.remove("show");
};

closeIcon.onclick = function () {
  nav.classList.remove("show");
  closeIcon.classList.remove("show");
};

// slide
var swiper = new Swiper(".cubeSwiper", {
  // effect: "cube",
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: true,
  interval: 1000,
  grabCursor: true,
  pauseOnMouseEnter: true,
});

var swiper = new Swiper(".cube", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: true,
  interval: 1000,
  grabCursor: true,
  pauseOnMouseEnter: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".cubeSwiper2", {
  slidesPerView: 2,
  spaceBetween: 30,
  freeMode: true,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  pagination: { el: ".swiper-pagination", clickable: true },
});

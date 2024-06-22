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

// aifix

var lBtns = document.querySelectorAll(".l-btn");
var contents = document.querySelectorAll(".content");

lBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("active");
      lBtns[i].classList.remove("active");
    }
    contents[index].classList.add("active");
    lBtns[index].classList.add("active");
  });
});

"use strict";
const musicPage = document.querySelector(".musicPage");
const musicsec = document.querySelector(".musicLine");
const videoSec = document.querySelector(".videoLine");
const tourLine = document.querySelector(".tourLine");
const vidoPage = document.querySelector(".videoPage");
const tourPage = document.querySelector(".tourPage");
// const sliders = document.querySelectorAll(".sliders");
// const btnLeft = document.querySelector(".leftbutton");
// const btnRight = document.querySelector(".rightbutton");

// ///////
musicPage.addEventListener("click", function () {
  musicsec.scrollIntoView({ behavior: "smooth" });
});
vidoPage.addEventListener("click", function () {
  videoSec.scrollIntoView({ behavior: "smooth" });
});
tourPage.addEventListener("click", function () {
  tourLine.scrollIntoView({ behavior: "smooth" });
});

//////////////////
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slider");
  const leftButton = document.querySelector(".leftbutton");
  const rightButton = document.querySelector(".rightbutton");

  if (!leftButton || !rightButton) {
    console.error("Navigation buttons not found.");
    return;
  }

  let index = 0;

  function updateSlider() {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    });
  }

  rightButton.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlider();
  });

  leftButton.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  });
});

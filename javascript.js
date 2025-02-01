"use strict";
const musicPage = document.querySelector(".musicPage");
const musicsec = document.querySelector(".musicLine");
const videoSec = document.querySelector(".videoLine");
const tourLine = document.querySelector(".tourLine");
const vidoPage = document.querySelector(".videoPage");
const tourPage = document.querySelector(".tourPage");
const slide = document.querySelectorAll(".slider");
const btnLeft = document.querySelector(".leftbutton");
const btnRight = document.querySelector(".rightbutton");

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

// let counter = 0;
// slide.forEach((slider, i) => {
//   slider.style.left = `${i * 100}%`;
// });

// function afterClick() {
//   slide.forEach((sli) => {
//     sli.style.transform = `translateX(-${counter * 100}%)`;
//   });
// }

// btnLeft.addEventListener("click", function () {
//   afterClick();
//   counter--;
// });
// btnRight.addEventListener("click", function () {
//   afterClick();
//   counter++;
// });

const slider1 = document.querySelector(".promo__slider-item-first");
const slider2 = document.querySelector(".promo__slider-item-second");
const slider3 = document.querySelector(".promo__slider-item-third");
const slider4 = document.querySelector(".promo__slider-item-fourth");
const slider5 = document.querySelector(".promo__slider-item-fifth");
const slider6 = document.querySelector(".promo__slider-item-sixth");
const openSliderButton1 = document.querySelector(
  ".promo__slider-toogle-button-first"
);
const openSliderButton2 = document.querySelector(
  ".promo__slider-toogle-button-second"
);
const openSliderButton3 = document.querySelector(
  ".promo__slider-toogle-button-third"
);
const openSliderButton4 = document.querySelector(
  ".promo__slider-toogle-button-fourth"
);
const openSliderButton5 = document.querySelector(
  ".promo__slider-toogle-button-fifth"
);
const openSliderButton6 = document.querySelector(
  ".promo__slider-toogle-button-sixth"
);

openSliderButton1.addEventListener("click", function () {
  slider1.classList.remove("visually-hidden");
  openSliderButton1.classList.add("promo__slider-toogle-button--current");
  slider2.classList.add("visually-hidden");
  openSliderButton2.classList.remove("promo__slider-toogle-button--current");
  slider3.classList.add("visually-hidden");
  openSliderButton3.classList.remove("promo__slider-toogle-button--current");
  slider4.classList.add("visually-hidden");
  openSliderButton4.classList.remove("promo__slider-toogle-button--current");
  slider5.classList.add("visually-hidden");
  openSliderButton5.classList.remove("promo__slider-toogle-button--current");
  slider6.classList.add("visually-hidden");
  openSliderButton6.classList.remove("promo__slider-toogle-button--current");
});

openSliderButton2.addEventListener("click", function () {
  slider1.classList.add("visually-hidden");
  openSliderButton1.classList.remove("promo__slider-toogle-button--current");
  slider2.classList.remove("visually-hidden");
  openSliderButton2.classList.add("promo__slider-toogle-button--current");
  slider3.classList.add("visually-hidden");
  openSliderButton3.classList.remove("promo__slider-toogle-button--current");
  slider4.classList.add("visually-hidden");
  openSliderButton4.classList.remove("promo__slider-toogle-button--current");
  slider5.classList.add("visually-hidden");
  openSliderButton5.classList.remove("promo__slider-toogle-button--current");
  slider6.classList.add("visually-hidden");
  openSliderButton6.classList.remove("promo__slider-toogle-button--current");
});

openSliderButton3.addEventListener("click", function () {
  slider1.classList.add("visually-hidden");
  openSliderButton1.classList.remove("promo__slider-toogle-button--current");
  slider2.classList.add("visually-hidden");
  openSliderButton2.classList.remove("promo__slider-toogle-button--current");
  slider3.classList.remove("visually-hidden");
  openSliderButton3.classList.add("promo__slider-toogle-button--current");
  slider4.classList.add("visually-hidden");
  openSliderButton4.classList.remove("promo__slider-toogle-button--current");
  slider5.classList.add("visually-hidden");
  openSliderButton5.classList.remove("promo__slider-toogle-button--current");
  slider6.classList.add("visually-hidden");
  openSliderButton6.classList.remove("promo__slider-toogle-button--current");
});

openSliderButton4.addEventListener("click", function () {
  slider1.classList.add("visually-hidden");
  openSliderButton1.classList.remove("promo__slider-toogle-button--current");
  slider2.classList.add("visually-hidden");
  openSliderButton2.classList.remove("promo__slider-toogle-button--current");
  slider3.classList.add("visually-hidden");
  openSliderButton3.classList.remove("promo__slider-toogle-button--current");
  slider4.classList.remove("visually-hidden");
  openSliderButton4.classList.add("promo__slider-toogle-button--current");
  slider5.classList.add("visually-hidden");
  openSliderButton5.classList.remove("promo__slider-toogle-button--current");
  slider6.classList.add("visually-hidden");
  openSliderButton6.classList.remove("promo__slider-toogle-button--current");
});

openSliderButton5.addEventListener("click", function () {
  slider1.classList.add("visually-hidden");
  openSliderButton1.classList.remove("promo__slider-toogle-button--current");
  slider2.classList.add("visually-hidden");
  openSliderButton2.classList.remove("promo__slider-toogle-button--current");
  slider3.classList.add("visually-hidden");
  openSliderButton3.classList.remove("promo__slider-toogle-button--current");
  slider4.classList.add("visually-hidden");
  openSliderButton4.classList.remove("promo__slider-toogle-button--current");
  slider5.classList.remove("visually-hidden");
  openSliderButton5.classList.add("promo__slider-toogle-button--current");
  slider6.classList.add("visually-hidden");
  openSliderButton6.classList.remove("promo__slider-toogle-button--current");
});

openSliderButton6.addEventListener("click", function () {
  slider1.classList.add("visually-hidden");
  openSliderButton1.classList.remove("promo__slider-toogle-button--current");
  slider2.classList.add("visually-hidden");
  openSliderButton2.classList.remove("promo__slider-toogle-button--current");
  slider3.classList.add("visually-hidden");
  openSliderButton3.classList.remove("promo__slider-toogle-button--current");
  slider4.classList.add("visually-hidden");
  openSliderButton4.classList.remove("promo__slider-toogle-button--current");
  slider5.classList.add("visually-hidden");
  openSliderButton5.classList.remove("promo__slider-toogle-button--current");
  slider6.classList.remove("visually-hidden");
  openSliderButton6.classList.add("promo__slider-toogle-button--current");
});

const navMenu = document.querySelector(".main-nav__menu");
const openMenu = document.querySelector(".main-nav__toggle");
const closeMenu = document.querySelector(".main-nav__menu-button-close");

navMenu.classList.remove("main-nav__menu--nojs");

openMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  navMenu.classList.toggle("main-nav__menu--show-menu");
});

closeMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  navMenu.classList.remove("main-nav__menu--show-menu");
});

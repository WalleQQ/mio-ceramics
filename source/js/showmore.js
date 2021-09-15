const showMoreButton = document.querySelector(".our-designs__button-show-more");

showMoreButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  document.querySelectorAll(".our-designs__item--hidden").forEach((e) => {
    e.classList.remove("visually-hidden");
  });
  showMoreButton.disabled = true;
});

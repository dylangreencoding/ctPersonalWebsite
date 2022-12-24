`use strict`;

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const myFace = document.getElementById(`my-face`);

const showModal = function() {
  modal.classList.remove(`hide`);
  overlay.classList.remove(`hide`);
};

const hideModal = function() {
  modal.classList.add(`hide`);
  overlay.classList.add(`hide`);
};

myFace.addEventListener(`click`, showModal);
overlay.addEventListener(`click`, hideModal);
modal.addEventListener(`click`, hideModal)
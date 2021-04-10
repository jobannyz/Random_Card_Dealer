/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  random_card();
};

function random_card() {
  let image = ["&#9824", "&#9827", "&#9829", "&#9830"];
  let random_image = Math.floor(Math.random() * 4);
  let random_number = Math.floor(Math.random() * 13 + 1);
  let card = document.getElementById("randomcard");
  let topimage = document.getElementById("topimage");
  let number = document.getElementById("number");
  let bottonimage = document.getElementById("bottomimage");

  topimage.innerHTML = image[random_image];
  bottomimage.innerHTML = image[random_image];

  if (random_image === 2 || random_image === 3) {
    card.style.color = "red";
  }

  if (random_number === 1) {
    number.innerHTML = "A";
  } else if (random_number === 11) {
    number.innerHTML = "J";
  } else if (random_number === 12) {
    number.innerHTML = "Q";
  } else if (random_number === 13) {
    number.innerHTML = "K";
  } else number.innerHTML = random_number;
}

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { left } from "@popperjs/core";

window.onload = function() {
  let randomCardValue = Math.floor(Math.random() * 13);
  const cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let randomCardSuits = Math.floor(Math.random() * 4);
  const cardSuits = ["♦", "♥", "♠", "♣"];
  let cardValue = document.querySelector(".cardValue");
  cardValue.innerHTML = cardValues[randomCardValue];
  let cardSuit = document.querySelectorAll("#suits");
  for (let index = 0; index < cardSuit.length; index++) {
    cardSuit[index].classList.add(cardSuits[randomCardSuits]);
    cardSuit[index].innerHTML = cardSuits[randomCardSuits];
  }
};

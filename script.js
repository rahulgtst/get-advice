"use strict";

const adviceId = document.querySelector("#adviceId");
const advice = document.querySelector("#advice");
const button = document.querySelector("button");

async function fetchAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const res = await response.json();
  return res.slip;
}

async function showAdvice() {
  let slip = await fetchAdvice();
  adviceId.textContent = slip.id;
  advice.textContent = `"${slip.advice}"`;
}

button.addEventListener("click", () => {
  showAdvice();
});

showAdvice();

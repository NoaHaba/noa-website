// Your JavaScript goes here
const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", function () {
  nav.classList.add("open");
});

closeButton.addEventListener("click", function () {
  nav.classList.remove("open");
});

// Greeting form
const greetingForm = document.querySelector("#greeting-form");
const firstName = document.querySelector("#first-name");

greetingForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("שלום, " + firstName.value);
});
//All elements
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");
const cartClose = document.getElementById("cart-close");

//Action handlers
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

cartBtn.addEventListener("click", () => {
  cart.classList.add("showCart");
});

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

cartClose.addEventListener("click", () => {
  cart.classList.remove("showCart");
});
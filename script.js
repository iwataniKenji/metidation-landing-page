// MOBILE NAVIGATION
const btn = document.querySelector(".mobile-nav-btn");
const header = document.querySelector(".nav");

btn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

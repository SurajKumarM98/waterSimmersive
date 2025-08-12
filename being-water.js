const mainHead = document.querySelector(".main-head");
const navLinks = document.querySelectorAll(".nav-link");
const video = document.querySelector(".showcase");
/*const hamburger = document.querySelector('.hamburger');*/
const mainMenu = document.querySelector(".main-menu");

window.addEventListener("scroll", function () {
  const videoHeight = video.offsetHeight;
  if (this.scrollY > videoHeight) {
    mainHead.classList.add("slidedown");
    mainHead.style.backgroundColor = "#fff";
    navLinks.forEach((link) => (link.style.color = "#000"));
    navLinks.forEach((link) => link.classList.add("black-underline"));
  } else {
    mainHead.classList.remove("slidedown");
    mainHead.style.backgroundColor = "transparent";
    navLinks.forEach((link) => (link.style.color = "#fff"));
    navLinks.forEach((link) => link.classList.remove("black-underline"));
  }
});

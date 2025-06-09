const mainHead = document.querySelector(".main-head");
const navLinks = document.querySelectorAll(".nav-link");
const video = document.querySelector(".background-video");
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

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 1. Remove "active" class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      // 2. Hide all tab contents
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });

      // 3. Add "active" class to the clicked button
      button.classList.add("active");

      // 4. Show the corresponding tab content
      const targetTab = button.getAttribute("data-tab");
      document.getElementById(targetTab).classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".pt-tab-button");
  const tabContents = document.querySelectorAll(".pt-tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-tab");

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("pt-active"));
      tabContents.forEach((content) => content.classList.remove("pt-active"));

      // Add active class to the clicked button and corresponding content
      this.classList.add("pt-active");
      document.getElementById(targetId).classList.add("pt-active");
    });
  });
});

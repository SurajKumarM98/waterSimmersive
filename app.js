const mainHead = document.querySelector('.main-head');
const navLinks = document.querySelectorAll('.nav-link');
const video = document.querySelector('.background-video');
/*const hamburger = document.querySelector('.hamburger');*/
const mainMenu = document.querySelector('.main-menu');

window.addEventListener('scroll', function() {
    const videoHeight = video.offsetHeight;
    if (this.scrollY > videoHeight) {
        mainHead.classList.add('slidedown');
        mainHead.style.backgroundColor = '#fff';
        navLinks.forEach(link => link.style.color = '#000');
        navLinks.forEach(link => link.classList.add('black-underline'));
    } else {
        mainHead.classList.remove('slidedown');
        mainHead.style.backgroundColor = 'transparent';
        navLinks.forEach(link => link.style.color = '#fff');
        navLinks.forEach(link => link.classList.remove('black-underline'));
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        // 1. Remove "active" class from all buttons
        tabButtons.forEach(btn => btn.classList.remove("active"));
  
        // 2. Hide all tab contents
        tabContents.forEach(content => {
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
  

/*
hamburger.addEventListener('click', function() {
    mainMenu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const videoHeight = document.querySelector('.background-video').offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > videoHeight) {
            navLinks.forEach(link => link.classList.add('black-underline'));
        } else {
            navLinks.forEach(link => link.classList.remove('black-underline'));
        }
    });
});
*/
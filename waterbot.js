const mainHead = document.querySelector(".main-head");
const navLinks = document.querySelectorAll(".nav-link");
const video = document.querySelector(".showcase");
const mainMenu = document.querySelector(".main-menu");

// Mobile navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.querySelector(".nav-menu");
  const navList = document.querySelector(".nav-list");
  
  // Create hamburger menu button
  const hamburger = document.createElement("div");
  hamburger.className = "hamburger";
  hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;
  
  // Insert hamburger before nav-menu
  navMenu.insertBefore(hamburger, navList);
  
  // Toggle mobile menu
  hamburger.addEventListener("click", function() {
    navList.classList.toggle("nav-active");
    hamburger.classList.toggle("hamburger-active");
  });
  
  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navList.classList.remove("nav-active");
      hamburger.classList.remove("hamburger-active");
    });
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener("click", function(e) {
    if (!navMenu.contains(e.target)) {
      navList.classList.remove("nav-active");
      hamburger.classList.remove("hamburger-active");
    }
  });
});

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

// Contact form functionality
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const airtableApiKey = "YOUR_API_KEY";
    const baseId = "YOUR_BASE_ID";
    const tableName = "YOUR_TABLE_NAME";

    const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;

    const data = {
      fields: {
        Name: name,
        Email: email,
        Message: message,
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${airtableApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending data.");
    }
  }); 
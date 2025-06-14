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

const teamRows = document.querySelectorAll(".proj-team-row");
const hoverImageContainer = document.getElementById("projTeamHoverImage");
const hoverImage = document.getElementById("projTeamHoverImg");

teamRows.forEach((row) => {
  row.addEventListener("mouseenter", () => {
    const imgSrc = row.getAttribute("data-img");
    hoverImage.src = imgSrc;
    row.classList.add("proj-team-underline");
    hoverImageContainer.style.display = "block";
  });

  row.addEventListener("mouseleave", () => {
    row.classList.remove("proj-team-underline");
    hoverImageContainer.style.display = "none";
  });
});

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

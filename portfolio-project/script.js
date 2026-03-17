// Mobile navigation toggle feature
const navToggleButton = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggleButton && siteNav) {
  navToggleButton.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });
}

// Basic contact form validation feature
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formFeedback.textContent = "Please complete all fields before submitting.";
      formFeedback.style.color = "#b91c1c";
      return;
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validEmail.test(email)) {
      formFeedback.textContent = "Please enter a valid email address.";
      formFeedback.style.color = "#b91c1c";
      return;
    }

    formFeedback.textContent =
      "Thank you! Your message has been validated and is ready to send.";
    formFeedback.style.color = "#047857";
    contactForm.reset();
  });
}

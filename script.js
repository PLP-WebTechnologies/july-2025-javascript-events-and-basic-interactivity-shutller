// ========== Part 1: Event Handling ==========
document.getElementById("clickBtn").addEventListener("click", function() {
  document.getElementById("clickMessage").textContent = "You clicked the button!";
});

// ========== Part 2: Interactive Elements ==========

// Dark/Light Mode Toggle
document.getElementById("modeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("increaseBtn").addEventListener("click", function() {
  count++;
  counterValue.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", function() {
  count = 0;
  counterValue.textContent = count;
});

// Collapsible FAQ
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", function() {
  faqAnswer.classList.toggle("hidden");
  this.querySelector("span").textContent = faqAnswer.classList.contains("hidden") ? "+" : "-";
});

// ========== Part 3: Form Validation ==========
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Grab inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error spans
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  let valid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation (min 6 chars)
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success message
  if (valid) {
    document.getElementById("formMessage").textContent = "🎉 Form submitted successfully!";
    this.reset(); // Clear form
  } else {
    document.getElementById("formMessage").textContent = "";
  }
});

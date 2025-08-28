document.addEventListener("DOMContentLoaded", () => {
  const htmlInput = document.getElementById("html-input");
  const htmlPreview = document.getElementById("html-preview");

  if (htmlInput && htmlPreview) {
    htmlInput.addEventListener("input", () => {
      htmlPreview.srcdoc = htmlInput.value;
    });
  }

  console.log("Full Stack Page Loaded Successfully!");
});


// =============================
// Registration Form Validation
// =============================
document
  .querySelector("#registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Clear all errors first
    document
      .querySelectorAll(".error")
      .forEach((el) => (el.style.display = "none"));

    // Name Validation
    const name = document.getElementById("name").value.trim();
    if (name.length < 3) {
      document.getElementById("name-error").style.display = "block";
      isValid = false;
    }

    // Email Validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("email-error").style.display = "block";
      isValid = false;
    }

    // Age Validation
    const age = parseInt(document.getElementById("age").value);
    if (age < 18 || age > 100) {
      document.getElementById("age-error").style.display = "block";
      isValid = false;
    }

    // Course Validation
    const course = document.querySelector('input[name="course"]:checked');
    if (!course) {
      document.getElementById("course-error").style.display = "block";
      isValid = false;
    }

    // Message Validation
    const message = document.getElementById("message").value.trim();
    if (message.length < 10) {
      document.getElementById("message-error").style.display = "block";
      isValid = false;
    }

    // Terms Validation
    const terms = document.getElementById("terms").checked;
    if (!terms) {
      document.getElementById("terms-error").style.display = "block";
      isValid = false;
    }

    // If valid -> success
    if (isValid) {
      alert("Form submitted successfully ✅");
      this.submit();
    }
  });


// =============================
// Live Age Display
// =============================
const ageSlider = document.getElementById("age");
const ageValue = document.getElementById("age-value");

ageSlider.addEventListener("input", function () {
  ageValue.textContent = this.value;
});


// =============================
// Mini Project: Interactive Tech Stack
// =============================
const stackParts = document.querySelectorAll(".stack-part");
const outputBox = document.getElementById("output");

stackParts.forEach((part) => {
  part.addEventListener("click", () => {
    const info = part.getAttribute("data-info");
    outputBox.textContent = info;

    // highlight selected part
    stackParts.forEach((p) => p.classList.remove("active-part"));
    part.classList.add("active-part");
  });
});


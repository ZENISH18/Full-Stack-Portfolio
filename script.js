// =============================
// HTML Editor (Preview)
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const htmlInput = document.getElementById("html-input");
  const htmlPreview = document.getElementById("html-preview");

  if (htmlInput && htmlPreview) {
    htmlInput.addEventListener("input", () => {
      htmlPreview.srcdoc = htmlInput.value;
    });
  }

  console.log("HTML Section Loaded Successfully!");
});

// =============================
// Image Controller (Rotation + Opacity)
// =============================
const img = document.getElementById("myImage");
const rotateSlider = document.getElementById("rotateSlider");
const opacitySlider = document.getElementById("opacitySlider");
const rotateVal = document.getElementById("rotateVal");
const opacityVal = document.getElementById("opacityVal");

// Rotate
if (rotateSlider && img) {
  rotateSlider.addEventListener("input", () => {
    let deg = rotateSlider.value;
    img.style.transform = `rotate(${deg}deg)`;
    if (rotateVal) rotateVal.textContent = deg;
  });
}

// Opacity
if (opacitySlider && img) {
  opacitySlider.addEventListener("input", () => {
    let op = opacitySlider.value;
    img.style.opacity = op;
    if (opacityVal) opacityVal.textContent = op;
  });
}

// =============================
// Mini Project: Interactive Pricing Table
// =============================
const pricingCards = document.querySelectorAll(".pricing-card");
const pricingOutput = document.getElementById("pricingOutput");

if (pricingCards.length > 0 && pricingOutput) {
  pricingCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Remove active from all
      pricingCards.forEach((c) => c.classList.remove("active-card"));

      // Add active to clicked
      card.classList.add("active-card");

      // Show selected plan info
      const plan = card.getAttribute("data-plan");
      const price = card.getAttribute("data-price");
      const features = card.getAttribute("data-features");

      pricingOutput.innerHTML = `
        <h3>${plan}</h3>
        <p>Price: ${price}</p>
        <p>Features: ${features}</p>
      `;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("CSS Mini Projects JS Loaded Successfully!");
});

// =============================
// Registration Form Validation
// =============================
const regForm = document.querySelector("#registrationForm");
if (regForm) {
  regForm.addEventListener("submit", function (e) {
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
}

// =============================
// Live Age Display
// =============================
const ageSlider = document.getElementById("age");
const ageValue = document.getElementById("age-value");
if (ageSlider && ageValue) {
  ageSlider.addEventListener("input", function () {
    ageValue.textContent = this.value;
  });
}

// =============================
// Mini Project: Interactive Tech Stack
// =============================
const stackParts = document.querySelectorAll(".stack-part");
const outputBox = document.getElementById("output");

if (stackParts.length > 0 && outputBox) {
  stackParts.forEach((part) => {
    part.addEventListener("click", () => {
      const info = part.getAttribute("data-info");
      outputBox.textContent = info;

      // highlight selected part
      stackParts.forEach((p) => p.classList.remove("active-part"));
      part.classList.add("active-part");
    });
  });
}

// =============================
// Weather App
// =============================
const weatherBtn = document.getElementById("getWeather");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

if (weatherBtn && cityInput && weatherResult) {
  weatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) {
      weatherResult.innerHTML =
        "<p style='color:red'>Please enter a city name.</p>";
      return;
    }

    try {
      // Step 1: Get city coordinates
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        weatherResult.innerHTML =
          "<p style='color:orange'>City not found. Try again.</p>";
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // Step 2: Fetch weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      if (weatherData.current_weather) {
        weatherResult.innerHTML = `
          <p><strong>Location:</strong> ${name}, ${country}</p>
          <p><strong>Temperature:</strong> ${weatherData.current_weather.temperature}°C</p>
          <p><strong>Wind:</strong> ${weatherData.current_weather.windspeed} km/h</p>
        `;
      } else {
        weatherResult.innerHTML =
          "<p style='color:orange'>Weather data not available.</p>";
      }
    } catch (err) {
      console.error(err);
      weatherResult.innerHTML =
        "<p style='color:red'>Error fetching weather.</p>";
    }
  });
}

// =============================
// To-Do List
// =============================
const addTaskBtn = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

if (addTaskBtn && taskInput && taskList) {
  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Toggle complete on click
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.className = "delete-btn";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      taskList.removeChild(li);
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  });
}

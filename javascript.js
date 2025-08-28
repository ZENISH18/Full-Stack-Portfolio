// -------- Weather App --------
const weatherBtn = document.getElementById("getWeather");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

weatherBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) {
    weatherResult.innerHTML =
      "<p style='color:red'>Please enter a city name.</p>";
    return;
  }

  try {
    const apiKey =
      "https://api.open-meteo.com/v1/forecast?latitude=27.7&longitude=85.3&current_weather=true";
    // Using Open-Meteo free API (no key required). Demo for Kathmandu.
    const response = await fetch(apiKey);
    const data = await response.json();

    if (data.current_weather) {
      weatherResult.innerHTML = `
        <p><strong>Location:</strong> ${city}</p>
        <p><strong>Temperature:</strong> ${data.current_weather.temperature}°C</p>
        <p><strong>Wind:</strong> ${data.current_weather.windspeed} km/h</p>
      `;
    } else {
      weatherResult.innerHTML =
        "<p style='color:orange'>Weather data not found.</p>";
    }
  } catch (err) {
    weatherResult.innerHTML =
      "<p style='color:red'>Error fetching weather.</p>";
  }
});

// -------- To-Do List --------
const addTaskBtn = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

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
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    taskList.removeChild(li);
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});

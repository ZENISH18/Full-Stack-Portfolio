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
    rotateVal.textContent = deg;
  });
}

// Opacity
if (opacitySlider && img) {
  opacitySlider.addEventListener("input", () => {
    let op = opacitySlider.value;
    img.style.opacity = op;
    opacityVal.textContent = op;
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

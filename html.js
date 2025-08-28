document.addEventListener("DOMContentLoaded", () => {
  const htmlInput = document.getElementById("html-input");
  const htmlPreview = document.getElementById("html-preview");

  htmlInput.addEventListener("input", () => {
    htmlPreview.srcdoc = htmlInput.value;
  });

  console.log("HTML Section Loaded Successfully!");
});

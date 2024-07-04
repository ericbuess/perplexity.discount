const themeToggle = document.getElementById("theme-toggle");
const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme = localStorage.getItem("theme");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeToggle.innerHTML =
    theme === "dark"
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
}

// Determine the initial theme
let initialTheme;
if (storedTheme) {
  initialTheme = storedTheme;
} else if (prefersDark) {
  initialTheme = "dark";
} else {
  initialTheme = "light"; // Default to light theme if no preference is found
}

setTheme(initialTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

function copyLink() {
  navigator.clipboard
    .writeText(document.querySelector(".link-text").textContent)
    .then(() => alert("Perplexity Pro discount link copied to clipboard!"))
    .catch((err) => console.error("Failed to copy: ", err));
}

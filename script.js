const themeToggle = document.getElementById("theme-toggle");
const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme = localStorage.getItem("theme");

function setTheme(isDark) {
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light"
  );
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
}

setTheme(storedTheme === "dark" || (storedTheme === null && prefersDark));

themeToggle.addEventListener("click", () =>
  setTheme(document.documentElement.getAttribute("data-theme") !== "dark")
);

function copyLink() {
  navigator.clipboard
    .writeText(document.querySelector(".link-text").textContent)
    .then(() => alert("Perplexity Pro discount link copied to clipboard!"))
    .catch((err) => console.error("Failed to copy: ", err));
}

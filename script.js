// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme") || "light";
document.body.classList.toggle("dark-theme", savedTheme === "dark");

// Update icon based on current theme
function updateIcon() {
  const isDark = document.body.classList.contains("dark-theme");
  themeToggle.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
}

// Add click event listener
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Update icon
  updateIcon();
});

// Initialize icon
updateIcon();

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

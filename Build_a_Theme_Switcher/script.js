// Theme table with her message
const themes = [
  {
    name: "light",
    message: "Vous avez changé pour le thème clair.",
  },
  {
    name: "dark",
    message: "Vous avez changé pour le thème sombre.",
  },
  {
    name: "blue",
    message: "Vous avez changé pour le thème bleu électrique.",
  },
  {
    name: "fire-red",
    message: "Vous avez changé pour le thème rouge feu.",
  },
];

// Retrieve DOM Elements
const themeSwitcherButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const themeMessage = document.getElementById("theme-message");
const themeItems = document.querySelectorAll("#theme-dropdown li");

// Function for toggle the dropdown display
function toggleDropdown() {
  const isHidden = themeDropdown.hasAttribute("hidden");

  if (isHidden) {
    // Open the dropdown
    themeDropdown.removeAttribute("hidden");
    themeSwitcherButton.setAttribute("aria-expanded", "true");
  } else {
    //Close the dropdown
    themeDropdown.setAttribute("hidden", "");
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  }
}

// Function for change theme
function changeTheme(ThemeName) {
  // Remove all existing theme classes from the body
  document.body.classList.remove(
    "theme-light",
    "theme-dark",
    "theme-blue",
    "theme-fire-red"
  );

  // Add the newest theme class
  document.body.classList.add(`theme-${ThemeName}`);

  // Find the corresponding message in the themes table
  const selectedTheme = themes.find((theme) => theme.name === ThemeName);

  // Display the message in aria-live element
  if (selectedTheme) {
    themeMessage.textContent = selectedTheme.message;
  }

  // Close the dropdown
  themeDropdown.setAttribute("hidden", "");
  themeSwitcherButton.setAttribute("aria-expanded", "false");
}

// Event click on the main button
themeSwitcherButton.addEventListener("click", toggleDropdown);

// Event click on each element theme
themeItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    // Retrieve the theme name from the Id (remove the "theme-" prefix)
    const themeId = e.target.id.replace("theme-", "");
    changeTheme(themeId);
  });
});

// Keyboard key management accessibility
themeSwitcherButton.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "Enter" || e.key === "") {
    e.preventDefault;
    toggleDropdown();
    if (!themeDropdown.hasAttribute("hidden")) {
      themeItems[0].focus();
    }
  }
});

// Navigation with keyboard in the dropdown
themeItems.forEach((item, index) => {
  item.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault;
        const nextIndex = index < themeItems.length - 1 ? index + 1 : 0;
        themeIndex[index].focus();
        break;
      case "Enter":
      case "":
        e.preventDefault;
        const themeId = item.id.replace("theme-", "");
        changeTheme(themeId);
        themeSwitcherButton.focus();
        break;
      case "Escape":
        themeDropdown.setAttribute("hidden", "");
        themeSwitcherButton.setAttribute("aria-expanded", "false");
        themeSwitcherButton.focus();
        break;
    }
  });
});

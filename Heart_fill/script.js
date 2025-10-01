// Sélectionner tous les boutons cœur
const favoriteButtons = document.querySelectorAll(".favorite-icon");

// Ajouter un événement click sur chaque bouton
favoriteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("filled")) {
      // retirer la classe filled et remettre le cœur vide
      button.classList.remove("filled");
      button.innerHTML = "&#9825;"; // cœur vide
    } else {
      // ajouter la classe filled et mettre le cœur rempli
      button.classList.add("filled");
      button.innerHTML = "&#10084;"; // cœur rempli
    }
  });
});

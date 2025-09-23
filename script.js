const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

// Ouvrir la lightbox
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const fullSrc = item.src.replace("-thumbnail", "");
    lightboxImage.src = fullSrc;
    lightbox.style.display = "flex";
  });
});

// Fermer la lightbox avec le bouton
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Fermer la lightbox en cliquant sur l'arrière-plan
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

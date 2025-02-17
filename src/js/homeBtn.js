let lastScrollY = window.scrollY; // Position initiale du scroll

if (
  window.location.pathname !== "/" ||
  !window.location.includes("/index.html")
) {
  const boutonAccueil = document.querySelector(".bouton-accueil");

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      // Toujours visible en haut de la page
      boutonAccueil.style.transform = "translateY(0)";
      boutonAccueil.style.opacity = "1";
    } else if (currentScrollY > lastScrollY) {
      // Cache le bouton en scrollant vers le bas
      boutonAccueil.style.transform = "translateY(-100%)";
      boutonAccueil.style.opacity = "0";
    } else {
      // Affiche le bouton en scrollant vers le haut
      boutonAccueil.style.transform = "translateY(0)";
      boutonAccueil.style.opacity = "1";
    }

    lastScrollY = currentScrollY;
  });
}
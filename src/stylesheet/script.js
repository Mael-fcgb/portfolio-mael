document.addEventListener("scroll", () => {
  const navigation = document.querySelector(".naviguation"); // Sélectionne la bonne classe

  if (navigation) {
      const rect = navigation.getBoundingClientRect();

      if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          document.body.style.backgroundColor = "black"; // Applique le fond noir
      } else {
          document.body.style.backgroundColor = "white"; // Applique le fond blanc
      }
  }
});

let targetScroll = window.scrollY; // Position cible du défilement
let currentScroll = window.scrollY; // Position actuelle
let scrollSpeed = 12; // Ajuste pour contrôler la fluidité (plus bas = plus lent)

function smoothScroll() {
    // Interpolation progressive
    currentScroll += (targetScroll - currentScroll) * scrollSpeed;

    // Applique la position lissée
    window.scrollTo(0, currentScroll);

    // Continue l'animation tant que la différence est significative
    if (Math.abs(targetScroll - currentScroll) > 0.5) {
        requestAnimationFrame(smoothScroll);
    }
}

// Écouteur pour capturer le défilement
window.addEventListener('wheel', (event) => {
    targetScroll += event.deltaY; // Mise à jour de la position cible
    if (!scrolling) {
        requestAnimationFrame(smoothScroll);
    }
});

// Écouteur pour interactions tactiles ou clavier
window.addEventListener('scroll', () => {
    targetScroll = window.scrollY; // Synchronise la position cible avec les autres interactions
});







// Sélectionne tous les éléments avec la classe "job"
const jobs = document.querySelectorAll('.job');

function checkPosition() {
    jobs.forEach((job) => {
        const rect = job.getBoundingClientRect(); // Position de l'élément par rapport au viewport
        const windowHeight = window.innerHeight;

        // Vérifie si l'élément est proche du centre de la fenêtre
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            job.classList.add('in-view'); // Applique la classe "in-view"
        } else {
            job.classList.remove('in-view'); // Retire la classe "in-view"
        }
    });
}

// Écoute l'événement de défilement
window.addEventListener('scroll', checkPosition);

// Vérifie la position au chargement initial
checkPosition();

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".buton"); // Sélectionne le bouton

    // Ajoute la classe 'hovered' au survol
    button.addEventListener("mouseenter", () => {
        button.classList.add("hovered");
    });

    // Retire la classe 'hovered' quand la souris quitte le bouton
    button.addEventListener("mouseleave", () => {
        button.classList.remove("hovered");
    });
});

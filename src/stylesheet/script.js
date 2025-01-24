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


let lastScrollY = window.scrollY; // Position initiale du scroll
const boutonAccueil = document.querySelector('.bouton-accueil');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
        // Toujours visible en haut de la page
        boutonAccueil.style.transform = 'translateY(0)';
        boutonAccueil.style.opacity = '1';
    } else if (currentScrollY > lastScrollY) {
        // Cache le bouton en scrollant vers le bas
        boutonAccueil.style.transform = 'translateY(-100%)';
        boutonAccueil.style.opacity = '0';
    } else {
        // Affiche le bouton en scrollant vers le haut
        boutonAccueil.style.transform = 'translateY(0)';
        boutonAccueil.style.opacity = '1';
    }

    lastScrollY = currentScrollY;
});



const vinylTitle = document.querySelector('.vinyl-title');
const photoVinyl = document.querySelector('#photoVinyl');

function adjustClipPath() {
    const titleRect = vinylTitle.getBoundingClientRect();
    const photoRect = photoVinyl.getBoundingClientRect();

    // Vérifie si le texte chevauche l'image
    if (
        titleRect.bottom > photoRect.top &&
        titleRect.top < photoRect.bottom &&
        titleRect.right > photoRect.left &&
        titleRect.left < photoRect.right
    ) {
        const overlapLeft = Math.max(photoRect.left - titleRect.left, 0);
        const overlapRight = Math.max(titleRect.right - photoRect.right, 0);

        const clipPath = `inset(0 ${overlapRight}px 0 ${overlapLeft}px)`;
        vinylTitle.style.setProperty('--clip-path', clipPath);
    } else {
        // Réinitialise le masque si aucun chevauchement
        vinylTitle.style.setProperty('--clip-path', 'inset(0 100% 0 0)');
    }
}

// Appliquer au chargement, défilement et redimensionnement
window.addEventListener('scroll', adjustClipPath);
window.addEventListener('resize', adjustClipPath);
adjustClipPath();




document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const video = document.getElementById("loader-video");

  video.onended = () => {
      loader.classList.add("hidden");
      setTimeout(() => {
          loader.style.display = "none";
      }, 800);
  };
});



document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

document.addEventListener("scroll", () => {
  const navigation = document.querySelector(".naviguation");
  const contact = document.querySelector(".contact");
  const jobList = document.querySelector(".job-list");

  let isNavigationVisible = false;
  let isContactVisible = false;
  let isJobListCentered = false;

  if (navigation) {
    const rectNav = navigation.getBoundingClientRect();
    isNavigationVisible =
      rectNav.top < window.innerHeight / 2 && rectNav.bottom > window.innerHeight / 3;
  }

  if (contact) {
    const rectContact = contact.getBoundingClientRect();
    isContactVisible =
      rectContact.top < window.innerHeight / 2 && rectContact.bottom > window.innerHeight / 3;
  }

  if (jobList) {
    const rectJob = jobList.getBoundingClientRect();
    isJobListCentered =
      rectJob.top <= window.innerHeight / 2 && rectJob.bottom >= window.innerHeight / 2;
  }

  if ((isNavigationVisible || isContactVisible) && !isJobListCentered) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
});

// Sélectionne tous les éléments avec la classe "job"
const jobs = document.querySelectorAll(".job");

function checkPosition() {
  jobs.forEach((job) => {
    const rect = job.getBoundingClientRect(); // Position de l'élément par rapport au viewport
    const windowHeight = window.innerHeight;

    // Vérifie si l'élément est proche du centre de la fenêtre
    if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
      job.classList.add("in-view"); // Applique la classe "in-view"
    } else {
      job.classList.remove("in-view"); // Retire la classe "in-view"
    }
  });
}

// Écoute l'événement de défilement
window.addEventListener("scroll", checkPosition);

// Vérifie la position au chargement initial
checkPosition();

if (window.location.pathname === "/projets")
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
const vinylTitle = document.querySelector(".vinyl-title");
const photoVinyl = document.querySelector("#photoVinyl");

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
    vinylTitle.style.setProperty("--clip-path", clipPath);
  } else {
    // Réinitialise le masque si aucun chevauchement
    vinylTitle.style.setProperty("--clip-path", "inset(0 100% 0 0)");
  }
}

// Appliquer au chargement, défilement et redimensionnement
window.addEventListener("scroll", adjustClipPath);
window.addEventListener("resize", adjustClipPath);
adjustClipPath();

const cursor = document.querySelector(".custom-cursor");
const cursorText = cursor.querySelector("span");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

document.addEventListener("mouseenter", () => {
  cursor.style.opacity = "1";
});

document.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0";
});

// Optionnel : Afficher du texte contextuel
document.querySelectorAll("a, button").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursorText.innerText = "Comptez-moi"; // Texte affiché
    cursorText.style.opacity = "1";
  });

  element.addEventListener("mouseleave", () => {
    cursorText.innerText = "";
    cursorText.style.opacity = "0";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navContact = document.querySelector(".naviguation a[href='#contact']");
  const contactSection = document.querySelector("#contact");

  if (navContact && contactSection) {
    navContact.addEventListener("click", (event) => {
      event.preventDefault(); // Empêche le comportement par défaut du lien
      contactSection.scrollIntoView({ behavior: "smooth" }); // Défilement fluide
    });
  }
});

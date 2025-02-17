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
  
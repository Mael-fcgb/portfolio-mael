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

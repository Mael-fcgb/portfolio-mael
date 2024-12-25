const textElement = document.querySelector('.subtitle');

// Fonction pour définir une couleur inversée
function invertColor(hex) {
  const color = hex.replace('#', '');
  const r = 255 - parseInt(color.substring(0, 2), 16);
  const g = 255 - parseInt(color.substring(2, 4), 16);
  const b = 255 - parseInt(color.substring(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

// Exemple pour modifier la couleur (ajuster selon vos besoins)
textElement.style.color = invertColor('#000000'); // Couleur d'origine à inverser

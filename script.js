// Récupère le toggle switch
const themeToggle = document.getElementById('theme-toggle');

// Lors du chargement de la page, on vérifie si un thème est sauvegardé
window.onload = function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    const isDarkMode = savedTheme === 'dark';
    themeToggle.checked = isDarkMode; // Mettre à jour l'état du toggle
    applyTheme(isDarkMode); // Appliquer le thème sauvegardé
  } else {
    // Si aucun thème n'est sauvegardé, définir un thème par défaut (clair)
    applyTheme(false);
  }
};

// Ajoute un gestionnaire d'événements pour le changement d'état du checkbox
themeToggle.addEventListener('change', () => {
  const isDarkMode = themeToggle.checked;

  // Applique le thème choisi et sauvegarde l'état dans localStorage
  applyTheme(isDarkMode);
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Fonction principale pour appliquer le thème
function applyTheme(isDarkMode) {
  const body = document.body;

  if (isDarkMode) {
    // Mode sombre
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    changeTextColor('white');
    changeButtonColor('white');
    changeMenuColor('white');
    changeSpanColor('white');
  } else {
    // Mode clair
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    changeTextColor('black');
    changeButtonColor('black');
    changeMenuColor('black');
    changeSpanColor('black');
  }
}

// Fonction pour changer la couleur du texte des balises
function changeTextColor(color) {
  // Sélectionne toutes les balises à modifier
  const textElements = document.querySelectorAll('p, h1, h2, h3, h4 input');

  // Applique la couleur à chaque élément
  textElements.forEach(element => {
    element.style.color = color;

    });
    }



// Fonction pour changer la couleur des boutons
function changeButtonColor(color) {
  const buttons = document.getElementsByClassName('menu_button');

  // Convertir HTMLCollection en tableau et appliquer les styles
  Array.from(buttons).forEach(button => {
    if (color === 'black') {
      button.classList.add('light_mode');
      button.classList.remove('dark_mode');
    } else {
      button.classList.add('dark_mode');
      button.classList.remove('light_mode');
    }
  });

  const button2 = document.getElementById('button_menu');
  if (button2) {
    if (color === 'black') {
      button2.style.backgroundColor = 'white';
    } else {
      button2.style.backgroundColor = 'black';
    }
  }
}

// Fonction pour changer la couleur des éléments de menu
function changeMenuColor(color) {
  const menuItems = document.querySelector('menu');

  // Applique les couleurs au menu
  if (menuItems) {
    menuItems.style.color = color;
    menuItems.style.borderBottom = color === 'black' ? '1px solid black' : '1px solid white';
  }
}

function changeSpanColor(color) {
  const span = document.getElementsByClassName('span');
    Array.from(span).forEach(element => {
        element.style.borderBottom = '1px solid ' + color;
    });
}

// Nur ein Ziel gleichzeitig geöffnet halten (Akkordeon-Verhalten)
document.addEventListener('DOMContentLoaded', () => {
  const goals = document.querySelectorAll('.goal');
  goals.forEach((goal) => {
    goal.addEventListener('toggle', () => {
      if (goal.open) {
        goals.forEach((other) => {
          if (other !== goal) other.open = false;
        });
      }
    });
  });
});

// Dark Mode / Light Mode umschalten
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  const updateButtonState = () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    toggle.setAttribute('aria-pressed', String(isLight));
  };
  updateButtonState();

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('4dfence-theme', next);
    updateButtonState();
  });
});

// Netzwerktopologie Popup
document.addEventListener('DOMContentLoaded', () => {

  const modal = document.getElementById('topology-modal');
  const openButton = document.getElementById('open-topology');
  const closeButton = document.getElementById('close-topology');

  if (!modal || !openButton || !closeButton) return;

  // Popup öffnen
  openButton.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Popup schließen
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeButton.addEventListener('click', closeModal);

  // Klick auf dunklen Hintergrund schließt Popup
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // ESC-Taste schließt Popup
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

});

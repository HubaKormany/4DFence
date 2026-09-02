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

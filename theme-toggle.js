function setThemeIcon(isDark) {
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = isDark ? '🌞' : '🌙';
}

function applySavedTheme() {
  const isDark = localStorage.getItem('theme') === 'dark';
  document.body.classList.toggle('dark', isDark);
  setThemeIcon(isDark);
}

function initThemeToggle() {
  applySavedTheme();
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      setThemeIcon(isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
}

// Ждём появления кнопки после загрузки header.html
let observer = new MutationObserver(() => {
  if (document.getElementById('theme-toggle')) {
    initThemeToggle();
    observer.disconnect();
  }
});
observer.observe(document.body, { childList: true, subtree: true });

// Если header уже на странице (например, без fetch), инициализируем сразу
if (document.getElementById('theme-toggle')) initThemeToggle();

document.querySelectorAll('.scroll-btn').forEach(button => {
  button.addEventListener('click', () => {
    const container = button.parentElement.querySelector('.social-links');
    const scrollAmount = 120;
    if (button.classList.contains('left')) {
      container.scrollBy({left: -scrollAmount, behavior: 'smooth'});
    } else {
      container.scrollBy({left: scrollAmount, behavior: 'smooth'});
    }
  });
});

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

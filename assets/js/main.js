const cards = document.querySelectorAll('.card, .metrics article, .hero-card');
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }
}, { threshold: 0.12 });
cards.forEach(card => observer.observe(card));

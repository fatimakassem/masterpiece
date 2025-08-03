// Observer for animate-left and animate-right
const animationObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        animationObserver.unobserve(entry.target);  // only once
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.animate-left, .animate-right')
        .forEach(el => animationObserver.observe(el));

// Toggle gallery functionality
document.getElementById('toggleGallery').addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('artGallery').classList.toggle('show');
});

// Observer for scroll-fade elements
const scrollFadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.scroll-fade')
        .forEach(el => scrollFadeObserver.observe(el));
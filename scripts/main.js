// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Scroll fade-in animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100", "translate-y-0");
      entry.target.classList.remove("opacity-0", "translate-y-4");
    }
  });
}, {
  threshold: 0.1
});

// Apply to elements with the class .reveal
document.querySelectorAll('.reveal').forEach(el => {
  el.classList.add("opacity-0", "translate-y-4", "transition-all", "duration-700");
  observer.observe(el);
});

// Navbar shrink on scroll (if you want it)
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-gray-900', 'shadow-lg');
  } else {
    navbar.classList.remove('bg-gray-900', 'shadow-lg');
  }
});
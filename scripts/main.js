// Smooth scroll to sections when nav links are clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Show scroll-to-top button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn?.classList.remove('hidden');
    } else {
      scrollTopBtn?.classList.add('hidden');
    }
  });
  
  // Optional: Typewriter effect for intro (you can customize this)
  const typeWriter = (element, text, delay = 100) => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, delay);
  };
  
  const introText = document.getElementById('introText');
  if (introText) {
    typeWriter(introText, "Hi, I'm Om — a passionate AI/ML Aspirant 🚀");
  }
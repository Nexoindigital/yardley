// 1. Efecto de Revelado al hacer Scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Seleccionamos todos los elementos que queremos que se animen
document.querySelectorAll('section, .barber-card, .blog-card, .benefit-card').forEach(el => {
    el.classList.add('reveal'); // Añadimos la clase inicial de oculto
    observer.observe(el);
});

// 2. Efecto de Parallax suave para el Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    let scrollValue = window.scrollY;
    header.style.backgroundPositionY = (scrollValue * 0.5) + 'px';
});
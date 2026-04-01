const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      // Una vez se ve, dejamos de vigilarlo para que el móvil vaya más rápido
      observer.unobserve(entry.target);
    }
  });
}, { 
  threshold: 0.01, 
  rootMargin: "0px 0px 200px 0px" /* Carga el contenido 200px antes de que llegue el dedo */
});

faders.forEach(el => observer.observe(el));
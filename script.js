const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { 
  threshold: 0.05,        /* Se activa mucho antes (al asomar un 5%) */
  rootMargin: "0px 0px -20px 0px" /* Anticipa la carga para que no parezca que tarda */
});

faders.forEach(el => observer.observe(el));
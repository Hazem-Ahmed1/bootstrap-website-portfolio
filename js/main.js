function updateCols() {
  const el = document.querySelector('#hero-avatar');
  if (window.innerWidth <= 1200) {
    el.classList.replace('col-lg-4', 'col-lg-5');
  }
  else{
    el.classList.replace('col-lg-5', 'col-lg-4');
  }
}

window.addEventListener('resize', updateCols);
updateCols();
AOS.init();

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

document.querySelectorAll('.animate').forEach(el => {
  observer.observe(el);
});

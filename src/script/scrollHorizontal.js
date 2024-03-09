
const scrollableSection = document.querySelector('.section3');
let isDown = false;
let startX;
let scrollLeft;

scrollableSection.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - scrollableSection.offsetLeft;
  scrollLeft = scrollableSection.scrollLeft;
});

scrollableSection.addEventListener('mouseleave', () => {
  isDown = false;
});

scrollableSection.addEventListener('mouseup', () => {
  isDown = false;
});

scrollableSection.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollableSection.offsetLeft;
  const walk = (x - startX) * 2; // Multiplication par un facteur pour ajuster la vitesse du défilement
  scrollableSection.scrollLeft = scrollLeft - walk;
});



scrollableSection.addEventListener('wheel', (e) => {
  if (e.deltaY !== 0) {
    e.preventDefault();
    scrollableSection.scrollLeft += e.deltaY;
  }
});

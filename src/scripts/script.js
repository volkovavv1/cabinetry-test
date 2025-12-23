document.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector('.main-hero');
  const background = document.querySelector('.main__background');

  if (!hero || !background) return;  

  let mouseX = 0;
  let mouseY = 0;
  let isHovered = false;  
  const speed = 0.02;  
  const scaleOnHover = 1.05;  
  const scaleDefault = 1;  

  function updateParallax() {
    const centerX = hero.offsetWidth / 2;
    const centerY = hero.offsetHeight / 2;
    const x = (mouseX - centerX) * speed;
    const y = (mouseY - centerY) * speed;

    const currentScale = isHovered ? scaleOnHover : scaleDefault;

    background.style.transform = `translate(${x}px, ${y}px) scale(${currentScale})`;
  }

  hero.addEventListener('mouseenter', function() {
    isHovered = true;
    
    mouseX = hero.offsetWidth / 2;
    mouseY = hero.offsetHeight / 2;
    updateParallax();  
  });

  hero.addEventListener('mousemove', function(e) {
    if (!isHovered) return;  

    const rect = hero.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    updateParallax();
  });


  hero.addEventListener('mouseleave', function() {
    isHovered = false;

    mouseX = hero.offsetWidth / 2;
    mouseY = hero.offsetHeight / 2;
    updateParallax();  
  });

  mouseX = hero.offsetWidth / 2;
  mouseY = hero.offsetHeight / 2;
  isHovered = false;
  updateParallax();
});
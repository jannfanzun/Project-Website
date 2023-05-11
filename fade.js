 // Animationsfunktion für das Scrollen
 function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('animated');
      }
    });
  }

  // Funktion zum Überprüfen, ob ein Element im sichtbaren Bereich des Viewports liegt
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Überprüfen der Elemente beim Scrollen
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Führe die Animation beim Laden der Seite aus
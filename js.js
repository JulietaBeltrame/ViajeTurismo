const menuToggle = document.querySelector('.menu-toggle');
const categorias = document.querySelector('.categorias');

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

menuToggle.addEventListener('click', () => {
    categorias.classList.toggle('active');
    if (categorias.classList.contains('active')) {
        categorias.style.display = 'flex';
    } else {
        categorias.style.display = 'none';
    }
});


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const prevButton = carousel.querySelector(".prev-btn");
    const nextButton = carousel.querySelector(".next-btn");
    const carouselInner = carousel.querySelector(".carousel-inner");
    const containerWidth = carouselInner.offsetWidth; // Ancho de cada contenedor de imagen
    let scrollAmount = 0;
    const scrollStep = containerWidth; // Desplaza una vez a la vez
  
    prevButton.addEventListener("click", function() {
      // Desplazar hacia la izquierda
      if (scrollAmount > 0) {
        scrollAmount -= scrollStep;
        carouselInner.scrollLeft = scrollAmount;
      }
    });
  
    nextButton.addEventListener("click", function() {
      // Desplazar hacia la derecha
      if (scrollAmount < carouselInner.scrollWidth - containerWidth) {
        scrollAmount += scrollStep;
        carouselInner.scrollLeft = scrollAmount;
      }
    });
  });
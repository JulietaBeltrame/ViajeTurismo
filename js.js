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

  /*galeria container info*/
const openg = document.getElementById('openg');
const galeria_container = document.getElementById('galeria_container');
const closeg = document.getElementById('closeg');

openg.addEventListener('click',() => {
    galeria_container.classList.add('show');
});

closeg.addEventListener('click',() => {
    galeria_container.classList.remove('show');
});


/*galeria transicion*/
const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLight = document.querySelector(".agregar-imagen");
const galleryLight = document.querySelector(".imagen-light");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    aparecerImagen(imagen.getAttribute("src"));
  });
});

galleryLight.addEventListener("click", (e) => {
  if (e.target !== imagenesLight) {
    galleryLight.classList.remove("show");
    imagenesLight.classList.remove("showImage");
  }
});

const aparecerImagen = (imagen) => {
  imagenesLight.src = imagen;
  galleryLight.classList.add("show");
  imagenesLight.classList.add("showImage");
};


/*modal container info*/
const openi = document.getElementById('openi');
const modal_container = document.getElementById('modal_container');
const closei = document.getElementById('closei');

openi.addEventListener('click',() => {
    modal_container.classList.add('show');
});

closei.addEventListener('click',() => {
    modal_container.classList.remove('show');
});

// Nueva York
function change1()
{
    document.getElementById("imagen1").src = "img 2/Nueva York2.jpg"
}

function change2()
{
    document.getElementById("imagen1").src = "img 2/Nueva York.jpg"
}

// Los Angeles
function change3()
{
    document.getElementById("imagen2").src = "img 2/Los Angeles2.jpg"
}

function change4()
{
    document.getElementById("imagen2").src = "img 2/Los Angeles.jpg.webp.jpeg"
}

//Tokio
function change5()
{
    document.getElementById("imagen3").src = "img 2/Japon2.jpeg"
}

function change6()
{
    document.getElementById("imagen3").src = "img 2/Japon.jpg"
}

//Londres
function change7()
{
    document.getElementById("imagen4").src = "img 2/Londres2.jpeg"
}

function change8()
{
    document.getElementById("imagen4").src = "img 2/Londres.png"
}

//Las Vegas
function change9()
{
    document.getElementById("imagen5").src = "img 2/Las Vegas2.jpg"
}

function change10()
{
    document.getElementById("imagen5").src = "img 2/Las vegas.jpg.webp"
}

//Paris
function change11()
{
    document.getElementById("imagen6").src = "img 2/Paris2.jpg"
}

function change12()
{
    document.getElementById("imagen6").src = "img 2/Paris.jpg.webp"
}

//Venecia
function change13()
{
    document.getElementById("imagen7").src = "img 2/venecia2.jpg"
}

function change14()
{
    document.getElementById("imagen7").src = "img 2/Venecia.jpg.webp" 
}
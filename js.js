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
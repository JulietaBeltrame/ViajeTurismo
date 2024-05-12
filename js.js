const menuToggle = document.querySelector('.menu-toggle');
const categorias = document.querySelector('.categorias');

menuToggle.addEventListener('click', () => {
    categorias.classList.toggle('active');
    if (categorias.classList.contains('active')) {
        categorias.style.display = 'flex';
    } else {
        categorias.style.display = 'none';
    }
});

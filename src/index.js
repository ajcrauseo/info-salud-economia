const burger = document.querySelector('.header--burger');
const cancel = document.querySelector('.header--cancel');
const navbar = document.querySelector('.navbar');

// Abrir el navbar
burger.addEventListener('click', () => {
    navbar.classList.add('navbar-inside');
    burger.style.display = 'none'
    cancel.style.display = 'initial'
})
// Cerrar el navbar
cancel.addEventListener('click', () => {
    navbar.classList.remove('navbar-inside');
    cancel.style.display = 'none'
    burger.style.display = 'initial'
})

// Navbar fixed con scroll

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})
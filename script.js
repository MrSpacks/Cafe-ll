const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('navMenu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

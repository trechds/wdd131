const navmenu = document.querySelector('.navmenu');
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    navmenu.classList.toggle('open'); 
    hamburger.classList.toggle('open'); 
    nav.classList.toggle('hidden'); 
});

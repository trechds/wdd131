const navmenu = document.querySelector('.navmenu');
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
	navmenu.classList.toggle('open');
	hamburger.classList.toggle('open');
});
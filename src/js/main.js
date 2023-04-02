const burgerBtn = document.querySelector('.nav__menu');
const nav = document.querySelector('.nav');
const navItems = document.querySelector('.nav__items');

burgerBtn.addEventListener('click', () => {
	navItems.classList.toggle('nav__items--active');
	const burgerSrc = burgerBtn.getAttribute('src');
	console.log(burgerSrc);
	if (burgerSrc === './dist/img/icon-hamburger.svg') {
		burgerBtn.setAttribute('src', './dist/img/icon-close.svg');
		nav.style.position = 'fixed';
	} else if (burgerSrc === './dist/img/icon-close.svg') {
		burgerBtn.setAttribute('src', './dist/img/icon-hamburger.svg');
		nav.style.position = 'absolute';
	}
});

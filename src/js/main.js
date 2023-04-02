const burgerBtn = document.querySelector('.nav__menu');
const nav = document.querySelector('.nav__items');

burgerBtn.addEventListener('click', () => {
	nav.classList.toggle('nav__items--active');
	const burgerSrc = burgerBtn.getAttribute('src');
	console.log(burgerSrc);
	if (burgerSrc === './dist/img/icon-hamburger.svg') {
		burgerBtn.setAttribute('src', './dist/img/icon-close.svg');
	} else if (burgerSrc === './dist/img/icon-close.svg') {
		burgerBtn.setAttribute('src', './dist/img/icon-hamburger.svg');
	}
});

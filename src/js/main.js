const burgerBtn = document.querySelector('.nav__burger-btn');
const nav = document.querySelector('.nav');
const navItems = document.querySelector('.nav__items');
const allNavItems = document.querySelectorAll('.nav__item');

burgerBtn.addEventListener('click', () => {
	navItems.classList.toggle('nav__items--active');
	burgerBtn.classList.toggle('nav__burger-btn--active');

	if (burgerBtn.classList.contains('nav__burger-btn--active')) {
		nav.style.position = 'fixed';
	} else {
		nav.style.position = 'absolute';
	}

	allNavItems.forEach(item =>
		item.addEventListener('click', () => {
			navItems.classList.remove('nav__items--active');
			burgerBtn.setAttribute('src', './dist/img/icon-hamburger.svg');
		})
	);
});

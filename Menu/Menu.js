
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', e => {
  toggleMenu();
  // STRETCH 1: Stops propagation to avoid collision w/ non-menu click events
  e.stopPropagation();
});

// STRETCH 1: Click anywhere but menu to close it
document.addEventListener('click', () => menu.classList.remove('menu--open'));
menu.addEventListener('click', e => e.stopPropagation());
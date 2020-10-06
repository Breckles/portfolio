const hamburger = document.querySelector('#hamburger') as HTMLDivElement;
const navContainer = document.querySelector('#navContainer') as HTMLDivElement;
const menuNav = document.querySelector('#menu') as HTMLElement;
let mainMenuOpen = false;

hamburger.addEventListener('click', (event) => {
  event.stopPropagation();
  // first time clicked
  if (mainMenuOpen) {
    hamburger.classList.replace('opened', 'closed');
    menuNav.classList.remove('open');
    navContainer.style.display = 'none';
  } else {
    hamburger.classList.remove('closed');
    hamburger.classList.add('opened');
    menuNav.classList.add('open');
    navContainer.style.display = 'block';
  }

  mainMenuOpen = !mainMenuOpen;
});

window.addEventListener('touchstart', (event) => {
  if (!menuNav.contains(<Node>event.target)) {
    hamburger.classList.replace('opened', 'closed');
    menuNav.classList.remove('open');
    mainMenuOpen = false;
  }
});

"use strict";
const hamburger = document.querySelector('#hamburger');
const navContainer = document.querySelector('#navContainer');
const menuNav = document.querySelector('#menu');
let mainMenuOpen = false;
hamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    // first time clicked
    if (mainMenuOpen) {
        hamburger.classList.replace('opened', 'closed');
        menuNav.classList.remove('open');
        navContainer.style.display = 'none';
    }
    else {
        hamburger.classList.remove('closed');
        hamburger.classList.add('opened');
        menuNav.classList.add('open');
        navContainer.style.display = 'block';
    }
    mainMenuOpen = !mainMenuOpen;
});
window.addEventListener('touchstart', (event) => {
    if (!menuNav.contains(event.target)) {
        hamburger.classList.replace('opened', 'closed');
        menuNav.classList.remove('open');
        mainMenuOpen = false;
    }
});
//# sourceMappingURL=main.js.map
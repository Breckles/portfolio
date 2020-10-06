"use strict";
const hamburger = document.querySelector('#hamburger');
const mainMenuNav = document.querySelector('#mainMenu');
let mainMenuOpen = false;
hamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    // first time clicked
    if (mainMenuOpen) {
        hamburger.classList.replace('opened', 'closed');
        mainMenuNav.classList.remove('open');
    }
    else {
        hamburger.classList.remove('closed');
        hamburger.classList.add('opened');
        // mainMenuNav.style.display = 'block';
        // window.setTimeout(() => {
        //   mainMenuNav.style.right = '0';
        // }, 10);
        mainMenuNav.classList.add('open');
    }
    mainMenuOpen = !mainMenuOpen;
});
window.addEventListener('click', (event) => {
    console.log(event.target);
    console.log(mainMenuNav);
    if (event.target != mainMenuNav) {
        hamburger.classList.replace('opened', 'closed');
        mainMenuNav.classList.remove('open');
        mainMenuOpen = false;
    }
});
//# sourceMappingURL=main.js.map
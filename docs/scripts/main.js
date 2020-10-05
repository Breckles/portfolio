"use strict";
const hamburger = document.querySelector('#hamburger');
let subnavOpened = false;
hamburger.addEventListener('click', () => {
    // first time clicked
    if (subnavOpened) {
    }
    if (subnavOpened) {
        hamburger.classList.replace('opened', 'closed');
    }
    else {
        hamburger.classList.remove('closed');
        hamburger.classList.add('opened');
    }
    subnavOpened = !subnavOpened;
});
//# sourceMappingURL=main.js.map
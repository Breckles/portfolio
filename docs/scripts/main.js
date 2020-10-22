"use strict";
const hamburger = document.querySelector('#hamburger');
const navContainer = document.querySelector('#navContainer');
const menuNav = document.querySelector('#menu');
let mainMenuOpen = false;
console.log('hello');
hamburger.addEventListener('click', (event) => {
    console.log(event.target);
    event.stopPropagation();
    // first time clicked
    if (mainMenuOpen) {
        hamburger.classList.replace('opened', 'closed');
        menuNav.classList.remove('open');
    }
    else {
        hamburger.classList.remove('closed');
        hamburger.classList.add('opened');
        menuNav.classList.add('open');
    }
    mainMenuOpen = !mainMenuOpen;
});
window.addEventListener('click', (event) => {
    if (!menuNav.contains(event.target)) {
        event.stopPropagation();
        hamburger.classList.replace('opened', 'closed');
        menuNav.classList.remove('open');
        mainMenuOpen = false;
    }
});
// Navigate through portfolio items ///////////////////////////////////
// const portfolioEl = document.querySelector('#portfolio') as HTMLUListElement;
const portfolioItems = [
    ...document.getElementsByClassName('portfolioItem'),
];
let currentIndex = 0;
const maxIndex = portfolioItems.length - 1;
const dotEls = document.getElementsByClassName('dot');
const dots = [...dotEls];
dots[currentIndex].classList.add('active');
const scrollOptions = {
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
};
for (const dot of dots) {
    dot.addEventListener('click', (event) => {
        let clickedDot = event.target;
        if (clickedDot !== dots[currentIndex]) {
            dots[currentIndex].classList.remove('active');
            currentIndex = dots.indexOf(clickedDot);
            dots[currentIndex].classList.add('active');
            portfolioItems[currentIndex].scrollIntoView(scrollOptions);
        }
    });
}
// Navigate with arrows
let leftArrowButtonEl = document.querySelector('#leftArrow');
let rightArrowButtonEl = document.querySelector('#rightArrow');
leftArrowButtonEl.addEventListener('click', scrollLeft);
rightArrowButtonEl.addEventListener('click', scrollRight);
function scrollLeft() {
    if (currentIndex > 0) {
        dots[currentIndex].classList.remove('active');
        currentIndex--;
        dots[currentIndex].classList.add('active');
        portfolioItems[currentIndex].scrollIntoView(scrollOptions);
    }
}
function scrollRight() {
    if (currentIndex < maxIndex) {
        dots[currentIndex].classList.remove('active');
        currentIndex++;
        dots[currentIndex].classList.add('active');
        portfolioItems[currentIndex].scrollIntoView(scrollOptions);
    }
}
portfolioItems[currentIndex].scrollIntoView(false);
//# sourceMappingURL=main.js.map
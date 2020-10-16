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
const itemDots = document.getElementsByClassName('dot');
const portfolio = document.querySelector('#portfolio');
const portfolioItems = portfolio.children;
let activeDot = itemDots.item(0);
activeDot.classList.add('active');
// let activePortfolioItem = portfolioItems.item(0);
let dotLiMap = new Map();
for (let i = 0; i < itemDots.length; i++) {
    dotLiMap.set(itemDots.item(i), portfolioItems.item(i));
}
console.log(dotLiMap);
for (const item of itemDots) {
    item.addEventListener('click', (event) => {
        let dot = event.target;
        if (dot !== activeDot) {
            console.log('different dot clicked');
            activeDot.classList.remove('active');
            activeDot = dot;
            dot.classList.add('active');
            dotLiMap.get(activeDot).scrollIntoView(false);
        }
    });
}
//# sourceMappingURL=main.js.map
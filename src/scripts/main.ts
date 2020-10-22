const hamburger = document.querySelector('#hamburger') as HTMLDivElement;
const navContainer = document.querySelector('#navContainer') as HTMLDivElement;
const menuNav = document.querySelector('#menu') as HTMLElement;
let mainMenuOpen = false;
console.log('hello');

hamburger.addEventListener('click', (event) => {
  console.log(event.target);

  event.stopPropagation();
  // first time clicked
  if (mainMenuOpen) {
    hamburger.classList.replace('opened', 'closed');
    menuNav.classList.remove('open');
  } else {
    hamburger.classList.remove('closed');
    hamburger.classList.add('opened');
    menuNav.classList.add('open');
  }

  mainMenuOpen = !mainMenuOpen;
});

window.addEventListener('click', (event) => {
  if (!menuNav.contains(<Node>event.target)) {
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
] as HTMLLIElement[];

let currentIndex = 0;
const maxIndex = portfolioItems.length - 1;

const dotEls = document.getElementsByClassName('dot') as HTMLCollectionOf<
  HTMLDivElement
>;
const dots = [...dotEls];
dots[currentIndex].classList.add('active');

const scrollOptions: ScrollIntoViewOptions = {
  behavior: 'smooth',
  block: 'end',
  inline: 'nearest',
};

for (const dot of dots) {
  dot.addEventListener('click', (event) => {
    let clickedDot = event.target as HTMLDivElement;
    if (clickedDot !== dots[currentIndex]) {
      dots[currentIndex].classList.remove('active');
      currentIndex = dots.indexOf(clickedDot);
      dots[currentIndex].classList.add('active');
      portfolioItems[currentIndex].scrollIntoView(scrollOptions);
    }
  });
}

// Navigate with arrows
let leftArrowButtonEl = document.querySelector(
  '#leftArrow'
) as HTMLButtonElement;
let rightArrowButtonEl = document.querySelector(
  '#rightArrow'
) as HTMLButtonElement;

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

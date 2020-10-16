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

const portfolioEl = document.querySelector('#portfolio') as HTMLUListElement;
const portfolioItems = [...portfolioEl.children];

let currentIndex = 0;
const maxIndex = portfolioItems.length - 1;

const dotEls = document.getElementsByClassName('dot') as HTMLCollectionOf<
  HTMLDivElement
>;
const dots = [...dotEls];
dots[currentIndex].classList.add('active');

for (const dot of dots) {
  dot.addEventListener('click', (event) => {
    let clickedDot = event.target as HTMLDivElement;
    if (clickedDot !== dots[currentIndex]) {
      dots[currentIndex].classList.remove('active');
      currentIndex = dots.indexOf(clickedDot);
      dots[currentIndex].classList.add('active');
      portfolioItems[currentIndex].scrollIntoView(false);
    }
  });
}

// Navigate with mouse wheel
document.addEventListener('wheel', (event) => {
  if (event.deltaY < 0 && currentIndex < maxIndex) {
    dots[currentIndex].classList.remove('active');
    currentIndex++;
    portfolioItems[currentIndex].scrollIntoView(false);
    dots[currentIndex].classList.add('active');
  } else if (event.deltaY > 0 && currentIndex > 0) {
    // ...wheel down
    dots[currentIndex].classList.remove('active');
    currentIndex--;
    portfolioItems[currentIndex].scrollIntoView(false);
    dots[currentIndex].classList.add('active');
  }
});

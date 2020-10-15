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
  console.log(event.target);
  if (!menuNav.contains(<Node>event.target)) {
    event.stopPropagation();
    hamburger.classList.replace('opened', 'closed');
    menuNav.classList.remove('open');
    mainMenuOpen = false;
  }
});

// Navigate through portfolio items

const itemDots = document.getElementsByClassName('dot') as HTMLCollectionOf<
  HTMLDivElement
>;
let activeDot;

for (const item of itemDots) {
  console.log(item);

  item.addEventListener('click', (event) => {
    console.log(event.target);
  });
}

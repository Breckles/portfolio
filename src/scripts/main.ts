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

const itemDots = document.getElementsByClassName('dot') as HTMLCollectionOf<
  HTMLDivElement
>;
const portfolio = document.querySelector('#portfolio') as HTMLUListElement;
const portfolioItems = portfolio.children as HTMLCollectionOf<HTMLLIElement>;

let activeDot = itemDots.item(0)!;
activeDot.classList.add('active');
// let activePortfolioItem = portfolioItems.item(0);

let dotLiMap: Map<HTMLDivElement, HTMLLIElement> = new Map();

for (let i = 0; i < itemDots.length; i++) {
  dotLiMap.set(itemDots.item(i)!, portfolioItems.item(i)!);
}
console.log(dotLiMap);

for (const item of itemDots) {
  item.addEventListener('click', (event) => {
    let dot = event.target as HTMLDivElement;
    if (dot !== activeDot) {
      console.log('different dot clicked');
      activeDot.classList.remove('active');
      activeDot = dot;
      dot.classList.add('active');
      dotLiMap.get(activeDot)!.scrollIntoView(false);
    }
  });
}

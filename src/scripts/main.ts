const hamburger = document.querySelector('#hamburger') as HTMLDivElement;
let subnavOpened = false;

hamburger.addEventListener('click', () => {
  // first time clicked
  if (subnavOpened) {
  }

  if (subnavOpened) {
    hamburger.classList.replace('opened', 'closed');
  } else {
    hamburger.classList.remove('closed');
    hamburger.classList.add('opened');
  }

  subnavOpened = !subnavOpened;
});

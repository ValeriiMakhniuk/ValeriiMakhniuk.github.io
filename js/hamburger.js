let hamburger = document.querySelector('.hamburger');
let toggle = document.querySelector('.hamburger__toggle');

toggle.addEventListener('click', (e) => {
  if (hamburger.classList.contains('hamburger-active')) {
    hamburger.classList.remove('hamburger-active');
  }
  else {
    hamburger.classList.add('hamburger-active');
  }
});
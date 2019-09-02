let hamburger = document.querySelector('.hamburger');
let toggle = document.querySelector('.hamburger__toggle');

hamburger.addEventListener('click', (e) => {
  hamburger.classList.add('hamburger-active');
});
let hamburger = document.querySelector('.hamburger');
let toggle = document.querySelector('.hamburger__toggle');

toggle.addEventListener('click', (e) => {
  if (hamburger.classList.contains('hamburger-active')) {
    hamburger.classList.remove('hamburger-active');
    document.body.classList.remove('stop-scroll');
  }
  else {
    hamburger.classList.add('hamburger-active');
    document.body.classList.add('stop-scroll');
  }
});
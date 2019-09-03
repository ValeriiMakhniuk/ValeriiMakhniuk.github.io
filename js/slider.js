const left = document.querySelector('.slider__arrow-left');
const right = document.querySelector('.slider__arrow-right');

const slider = document.querySelector('.slider__list');
const slide = document.querySelector('.slider__slide');
const slideNum = document.querySelectorAll('.slider__slide').length;

const slideWidth = parseInt(getComputedStyle(slide).width);
const width = slideWidth * slideNum;


right.addEventListener('click', (e) => {
  e.preventDefault();
  let currentRight = parseInt(getComputedStyle(slider).right);
  if (currentRight < width - currentRight) {
    slider.style.right = currentRight + slideWidth + 'px';
  }
});

left.addEventListener('click', (e) => {
  e.preventDefault();
  let currentRight = parseInt(getComputedStyle(slider).right);
  if (currentRight > 0) {
    slider.style.right = currentRight - slideWidth + 'px';
  }
});
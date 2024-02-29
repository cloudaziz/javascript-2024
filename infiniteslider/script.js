const sliderWrapper = document.querySelector('.slider-wrapper');
const slider = sliderWrapper.querySelector('.slider');
let sliderItems = slider.querySelectorAll('li');

const nextBtn = document.querySelector('.right');
const prevBtn = document.querySelector('.left');

const firstClone = sliderItems[0].cloneNode(true);
const lastClone = sliderItems[sliderItems.length - 1].cloneNode(true);

slider.append(firstClone);
slider.prepend(lastClone);

let currentIndex = 1;

prevBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // for update sliderItems
  sliderItems = slider.querySelectorAll('li');

  // stop when last element is current item
  if (currentIndex === 0) return;

  // increment currentIndex
  currentIndex = currentIndex - 1;

  // move item with css custom property
  slider.style.setProperty('--item-index', currentIndex);
  slider.style.transition = '.7s';
});

nextBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // for update sliderItems
  sliderItems = slider.querySelectorAll('li');

  // stop when last element is current item
  if (currentIndex === sliderItems.length - 1) return;

  // increment currentIndex
  currentIndex = currentIndex + 1;

  // move item with css custom property
  slider.style.setProperty('--item-index', currentIndex);
  slider.style.transition = '.7s';
});

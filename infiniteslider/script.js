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
nextBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // for update sliderItems
  sliderItems = slider.querySelectorAll('li');
  // stop when last element is current item
  if (currentIndex === sliderItems.length - 1) return;

  currentIndex = currentIndex + 1;
  slider.style.setProperty('--item-index', currentIndex);
  slider.style.transition = '.7s';
});

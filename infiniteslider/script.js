const sliderWrapper = document.querySelector('.slider-wrapper');
const slider = sliderWrapper.querySelector('.slider');
let sliderItems = slider.querySelectorAll('li');

const nextBtn = document.querySelector('.right');
const prevBtn = document.querySelector('.left');

const firstClone = sliderItems[0].cloneNode(true);
const lastClone = sliderItems[sliderItems.length - 1].cloneNode(true);

slider.append(firstClone);
slider.prepend(lastClone);

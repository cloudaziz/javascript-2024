const sliderWrapper = document.querySelector('.slider-wrapper'); // container
const slider = sliderWrapper.querySelector('.slider'); //  slide
let sliderItems = slider.querySelectorAll('li'); // slider item
let sliderItemWidth = sliderItems[0].offsetWidth; // single Item width

const nextBtn = document.querySelector('.right');
const prevBtn = document.querySelector('.left');
// To getting --show-item value & convert
let showItem = parseInt(
  window.getComputedStyle(sliderWrapper).getPropertyValue('--show-item'),
  10
);
// To getting --item-slide value & convert
let itemsPerSlide = parseInt(
  window.getComputedStyle(sliderWrapper).getPropertyValue('--item-slide'),
  10
);

let currentIndex = 1;
// Create cloneNode --show-item value wise (firstChild to lastChild)
for (let index = 0; index < showItem; index++) {
  const firstClone = sliderItems[index].cloneNode(true);
  firstClone.classList.add('clone');
  firstClone.classList.remove('active');
  slider.append(firstClone);
}
// Create cloneNode --show-item value wise (lastChild to firstChild)
for (let index = 1; index <= showItem; index++) {
  const lastClone = sliderItems[sliderItems.length - index].cloneNode(true);
  lastClone.classList.add('clone');
  lastClone.classList.remove('active');
  slider.prepend(lastClone);
}
// Getting update sliderItems after firstClone and lastClone
sliderItems = slider.querySelectorAll('li');

// To showing index 1 for current view
sliderItems.forEach((item, indx) => {
  if (item.classList.contains('active')) {
    currentIndex = indx;
    slider.style.transform = `translateX(-${sliderItemWidth * currentIndex}px)`;
  }
});

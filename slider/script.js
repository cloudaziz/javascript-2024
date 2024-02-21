// Getting CSS Variable
let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let showItems = rootStyles.getPropertyValue('--show-item');
// console.log(showItems);

const slider = document.querySelector('.slider-items');
const sliderItems = document.querySelectorAll('.slider-items li');
const sliderItemsLength = sliderItems.length;
// console.log(`Slider Item length: ${sliderItemsLength}`);

const itemWidth = sliderItems[0].clientWidth;

const indicators = document.querySelectorAll('.control ul li');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
// console.log(nextBtn);

let currentIndex = 0;

indicators.forEach((indicator, indx) => {
  indicator.addEventListener('click', (event) => {
    currentIndex = indx;
    // removing all selected class
    indicators.forEach((indicator) => {
      indicator.classList.remove('selected');
    });
    // adding selected class
    indicator.classList.add('selected');
    // moving slider
    slider.style.transform = 'translateX(' + currentIndex * -itemWidth + 'px)';
  });
});

nextBtn.addEventListener('click', (event) => {
  if (currentIndex == sliderItems.length - showItems) return;
  // currentIndex = currentIndex + 1;
  currentIndex =
    currentIndex < sliderItems.length - 1
      ? currentIndex + 1
      : sliderItems.length - 1;
  // console.log(`Current index: ${currentIndex}`);

  // removing all selected class
  indicators.forEach((indicator) => {
    indicator.classList.remove('selected');
  });

  // then adding selected class
  indicators[currentIndex].classList.add('selected');

  // moving slider
  slider.style.transform = 'translateX(' + currentIndex * -itemWidth + 'px)';
  // console.log(currentIndex);
});

prevBtn.addEventListener('click', (event) => {
  if (currentIndex == 0) return;
  currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;

  // removing all selected class
  indicators.forEach((indicator) => {
    indicator.classList.remove('selected');
  });
  // then adding selected class
  indicators[currentIndex].classList.add('selected');

  // moving slider
  slider.style.transform = 'translateX(' + currentIndex * -itemWidth + 'px)';
});

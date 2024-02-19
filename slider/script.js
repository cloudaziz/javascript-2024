const slider = document.querySelector('.slider-items');
const sliderItems = document.querySelectorAll('.slider-items li');
const itemWidth = sliderItems[0].clientWidth;

const indicators = document.querySelectorAll('.control ul li');

console.dir(indicators);
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
// console.log(nextBtn);

let currentIndex = 0;

indicators.forEach((indicator, indx) => {
  indicator.addEventListener('click', (event) => {
    currentIndex = indx;
    indicators.forEach((indicator) => {
      indicator.classList.remove('selected');
    });
    indicator.classList.add('selected');
    slider.style.transform = 'translateX(' + currentIndex * -itemWidth + 'px)';
  });
});

nextBtn.addEventListener('click', (event) => {
  if (currentIndex == sliderItems.length - 1) return;
  currentIndex = currentIndex + 1;

  indicators.forEach((indicator) => {
    indicator.classList.remove('selected');
  });
  indicators[currentIndex].classList.add('selected');

  slider.style.transform = 'translateX(' + currentIndex * -itemWidth + 'px)';
  console.log(currentIndex);
});

prevBtn.addEventListener('click', (event) => {
  if (currentIndex == 0) {
    return;
  }
  currentIndex = currentIndex - 1;

  indicators.forEach((indicator) => {
    indicator.classList.remove('selected');
  });
  indicators[currentIndex].classList.add('selected');

  slider.style.transform = 'translateX(' + currentIndex * -itemWidth + 'px)';
});

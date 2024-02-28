// window.addEventListener('load', () => {});

/* HTML Code <p class="testp" style="background-color: black; color: aliceblue;">
  Hello World!
</p>; */

// get inline css propertiy and value
var myp = document.querySelector('.testp');
var cs = myp.style;
console.log(cs.cssText); // showing inline style

// adding inline style then overwrite all inline
cs.cssText = 'font-size: 40px; color: blue;';
console.log(cs.cssText);

/* HTML Code: <p class="testp">Hello World!</p>; */
/* css code
.testp {
  --bgColor: red;
  --txtColor: black;
  background-color: var(--bgColor);
  color: var(--txtColor);
}
*/
// adding inline style then overwrite all inline
let myp = document.querySelector('.testp');
let allCssProp = getComputedStyle(myp);
let redColor = allCssProp.getPropertyValue('--bgColor');
console.log(redColor);

// To set custom css variable
myp.style.setProperty('--bgColor', 'yellow');

// befor(), after(), Prepend, Append, Remove
{
  /* <div class="mydiv">Hello</div> */
}
let createP = document.createElement('p');
createP.innerText = 'How';
document.querySelector('.mydiv').before(createP);

// slider.style.transform = `translateX(${-sliderItemWidth * currentIndex}px)`;

// the closest ancestor with the id of "div-02"
console.log(el.closest('#div-02')); // <div id="div-02">

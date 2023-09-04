
const value = document.getElementById("value");
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');

decBtn.addEventListener("click", decrement);
incBtn.addEventListener("click", increment);
let  counterValue = 0;
function decrement() {
 counterValue -= 1;
 value.textContent = counterValue;}
 function increment() {
counterValue += 1;
value.textContent = counterValue;

}
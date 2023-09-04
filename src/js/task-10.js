function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("#controls input");
const box = document.getElementById("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
input.addEventListener("input", handleChange);
function handleChange(event) {}

let amount = Number(event.currentTarget.value);
console.log(amount)
btnCreate.addEventListener("click", createBoxes)
 function createBoxes(amount){
  for (let i = 0; i < amount; i++) {
    let boxes = document.createElement("div");
     boxes.style.width = 30 + (10 * i) +"px";
 boxes.style.height = 30 + (10 * i) + "px";
 boxes.style.backgroundColor = getRandomHexColor();
 boxes.classList.add(".new-box");
 box.appendChild(boxes);
  }
 }
 btnDestroy.addEventListener("input", deleteBoxes);

function deleteBoxes () {
  const allBoxes = document.querySelectorAll(".new-box");
 
  for (let allBoxe of allBoxes) {
    box.removeChild(allBoxes)
  }}

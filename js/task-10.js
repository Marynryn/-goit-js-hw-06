function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("#controls input");
const box = document.getElementById("boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

console.log(box);


btnCreate.addEventListener("click", createBoxes);
 function createBoxes(){
  let amount = Number(input.value);
  const arr = [];
  for (let i = 0; i < amount; i++) {
    const size  = 30 + 30 * i + "px";
    let boxes = document.createElement("div");
     boxes.style.width = size;
 boxes.style.height = size;
 boxes.style.backgroundColor = getRandomHexColor();
 boxes.classList.add(".new-box");
 arr.push(boxes);
  }
  box.append(...arr);
 }
 btnDestroy.addEventListener("click", deleteBoxes);

function deleteBoxes () {
 box.innerHTML = "";
 
 
  }

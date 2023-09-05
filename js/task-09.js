function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector(".widget");
const color = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", handleChange);
 function handleChange(event) {
  let colorValue = getRandomHexColor()
bodyEl.style.backgroundColor = colorValue;
color.textContent = colorValue;
 }
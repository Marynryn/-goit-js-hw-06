const input = document.getElementById("font-size-control");
const text = document.getElementById("text")
input.addEventListener("input", handleInput);
function handleInput (event) {
   text.style.fontSize = event.currentTarget.value + "px"}

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const array = [];

ingredients.forEach(ingredient => {
	const item = document.createElement("li")
	 item.classList.add("item");
	item.textContent = ingredient;
	array.push(item);
});

list.append(...array);
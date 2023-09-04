
const categories = document.querySelectorAll(".item");
console.log(categories);
console.log(`Number of categories: ${categories.length}.`);
 
categories.forEach((el) => {
    let elName = el.querySelector("h2").textContent;
    console.log(`Category: ${elName}`);
    let elItems = el.querySelectorAll("li");
    console.log(`Elements: ${elItems.length} `)
})


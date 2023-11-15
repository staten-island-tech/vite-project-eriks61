import { menuItems } from "./arr.js";

const cheap = menuItems.filter((menuItem)=> menuItem.Cheap = true)

const Glutenfree = menuItems.filter((menuItem)=> menuItem.GlutenFree = true)

const DOMSelectors = {
    breakfast: document.getElementById("btn1"),
    lunch: document.getElementById("btn2"),
    dinner: document.getElementById("btn3"),
    glutenfree: document.getElementById("btn4"),
    cheap: document.getElementById("btn5"),
}

DOMSelectors.cheap.addEventListener("click", function creategallery(){
if (cheap = true) {
const card = document.createElement("div");
card.className = "boxy";
card.innerHTML = `
<h2 class="card-name">${menuItems.FoodName}</h2>
<img src="${menuItems.Image}"class="card-image">
<h3 class="card-meal">${menuItems.Meal}</h3>
<h2 class="card-price>${menuItems.Price}</h2>
`
}
});
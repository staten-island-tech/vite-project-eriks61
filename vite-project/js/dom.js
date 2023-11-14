import { menuItems } from "./arr.js";

const cheap = menuItems.filter((menuItem)=> menuItem.Cheap = true).forEach((menuItem) => console.log(menuItem.FoodName));

const Glutenfree = menuItems.filter((menuItem)=> menuItem.GlutenFree = true).forEach((menuItem) => console.log(menuItem.FoodName));

const DOMSelectors = {
    breakfast: document.getElementById("btn1"),
    lunch: document.getElementById("btn2"),
    dinner: document.getElementById("btn3"),
    glutenfree: document.getElementById("btn4"),
    cheap: document.getElementById("btn5"),
}

DOMSelectors.general.addEventListener("click", function creategallery(){

})
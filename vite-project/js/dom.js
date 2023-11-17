import { menuItems } from "./arr.js";

const cheap = menuItems.filter((menuItem) => (menuItem.Cheap = true));

const Glutenfree = menuItems.filter((menuItem) => (menuItem.GlutenFree = true));

const DOMSelectors = {
  breakfast: document.getElementById("btn1"),
  lunch: document.getElementById("btn2"),
  dinner: document.getElementById("btn3"),
  glutenfree: document.getElementById("btn4"),
  cheap: document.getElementById("btn5"),
  gallery: document.getElementById("card-container"),
};

DOMSelectors.breakfast.addEventListener("click", function creategallery() {
  menuItems.filter((menuItem) => menuItem.Meal === "Breakfast");
});

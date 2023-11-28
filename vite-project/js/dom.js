import { menuItems } from "./arr.js";
const DOMSelectors = {
  breakfast: document.getElementById("btn1"),
  lunch: document.getElementById("btn2"),
  dinner: document.getElementById("btn3"),
  glutenfree: document.getElementById("btn4"),
  cheap: document.getElementById("btn5"),
  gallery: document.getElementById("card-container"),
  themeSwitch: document.getElementById("btn6"),
};

function createGallery(menuItems) {
  DOMSelectors.gallery.innerHTML = "";

  menuItems.forEach((menuItem) => {
    const card = document.createElement("div");
    card.classList.add("boxy");

    const image = document.createElement("div");
    image.style.backgroundImage = `url(${menuItem.Image})`;
    image.classList.add("card-image");

    const name = document.createElement("div");
    name.textContent = menuItem.FoodName;
    name.classList.add("card-name");

    const meal = document.createElement("div");
    meal.textContent = menuItem.Meal;
    meal.classList.add("card-meal");

    const price = document.createElement("div");
    price.textContent = `$${menuItem.Price}`;
    price.classList.add("card-price");

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(meal);
    card.appendChild(price);
    DOMSelectors.gallery.appendChild(card);
  });
}

DOMSelectors.breakfast.addEventListener("click", () => {
  const breakfaster = menuItems.filter(
    (menuItem) => menuItem.Meal === "Breakfast"
  );
  createGallery(breakfaster);
});
DOMSelectors.lunch.addEventListener("click", () => {
  const luncher = menuItems.filter((menuItem) => menuItem.Meal === "Lunch");
  createGallery(luncher);
});
DOMSelectors.dinner.addEventListener("click", () => {
  const dinnerer = menuItems.filter((menuItem) => menuItem.Meal === "Dinner");
  createGallery(dinnerer);
});
DOMSelectors.glutenfree.addEventListener("click", () => {
  const glutenfreer = menuItems.filter(
    (menuItem) => menuItem.GlutenFree === true
  );
  createGallery(glutenfreer);
});
DOMSelectors.cheap.addEventListener("click", () => {
  const cheaper = menuItems.filter((menuItem) => menuItem.Cheap === true);
  createGallery(cheaper);
});

DOMSelectors.themeSwitch.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("cool")
    ? "warm"
    : "cool";
  document.body.classList.toggle("cool");
  document.body.classList.toggle("warm");
  setTheme(currentTheme);
});

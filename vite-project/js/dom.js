import { menuItems } from "./arr.js";

const cheap = menuItems.filter((menuItem)=> menuItem.Cheap = true).forEach((menuItem) => console.log(menuItem.FoodName));

const Glutenfree = menuItems.filter((menuItem)=> menuItem.GlutenFree = true).forEach((menuItem) => console.log(menuItem.FoodName));
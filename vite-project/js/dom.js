import { menuItems } from "./arr.js";

const cheap = menuItems.filter((menuItem)=> menuItem.Cheap = true).forEach((menuItem) => console.log(menuItem.FoodName));

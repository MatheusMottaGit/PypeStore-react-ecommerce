// import { Category, Clothe } from "@/types/types";

// export function getSelectedCategory(category: Category) {
//   if (category === Category.WOMEN) return "women's";
//   if (category === Category.MEN) return "men's";

//   return "";
// }

// export function getSelectedClotheType(clothe: Clothe | string) {
//   if (clothe === "t-shirt") return "t-shirt";
//   if (clothe === "shoes") return "shoes";
//   if (clothe === "pants") return "pants";
//   if (clothe === "jacket") return "jacket";
//   if (clothe === "dress") return "dress";

//   return "";
// }

// export function amountQueries(category: Category, clothe: Clothe | string) {
//   const selectedCategory = getSelectedCategory(category); //male or female

//   const selectedClotheType = getSelectedClotheType(clothe);

//   return `
//     http://localhost:3333/products?clothe=${selectedClotheType}&category=${selectedCategory}
//   `;
// }

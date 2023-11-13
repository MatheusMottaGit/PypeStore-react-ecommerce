import { Category, Clothe } from "@/types/types";

export function getSelectedCategory(category: Category) {
  if (category === Category.WOMEN) return "women's";
  if (category === Category.MEN) return "men's";

  return "";
}

export function getSelectedClotheType(clothe: Clothe) {
  if (clothe === Clothe["T-SHIRT"]) return "t-shirt";
  if (clothe === Clothe.SHOES) return "shoes";
  if (clothe === Clothe.PANTS) return "pants";
  if (clothe === Clothe.JACKET) return "jacket";
  if (clothe === Clothe.DRESS) return "dress";

  return "";
}

export function amountQueries(category: Category, clothe: Clothe) {
  const selectedCategory = getSelectedCategory(category); //male or female

  const selectedClotheType = getSelectedClotheType(clothe);

  return `
    http://localhost:3333/products?clothe=${selectedClotheType}&category=${selectedCategory}
  `;
}

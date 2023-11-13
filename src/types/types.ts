export enum Clothe {
  "T-SHIRT",
  "PANTS",
  "SHOES",
  "DRESS",
  "JACKET",
}

export enum Category {
  "MEN",
  "WOMEN",
}

export interface Product {
  id: number;
  name: string;
  url: string;
  price: number;
  overview: string;
}

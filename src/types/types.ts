export type Clothe = "t-shirt" | "pants" | "shoes" | "jacket" | "dress";

export enum Category {
  MEN,
  WOMEN
}

export interface Product {
  id: number;
  name: string;
  url: string;
  price: number;
  clothe?: string;
}

export type SelectValues = {
  id: string;
  value: string;
  title: string;
  clothe: Clothe;
};

export interface Product {
  id: number
  name: string
  url: string
  price: number
  clothe?: string
}

export type Clothe = "t-shirt" | "pants" | "shoes" | "jacket" | "dress"

export type SelectValues = {
  id: string
  value: string
  title: string
  clothe: Clothe
} 
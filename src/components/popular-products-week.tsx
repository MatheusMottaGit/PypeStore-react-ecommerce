import { api } from "@/lib/axios";
import React from "react";
import ProductCard from "./product-card";
import { Product } from "@/types/types";

const PopularProductsWeek = async () => {
  const response = await api.get("/products");
  const products: Product[] = response.data;

  return (
    <div className="grid grid-cols-5 gap-8 place-items-center">
      {products.slice(0, 5).map((prod) => {
        return (
          <ProductCard
            key={prod.id}
            id={prod.id}
            name={prod.name}
            price={prod.price}
            url={prod.url}
          />
        );
      })}
    </div>
  );
};

export default PopularProductsWeek;

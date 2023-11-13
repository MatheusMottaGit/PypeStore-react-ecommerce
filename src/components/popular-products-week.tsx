import { api } from "@/lib/axios";
import React from "react";
import ProductCard from "./product-card";
import { Product } from "@/types/types";

const PopularProductsWeek = async () => {
  const response = await api.get("/products");
  const products: Product[] = response.data;

  return (
    <div className="grid grid-cols-5 gap-8 place-items-center">
      {products.slice(0, 5).map(({ id, name, price, overview, url }) => {
        return (
          <ProductCard
            overview={overview}
            key={id}
            id={id}
            name={name}
            price={price}
            url={url}
          />
        );
      })}
    </div>
  );
};

export default PopularProductsWeek;

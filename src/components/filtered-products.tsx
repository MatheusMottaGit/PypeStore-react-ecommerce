"use client";
import { useFetch } from "@/hooks/useFetch";
import React from "react";
import ProductCard from "./product-card";

const FilteredProducts = () => {
  const { products, isLoading } = useFetch();

  return (
    <div className="grid grid-cols-6 gap-4 place-items-center">
      {products?.map(({ id, name, price, url, overview }) => {
        return (
          <ProductCard
            key={id}
            id={id}
            name={name}
            price={price}
            url={url}
            overview={overview}
          />
        );
      })}
    </div>
  );
};

export default FilteredProducts;

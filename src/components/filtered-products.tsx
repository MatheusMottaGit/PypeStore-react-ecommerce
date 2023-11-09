"use client";
import { useFetch } from "@/hooks/useFetch";
import React from "react";

const FilteredProducts = () => {
  const { products } = useFetch();

  return (
    <div className="grid grid-cols-6">
      {products?.map((prod) => {
        return <p>{prod.price}</p>;
      })}
    </div>
  );
};

export default FilteredProducts;

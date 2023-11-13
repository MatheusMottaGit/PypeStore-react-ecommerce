"use client";
import React from "react";
import { Badge } from "./ui/badge";
import { useFetch } from "@/hooks/useFetch";

const ProductsQuantity = () => {
  const { products } = useFetch();

  return (
    <div className="flex items-center gap-2">
      Results: <Badge>{products?.length}</Badge>
    </div>
  );
};

export default ProductsQuantity;

import React from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";
import Image from "next/image";
import { Product } from "@/types/types";
import { Badge } from "./ui/badge";

const ProductCard = ({ id, name, price, url, overview }: Product) => {
  return (
    <Card key={id} className="rounded-sm space-y-4 p-2 h-fit cursor-pointer">
      <Image
        src={url}
        alt=""
        width={200}
        height={200}
        className="h-40 object-cover"
      />

      <div className="flex flex-col gap-2">
        <CardTitle>{name}</CardTitle>

        <CardDescription className="text-xs">
          {overview.slice(0, 15).concat("...")}
        </CardDescription>

        <Badge className="w-fit">R$ {price}</Badge>
      </div>
    </Card>
  );
};

export default ProductCard;

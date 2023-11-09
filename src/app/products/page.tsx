import FilterCategorySelect from "@/components/filter-category-select";
import FilterClotheSelect from "@/components/filter-clothe-select";
import FilteredProducts from "@/components/filtered-products";
import { Button } from "@/components/ui/button";
import { ArrowDown, SlidersHorizontal } from "lucide-react";
import React from "react";

const Products = () => {
  return (
    <main>
      {/* presentation */}
      <div className="bg-[url('../assets/products.png')] h-[60vh] bg-fixed bg-cover flex items-start p-16">
        <div className="flex flex-col items-center text-center gap-4 w-full">
          <h1 className="text-6xl font-bold">
            Check our brand new <br /> collection!
          </h1>

          <p className="text-zinc-900 ml-2 w-2/6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ullam
            dolorem ad, exercitationem doloribus nostrum voluptatum odit
            doloremque!
          </p>

          <Button className="w-36 mt-7 bg-ground text-zinc-300 gap-1">
            View all
            <ArrowDown className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* products section */}
      <div className="bg-zinc-100 flex items-center flex-col gap-16 py-5 px-32">
        {/* filter management bar*/}
        <div className="flex items-center justify-between w-full">
          <div className="flex space-x-2 items-center">
            <SlidersHorizontal className="w-4 h-4" />
            <h2 className="border-r px-2 border-r-ground">Filters</h2>
          </div>

          <div className="flex space-x-4">
            <FilterCategorySelect />

            <FilterClotheSelect />
          </div>
        </div>

        {/* filtered products */}
        <FilteredProducts />
      </div>
    </main>
  );
};

export default Products;

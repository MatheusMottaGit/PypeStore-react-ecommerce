"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Category } from "@/types/types";
import { useFilter } from "@/hooks/useFilter";

const FilterCategorySelect = () => {
  const { onChangeCategory, category } = useFilter();

  return (
    <ul className="flex items-center gap-6 text-sm">
      <li
        data-category={category === Category.WOMEN}
        className="data-[category=true]:border-b-2 data-[category=true]:border-orange-600 cursor-pointer"
        onClick={() => onChangeCategory(Category.WOMEN)}
      >
        Women
      </li>
      <li
        data-category={category === Category.MEN}
        className="data-[category=true]:border-b-2 data-[category=true]:border-orange-600 cursor-pointer"
        onClick={() => onChangeCategory(Category.MEN)}
      >
        Men
      </li>
    </ul>
  );
};

export default FilterCategorySelect;

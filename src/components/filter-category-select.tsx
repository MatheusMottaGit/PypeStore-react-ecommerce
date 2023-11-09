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
import { useFilter } from "@/contexts/filter-context";

const FilterCategorySelect = () => {
  const { setCategory, category } = useFilter();

  function handleChangeCategory(category: Category) {
    setCategory(category);
  }

  console.log(category);

  return (
    <Select>
      <SelectTrigger className="w-52">
        <SelectValue placeholder="Select section" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            value="women's"
            onClick={() => handleChangeCategory(Category.WOMEN)}
          >
            Women's
          </SelectItem>

          <SelectItem
            value="men's"
            onClick={() => handleChangeCategory(Category.MEN)}
          >
            Men's
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterCategorySelect;

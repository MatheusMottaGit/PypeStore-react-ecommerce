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
  const { onChangeCategory } = useFilter();

  return (
    <Select>
      <SelectTrigger className="w-52">
        <SelectValue placeholder="Select section" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            value="women's"
            onClick={() => {
              onChangeCategory(Category.WOMEN);
            }}
          >
            Women's
          </SelectItem>

          <SelectItem
            value="men's"
            onClick={() => {
              onChangeCategory(Category.MEN);
            }}
          >
            Men's
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterCategorySelect;

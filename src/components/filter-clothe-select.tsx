"use client";
import React from "react";
import { Category, Clothe } from "@/types/types";
import { useFilter } from "@/contexts/filter-context";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type SelectValues = {
  id: string;
  value: string;
  title: string;
  clothe: Clothe;
};

const selectValues: SelectValues[] = [
  {
    id: "23892",
    value: "t-shirt",
    title: "T-shirts",
    clothe: "t-shirt",
  },
  {
    id: "21123",
    value: "pants",
    title: "Pants",
    clothe: "pants",
  },
  {
    id: "28323",
    value: "jackets",
    title: "Jackets",
    clothe: "jacket",
  },
  {
    id: "22334",
    value: "shoes",
    title: "Shoes",
    clothe: "shoes",
  },
];

const FilterClotheSelect = () => {
  const { setClothe, category, clothe } = useFilter();

  function onSelectClotheType(clothe: Clothe) {
    setClothe(clothe);
    console.log(clothe);
  }

  return (
    <Select>
      <SelectTrigger className="w-52">
        <SelectValue placeholder="Sort by clothe" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {selectValues.map((select) => {
            return (
              <SelectItem
                key={select.id}
                value={select.value}
                onClick={() => onSelectClotheType(select.clothe)}
                className="cursor-pointer"
              >
                {select.title}
              </SelectItem>
            );
          })}

          {category === Category.WOMEN ? (
            <SelectItem value="dress" className="cursor-pointer">
              Dresses
            </SelectItem>
          ) : (
            <></>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterClotheSelect;

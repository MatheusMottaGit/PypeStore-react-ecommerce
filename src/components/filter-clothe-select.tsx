"use client";
import React from "react";
import { Category, Clothe, SelectValues } from "@/types/types";
import { useFilter } from "@/contexts/filter-context";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

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
  const { setClothe, category } = useFilter();

  function handleChangeClotheType(clothe: Clothe) {
    setClothe(clothe);
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
                onClick={() => handleChangeClotheType(select.clothe)}
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

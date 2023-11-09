"use client";
import React from "react";
import { Category, Clothe } from "@/types/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useFilter } from "@/hooks/useFilter";

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
    clothe: Clothe["T-SHIRT"],
  },
  {
    id: "21123",
    value: "pants",
    title: "Pants",
    clothe: Clothe.PANTS,
  },
  {
    id: "28323",
    value: "jackets",
    title: "Jackets",
    clothe: Clothe.JACKET,
  },
  {
    id: "22334",
    value: "shoes",
    title: "Shoes",
    clothe: Clothe.SHOES,
  },
];

const FilterClotheSelect = () => {
  const { onChangeClotheType, category } = useFilter();

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
                onClick={() => onChangeClotheType(select.clothe)}
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

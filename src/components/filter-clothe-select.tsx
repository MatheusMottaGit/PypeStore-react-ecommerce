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
  title: string;
  clothe: Clothe;
};

const selectValues: SelectValues[] = [
  { id: "1", title: "T-shirts", clothe: Clothe["T-SHIRT"] },
  { id: "2", title: "Pants", clothe: Clothe.PANTS },
  { id: "3", title: "Shoes", clothe: Clothe.SHOES },
  { id: "4", title: "Jackets", clothe: Clothe.JACKET },
  { id: "5", title: "Dresses", clothe: Clothe.DRESS },
];

const FilterClotheSelect = () => {
  const { onChangeClotheType } = useFilter();

  return (
    <Select>
      <SelectTrigger className="w-52">
        <SelectValue placeholder="Sort by clothe" />
      </SelectTrigger>
      <SelectContent className="bg-zinc-100 px-2 py-1 text-sm">
        <SelectGroup className="space-y-2">
          {selectValues.map(({ id, title, clothe }) => {
            return (
              <li
                key={id}
                className="list-none cursor-pointer"
                onClick={() => onChangeClotheType(clothe)}
              >
                {title}
              </li>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterClotheSelect;

"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SelectValues } from "@/types/types";
import { useFilter } from "@/contexts/filter-context";

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

const FilterSelect = () => {
  const { setClothe } = useFilter();

  return (
    <Select>
      <SelectTrigger className="w-52">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {selectValues.map((select) => {
            return (
              <SelectItem
                key={select.id}
                value={select.value}
                onClick={() => setClothe(select.clothe)}
                className="cursor-pointer"
              >
                {select.title}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterSelect;

import { Category, Clothe } from "@/types/types";
import { createContext, useContext, useState } from "react";

export const FilterContext = createContext({
  clothe: "t-shirt",
  category: Category.WOMEN,
  setCategory: (category: Category) => {},
  setClothe: (clothe: Clothe) => {},
});

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [clothe, setClothe] = useState<Clothe>("t-shirt");
  const [category, setCategory] = useState<Category>(Category.WOMEN);

  return (
    <FilterContext.Provider
      value={{
        clothe,
        setClothe,
        category,
        setCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);

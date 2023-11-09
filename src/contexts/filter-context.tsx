import { Category, Clothe } from "@/types/types";
import { createContext, useContext, useState } from "react";

export const FilterContext = createContext({
  clothe: Clothe.DRESS,
  category: Category.WOMEN,
  onChangeCategory: (category: Category) => {},
  onChangeClotheType: (clothe: Clothe) => {},
});

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [clothe, setClothe] = useState(Clothe.DRESS);
  const [category, setCategory] = useState(Category.WOMEN);

  const onChangeCategory = (category: Category) => {
    setCategory(category);
  };

  function onChangeClotheType(clothe: Clothe) {
    setClothe(clothe);
  }

  return (
    <FilterContext.Provider
      value={{
        clothe,
        onChangeClotheType,
        category,
        onChangeCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

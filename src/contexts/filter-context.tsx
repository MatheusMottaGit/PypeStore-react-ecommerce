import { Clothe } from "@/types/types";
import { createContext, useContext, useState } from "react";

export const FilterContext = createContext({
  clothe: "t-shirt",
  setClothe: (clothe: Clothe) => {},
});

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [clothe, setClothe] = useState<Clothe>("t-shirt");

  return (
    <FilterContext.Provider value={{ clothe, setClothe }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);

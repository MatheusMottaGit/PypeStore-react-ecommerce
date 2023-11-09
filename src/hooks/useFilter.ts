import { FilterContext } from "@/contexts/filter-context";
import { useContext } from "react";

export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};

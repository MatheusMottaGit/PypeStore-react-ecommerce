"use client";
import { FilterProvider } from "@/contexts/filter-context";

export const Filter = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <FilterProvider>{children}</FilterProvider>
    </>
  );
};

"use client";
import { FilterProvider } from "@/contexts/filter-context";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <FilterProvider>{children}</FilterProvider>
    </>
  );
};

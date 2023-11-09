"use client";
import { queryClient } from "@/lib/queryClient";
import React from "react";
import { QueryClientProvider } from "react-query";

export const Query = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

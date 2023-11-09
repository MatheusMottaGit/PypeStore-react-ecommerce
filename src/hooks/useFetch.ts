"use client";
import { useFilter } from "@/contexts/filter-context";
import { amountQueries } from "@/helpers/database-filter";
import { api } from "@/lib/axios";
import { Product } from "@/types/types";
import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";

interface QueryResponse {
  products: Product[];
}

export const fetcher = (query: string): AxiosPromise<QueryResponse> => {
  return axios.get(query);
};

export const useFetch = () => {
  const { category, clothe } = useFilter();

  const query = amountQueries(category, clothe);

  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ["products", category, clothe],
  });

  const products = data?.data.products;

  return {
    products,
  };
};

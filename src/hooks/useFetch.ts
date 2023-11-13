import { api } from "@/lib/axios";
import { Product } from "@/types/types";
import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";
import { useFilter } from "./useFilter";
import { amountQueries } from "@/helpers/database-filter";

export function fetcher(query: string): AxiosPromise<Product[]> {
  return axios.get(query);
}

export const useFetch = () => {
  const { category, clothe } = useFilter();

  const query = amountQueries(category, clothe);

  const { data, isLoading } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ["products", category, clothe],
  });

  return {
    products: data?.data,
    isLoading,
  };
};

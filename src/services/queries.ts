import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./api";
export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

import { useQuery } from "@tanstack/react-query";
import { getProducts, getCartItems } from "./api";
export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export const useGetCartItems = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCartItems,
  });
};

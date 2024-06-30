import { useQuery, useMutation } from "@tanstack/react-query";
import { getProducts, updateCartItems } from "./api";
export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export const useUpdateCartItems = () => {
  return useMutation({
    mutationKey: ["cart/update"],
    mutationFn: updateCartItems
  });
}
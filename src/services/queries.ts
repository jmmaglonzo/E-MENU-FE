import { useQuery, useMutation } from "@tanstack/react-query";
import { addCartItem, getProducts, updateCartItems } from "./api";
export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export const useUpdateCartItems = () => {
  return useMutation({
    mutationKey: ["cart/update"],
    mutationFn: updateCartItems,
  });
};

export const useAddCart = () => {
  return useMutation({
    mutationKey: ["cart/add"],
    mutationFn: addCartItem,
  });
};

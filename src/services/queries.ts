import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addCartItem,
  deleteTableQueue,
  getProducts,
  getTableQueue,
  searchProducts,
  updateCartItems,
  updateTableQueue,
} from "./api";
import { toast } from "sonner";
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

export const useGetTableQueue = () => {
  return useQuery({
    queryKey: ["tableQueue"],
    queryFn: getTableQueue,
  });
};

export const useDeclineTableQueue = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["table/queue"],
    mutationFn: deleteTableQueue,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tableQueue"] });
      toast.success("Table successfully declined.");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
};

export const useApproveTableQueue = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["table/queue"],
    mutationFn: updateTableQueue,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tableQueue"] });
      toast.success("Table successfully approved.");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
};

export const useSearchProducts = (product: string) => {
  return useQuery({
    queryKey: ["searchProducts", product],
    queryFn: searchProducts,
  });
};

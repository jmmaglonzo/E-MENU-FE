import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addCartItem,
  deleteTableQueue,
  getProducts,
  getTableQueue,
  getCartItems,
  updateTableQueue,
} from "./api";
import { toast } from "sonner";
export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export const useGetCartItems = () => {
  return useQuery({
    queryKey: ["cartItems"],
    queryFn: getCartItems,
  });
};

export const useAddCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["cart/add"],
    mutationFn: addCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
      toast.success("Item Added in Cart");
    },
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

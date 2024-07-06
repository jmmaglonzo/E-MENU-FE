import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addCartItem,
  deleteTableQueue,
  getProducts,
  getTableQueue,
  getCartItems,
  updateTableQueue,
  subCartItem,
  orderItem,
  getMyOrders,
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
    },
  });
};

export const useSubCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["cart/sub"],
    mutationFn: subCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
    },
  });
};

export const useOrderItem = () => {
  return useMutation({
    mutationKey: ["order"],
    mutationFn: orderItem,
  });
};

export const useGetMyOrders = () => {
  return useQuery({
    queryKey: ["my_orders"],
    queryFn: getMyOrders,
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
      toast.success("Success");
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
      toast.success("Success");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
};

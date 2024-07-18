"use client";

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
  getOrders,
  updateOrderStatus,
  confirmRegister,
  loginUser,
  getMyTableStatus,
  getMyLatestOrder,
  getAssistanceRequests,
  deleteAssistanceRequest,
  updateAssistanceRequest,
  requestAssistance,
  sendEmailOTP,
  verifyEmailOTP,
  getMyTotalLoyalties,
  logoutUser,
  getMyLoyaltyHistory,
  registerNewStaff,
  addItemProduct,
  getCategories,
  deleteProducts,
  updateProducts,
  getRewardsList,
  redeemLoyaltyReward,
} from "./api";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { AxiosError } from "axios";
import { CartItem } from "@/types/cart";
import { MyOrder } from "@/types/myOrder";

export const useGetMyTableStatus = () => {
  return useQuery({
    queryKey: [`my_status`],
    queryFn: getMyTableStatus,
    retry: 0,
  });
};

export const useConfirmRegister = () => {
  const searchParams = useSearchParams();
  const tableNo = searchParams?.get("tableNo");
  const sessionId = searchParams?.get("sessionId");

  return useQuery({
    queryKey: [`confirm_register`],
    queryFn: async () => {
      if (!tableNo || !sessionId) return { message: "goods" };

      return await confirmRegister(tableNo as string, sessionId as string);
    },
    //This query will not run until tableNo and sessionId is present
    enabled: !!tableNo && !!sessionId,
  });
};

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
    onMutate: async (productId) => {
      await queryClient.cancelQueries({ queryKey: ["cartItems"] });
      const oldCartItems = queryClient.getQueryData([
        "cartItems",
      ]) as CartItem[];
      const cartItem = oldCartItems.find((item) => item.id === productId);
      queryClient.setQueryData(["cartItems"], (oldCartItems: CartItem[]) => {
        const data = [...oldCartItems];

        if (!cartItem) {
          data.push({ id: productId, quantity: 1 });
        } else {
          const itemIdx = data.indexOf(cartItem);
          data[itemIdx] = { id: productId, quantity: cartItem.quantity + 1 };
        }

        return data;
      });

      return oldCartItems;
    },
    onError: (_error, _cartItem, context) => {
      queryClient.setQueryData(["cartItems"], context);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
    },
  });
};

export const useSubCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["cart/sub"],
    mutationFn: subCartItem,
    onMutate: async (productId) => {
      await queryClient.cancelQueries({ queryKey: ["cartItems"] });
      const oldCartItems = queryClient.getQueryData([
        "cartItems",
      ]) as CartItem[];
      const cartItem = oldCartItems.find((item) => item.id === productId);
      queryClient.setQueryData(["cartItems"], (oldCartItems: CartItem[]) => {
        const data = [...oldCartItems];

        if (cartItem) {
          const itemIdx = data.indexOf(cartItem);
          const newQuantity = cartItem.quantity - 1;

          if (newQuantity === 0) {
            data.splice(itemIdx, 1);
          } else data[itemIdx] = { id: cartItem.id, quantity: newQuantity };
        }

        return data;
      });

      return oldCartItems;
    },
    onError: (_error, _cartItem, context) => {
      queryClient.setQueryData(["cartItems"], context);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
    },
  });
};

export const useOrderItem = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationKey: ["order"],
    mutationFn: orderItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my_orders", "orders"] });
      router.push("/order_waiting/order_summary");
    },
    onError: (reason: AxiosError) => {
      toast.error(
        (reason.response?.data as { message: string }).message ||
          (reason.response?.data as string).slice(0, 25),
      );
    },
  });
};

export const useGetMyOrders = () => {
  return useQuery({
    queryKey: ["my_orders"],
    queryFn: getMyOrders,
  });
};

export const useGetMyLatestOrder = () => {
  return useQuery({
    queryKey: ["my_latest_order"],
    queryFn: getMyLatestOrder,
  });
};

export const useGetOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });
};

export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["order/status"],
    mutationFn: updateOrderStatus,
    onMutate: async ({ orderNo, status }) => {
      await queryClient.cancelQueries({ queryKey: ["orders"] });
      const oldOrders = queryClient.getQueryData(["orders"]) as MyOrder[];

      const order = oldOrders.find((item) => item.orderNo === orderNo);
      queryClient.setQueryData(["orders"], (oldOrders: MyOrder[]) => {
        const data = [...oldOrders];

        if (order) {
          const orderIdx = data.indexOf(order);

          data[orderIdx] = (({
            transactionId,
            orderNo,
            orders,
            createdAt,
            total,
          }) => ({ transactionId, orderNo, orders, createdAt, total, status }))(
            order,
          );
        }

        return data;
      });
      return oldOrders;
    },
    onError: (reason: AxiosError, _cartItem, context) => {
      toast.error(
        (reason.response?.data as { message: string }).message ||
          (reason.response?.data as string),
      );
      queryClient.setQueryData(["orders"], context);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders", "my_latest_order", "my_orders"],
      });
    },
  });
};

export const useGetTableQueue = () => {
  return useQuery({
    queryKey: ["tableQueue"],
    queryFn: getTableQueue,
    refetchInterval: 5 * 1000,
    staleTime: 60 * 1000,
  });
};

export const useDeclineTableQueue = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["table/queue"],
    mutationFn: deleteTableQueue,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tableQueue", "my_status"] });
      toast.success("Success");
    },
    onError: (reason: AxiosError) => {
      toast.error(
        (reason.response?.data as { message: string }).message ||
          (reason.response?.data as string),
      );
    },
  });
};

export const useApproveTableQueue = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["table/queue"],
    mutationFn: updateTableQueue,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tableQueue", "my_status"] });
      toast.success("Success");
    },
    onError: (reason: AxiosError) => {
      toast.error(
        (reason.response?.data as { message: string }).message ||
          (reason.response?.data as string),
      );
    },
  });
};

export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: () => {
      toast.success("Logged in");
      router.push("/kitchen");
      router.refresh();
    },
    onError: (reason: AxiosError) => {
      toast.error(
        (reason.response?.data as { message: string }).message ||
          (reason.response?.data as string),
      );
    },
  });
};

export const useLogout = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      router.push("/login");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
};

export const useRequestAssistance = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["requestAssistance"],
    mutationFn: requestAssistance,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["assistanceRequests"] });
      toast.success("Assistance Requested.");
    },
    onError: (reason: AxiosError) => {
      toast.error(
        (reason.response?.data as { message: string }).message ||
          (reason.response?.data as string),
      );
    },
  });
};

export const useGetAssistanceRequests = () => {
  return useQuery({
    queryKey: ["assistanceRequests"],
    queryFn: getAssistanceRequests,
    refetchInterval: 5 * 1000,
    staleTime: 60 * 1000,
  });
};

export const useDeclineAssistanceRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["assistance/requests"],
    mutationFn: deleteAssistanceRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["assistanceRequests"] });
      toast.success("Success");
    },
    onError: (reason: AxiosError) => {
      toast.error(
        (reason.response?.data as { message: string }).message ||
          (reason.response?.data as string),
      );
    },
  });
};

export const useApproveAssistanceRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["assistance/requests"],
    mutationFn: updateAssistanceRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["assistanceRequests"] });
      toast.success("Success");
    },
    onError: (reason: AxiosError) => {
      toast.error(
        (reason.response?.data as { message: string }).message ||
          (reason.response?.data as string),
      );
    },
  });
};

export const useSendEmailOTP = () => {
  return useMutation({
    mutationKey: ["loyalty/login"],
    mutationFn: sendEmailOTP,
    onSuccess: () => {
      toast.success("Success");
    },
    onError: (reason: AxiosError) => {
      toast.error(
        (reason.response?.data as { message: string }).message ||
          (reason.response?.data as string),
      );
    },
  });
};

export const useVerifyEmailOTP = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["loyalty/verify"],
    mutationFn: verifyEmailOTP,
    onSuccess: () => {
      toast.success("Success");
      router.push("/redeem/rewards");
      router.refresh();
    },
    onError: (reason: AxiosError) => {
      toast.error(
        (reason.response?.data as { message: string }).message ||
          (reason.response?.data as string),
      );
    },
  });
};

export const useGetMyTotalLoyalties = () => {
  return useQuery({
    queryKey: ["myTotalLoyalties"],
    queryFn: getMyTotalLoyalties,
  });
};

export const useGetMyLoyaltyHistory = () => {
  return useQuery({
    queryKey: ["myLoyaltyHistory"],
    queryFn: getMyLoyaltyHistory,
  });
};

export const useRegisterNewStaff = () => {
  return useMutation({
    mutationFn: registerNewStaff,
    onSuccess: () => {
      toast.success("New staff created");
    },
    onError: () => {
      toast.error("Failed to create new staff");
    },
  });
};

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addItemProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("New Product Added");
    },
    onError: () => {
      toast.error("Failed to create new Products");
    },
  });
};

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["getCategories"],
    queryFn: getCategories,
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["products/delete"],
    mutationFn: deleteProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product deleted successfully,");
    },
    onError: () => {
      toast.error("Failed to delete Products");
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["products/edit"],
    mutationFn: updateProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product updated successfully,");
    },
    onError: () => {
      toast.error("Failed to update Products");
    },
  });
};

export const useGetRewardsList = () => {
  return useQuery({
    queryKey: ["rewardsList"],
    queryFn: getRewardsList,
  });
};

export const useRedeemLoyaltyReward = () => {
  return useMutation({
    mutationFn: redeemLoyaltyReward,
    onSuccess: () => {
      toast.success("Reward redeemed");
    },
    onError: () => {
      toast.error("Failed to redeem reward");
    },
  });
};

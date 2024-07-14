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
} from "./api";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { AxiosError } from "axios";

export const useGetMyTableStatus = () => {
  return useQuery({
    queryKey: [`/my_status`],
    queryFn: getMyTableStatus,
    retry: 0,
  });
};

export const useConfirmRegister = () => {
  const searchParams = useSearchParams();
  const tableNo = searchParams.get("tableNo");
  const sessionId = searchParams.get("sessionId");

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
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationKey: ["order"],
    mutationFn: orderItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my_orders"] });
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
    onSuccess: (data: { message: string }) => {
      queryClient.invalidateQueries({
        queryKey: ["orders", "my_latest_order", "my_orders"],
      });
      toast.success(data.message);
    },
    onError: (reason: AxiosError) => {
      toast.error(
        (reason.response?.data as { message: string }).message ||
          (reason.response?.data as string),
      );
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
      queryClient.invalidateQueries({ queryKey: ["tableQueue"] });
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
      router.replace("/redeem/rewards");
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

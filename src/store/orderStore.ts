import { OrderTableType } from "@/types/table";

import { OrderStatus } from "@/types/myOrder";
import { create } from "zustand";

interface MyOrderStore {
  orderStatus: OrderStatus;
  setOrderStatus: (status: OrderStatus) => void;
}

export const useMyOrderStore = create<MyOrderStore>((set) => ({
  orderStatus: OrderStatus.PENDING,
  setOrderStatus: (status: OrderStatus) => set({ orderStatus: status }),
}));

interface OrdersStore {
    orders: OrderTableType[]
    setOrders: (orders: OrderTableType[]) => void;
}

export const useOrdersStore = create<OrdersStore>((set) => ({
    orders: [],
    setOrders: (orders: OrderTableType[]) => set({ orders }),
  }));
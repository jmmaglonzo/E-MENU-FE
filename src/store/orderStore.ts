import { OrderTableType } from "@/types/table";

import { MyLatestOrder, OrderStatus } from "@/types/myOrder";
import { create } from "zustand";

interface MyOrderStore {
  latestOrder: MyLatestOrder | never[];
  serverRetrieved: boolean;
  setLatestOrder: (order: MyLatestOrder) => void;
}

export const useMyOrderStore = create<MyOrderStore>((set) => ({
  latestOrder: [],
  serverRetrieved: false, 
  setLatestOrder: (order: MyLatestOrder) => set({ latestOrder: order, serverRetrieved: true }),
}));

interface OrdersStore {
    orders: OrderTableType[]
    setOrders: (orders: OrderTableType[]) => void;
}

export const useOrdersStore = create<OrdersStore>((set) => ({
    orders: [],
    setOrders: (orders: OrderTableType[]) => set({ orders }),
  }));
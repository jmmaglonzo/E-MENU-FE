import { OrderStatus } from "@/types/myOrder";
import { create } from "zustand";

interface MyOrderStore {
  orderStatus: OrderStatus;
  setOrderStatus: (status: OrderStatus) => void;
}

const useMyOrderStore = create<MyOrderStore>((set) => ({
  orderStatus: OrderStatus.PENDING,
  setOrderStatus: (status: OrderStatus) => set({ orderStatus: status }),
}));

export default useMyOrderStore;

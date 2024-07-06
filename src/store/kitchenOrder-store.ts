import { OrderTableType } from "@/types/table";
import { create } from "zustand";

interface useKitchenOrderStore {
  selectedItem: OrderTableType | null;
  setSelectedItem: (item: OrderTableType | null) => void;
}

const useKitchenOrderStore = create<useKitchenOrderStore>((set) => ({
  selectedItem: null,
  setSelectedItem: (item) => set({ selectedItem: item }),
}));

export default useKitchenOrderStore;

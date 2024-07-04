import { ItemTypes } from "./../types/productCard";
import { create } from "zustand";

interface CardStore {
  selectedItem: ItemTypes | null;
  setSelectedItem: (item: ItemTypes | null) => void;
}

const useCardStore = create<CardStore>((set) => ({
  selectedItem: null,
  setSelectedItem: (item) => set({ selectedItem: item }),
}));

export default useCardStore;

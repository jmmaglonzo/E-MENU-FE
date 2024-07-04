import { ItemTypes } from "./../types/productCard";
import { create } from "zustand";

interface CardStore {
  searchCard: string;
  selectedItem: ItemTypes | null;
  setSelectedItem: (item: ItemTypes | null) => void;
}

const useCardStore = create<CardStore>((set) => ({
  searchCard: "",
  selectedItem: null,
  setSelectedItem: (item) => set({ selectedItem: item }),
}));

export default useCardStore;

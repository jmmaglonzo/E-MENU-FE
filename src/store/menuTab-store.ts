import { create } from "zustand";

interface MenuStore {
  selected: string;
  setSelected: (val: string) => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  selected: "all",
  setSelected: (value) => set(() => ({ selected: value })),
}));

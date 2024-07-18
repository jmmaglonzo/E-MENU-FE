import { create } from "zustand";
import { TableTypes } from "@/types/table";

interface useTableQueueStore {
  queue: TableTypes[] | null;
  setQueue: (queue: TableTypes[]) => void;
}

export const useTableQueueStore = create<useTableQueueStore>((set) => ({
    queue: null,
    setQueue: (queue: TableTypes[]) => set({ queue }),
}));


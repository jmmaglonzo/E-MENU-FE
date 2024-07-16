import { CartItem } from "@/types/cart";
import { create } from "zustand";

interface CartStore {
   items: CartItem[] | never[];
   error: Error | null;
   setCartItems: (cart: CartItem[]) => void;
}

export const useCart = create<CartStore>((set) => ({
    items: [],
    error: null,
    setCartItems: (items: CartItem[]) => set({items})
}));
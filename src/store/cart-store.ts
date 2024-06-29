import { create } from "zustand";

interface CartItem {
    id: string;
    quantity: number;
}

interface CartData {
    items: CartItem[];
}

interface CartActions {
    addCart: (id: string) => void;
    subCart: (id: string) => void;
}

function cartReducer(state: CartItem[], action: keyof CartActions,id: string): CartItem[] {
    const items = state;
    const item = items.find(item => item.id === id)  as CartItem;
    const itemIdx = items.indexOf(item);

    switch (action) {
        case "addCart": 
            if (itemIdx === -1) {
                items.push({
                    id,
                    quantity: 1
                });
            } else {
                const quantity = item.quantity || 0;
                items[itemIdx].quantity = quantity + 1;
            }
            break;
        case "subCart": 
            let quantity = item.quantity || 0;
            quantity = quantity - 1;

            if (quantity === 0) {
                items.splice(itemIdx,1);
            } else items[itemIdx].quantity = quantity;

    }
    return items;
}

export const useCart = create<CartData & CartActions>((set) => ({
    items: [],
    addCart: (id: string) => set((state) => ({
        items: cartReducer(state.items, "addCart",id)
    })),
    subCart: (id: string) => set((state) => ({
        items: cartReducer(state.items, "subCart",id)
    }))
}));
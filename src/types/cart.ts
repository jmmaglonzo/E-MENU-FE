export interface CartItem {
    id: string;
    quantity: number;
}

export interface CartData {
    items: CartItem[];
}
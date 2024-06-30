export interface CartItem {
    id: string;
    quantity: number;
}

export interface CartData {
    items: CartItem[];
}

export interface CartItemServer {
    id: string;
    quantity: number;
    cartId: string;
    productId: string;
}
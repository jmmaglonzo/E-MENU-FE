import { ItemTypes } from "@/types/productCard";
import api from "./axios";
import { CartItem, CartItemServer } from "@/types/cart";

export const getProducts = async () => {
  const { data } = await api.get<ItemTypes[]>("products");
  return data;
};

export const getCartItems = async() => {
  const { data } = await api.get<CartItemServer[]>("cart");
  const items = data.map(item => ({id: item.productId, quantity: item.quantity}));
  return items;
}

export const updateCartItems = async(cartItems: CartItem[]) => {
  const { data } = await api.post("cart/update",{cartItems});
  return data;
}
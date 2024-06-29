import { ItemTypes } from "@/types/productCard";
import api from "./axios";
import { CartItem } from "@/types/cart";

export const getProducts = async () => {
  const { data } = await api.get<ItemTypes[]>("products");
  return data;
};

export const getCartItems = async() => {
  const { data } = await api.get<CartItem[]>("cart");
  return data;
}
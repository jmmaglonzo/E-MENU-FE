import { QueryFunctionContext } from "@tanstack/react-query";
import api from "./axios";

import { ItemTypes } from "@/types/productCard";
import { CartItem, CartItemServer } from "@/types/cart";
import { TableTypes } from "@/types/table";

export const getProducts = async () => {
  const { data } = await api.get<ItemTypes[]>("products");
  return data;
};

export const getCartItems = async () => {
  const { data } = await api.get<CartItemServer[]>("cart");
  const items = data.map((item) => ({
    id: item.productId,
    quantity: item.quantity,
  }));
  return items;
};

export const updateCartItems = async (cartItems: CartItem[]) => {
  const { data } = await api.post("cart/update", { cartItems });
  return data;
};

export const addCartItem = async (id: string) => {
  const { data } = await api.post("cart/add", { id });

  return data;
};

export const getTableQueue = async () => {
  const { data } = await api.get<TableTypes[]>("table/queues");

  return data;
};

export const deleteTableQueue = async (sessionId: string) => {
  await api.delete(`table/decline/${sessionId}`);
};

export const updateTableQueue = async (sessionId: string) => {
  const { data } = await api.patch("table/approve", { sessionId });
  return data;
};

export const searchProducts = async ({
  queryKey,
}: QueryFunctionContext<[string, string | null | undefined]>) => {
  console.log(queryKey);
  return queryKey;
};

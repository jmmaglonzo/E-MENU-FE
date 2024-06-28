import { ItemTypes } from "@/types/productCard";
import api from "./axios";

export const getProducts = async () => {
  const { data } = await api.get<ItemTypes[]>("products");
  return data;
};

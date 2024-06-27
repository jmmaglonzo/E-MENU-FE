import { ProductType } from "@/types/productCard";
import api from "./axios";

export const getProducts = async () => {
  const { data } = await api.get<ProductType[]>("products");
  return data;
};

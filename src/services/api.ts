import api from "./axios";

import { ItemTypes } from "@/types/productCard";
import { CartItemServer } from "@/types/cart";
import { OrderTableType, TableTypes } from "@/types/table";
import { MyLatestOrder, MyOrder, OrderStatus } from "@/types/myOrder";
import { LoginType } from "@/types/login";
import { setCookie } from "cookies-next";
import { AssistanceRequest } from "@/types/assistance";

export const getMyTableStatus = async () => {
  const { data } = await api.get("/my_status");

  return data;
};

export const confirmRegister = async (tableNo: string, sessionId: string) => {
  const { data } = await api.get(
    `confirm_register?tableNo=${Number(tableNo)}&sessionId=${sessionId}`,
  );
  setCookie("_table_session", sessionId);
  return Object.assign(data, { cleanURL: true });
};

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

export const addCartItem = async (id: string) => {
  const { data } = await api.post("cart/add", { id });

  return data;
};

export const subCartItem = async (id: string) => {
  const { data } = await api.post("cart/sub", { id });

  return data;
};

export const orderItem = async ({
  loyalty,
  name,
  email,
  contactNo,
  paymentMethod,
}: {
  loyalty: boolean;
  name?: string;
  email?: string;
  contactNo?: string;
  paymentMethod: "ONLINE" | "CASH";
}) => {
  const { data } = await api.post("order", {
    loyalty,
    name,
    email,
    contactNo,
    paymentMethod,
  });

  return data;
};

export const getMyOrders = async () => {
  const { data } = await api.get<MyOrder[]>("my_orders");

  return data;
};

export const getMyLatestOrder = async () => {
  const { data } = await api.get<MyLatestOrder>("my_latest_order");

  return data;
};

export const getOrders = async () => {
  const { data } = await api.get<OrderTableType[]>("orders");

  return data;
};

export const updateOrderStatus = async ({
  orderNo,
  status,
}: {
  orderNo: number;
  status: OrderStatus;
}) => {
  const { data } = await api.post<{ message: string }>("order/status", {
    orderNo,
    status,
  });

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

export const loginUser = async ({ email, password }: LoginType) => {
  const { data } = await api.post("auth/login", { email, password });
  setCookie("_user_session", data.sessionId);
  return data;
};

export const logoutUser = async () => {
  const response = await api.get("auth/logout");
  return response;
};

export const requestAssistance = async () => {
  const { data } = await api.get("assistance/request");

  return data;
};

export const getAssistanceRequests = async () => {
  const { data } = await api.get<AssistanceRequest[]>("assistance/requests");

  return data;
};

export const deleteAssistanceRequest = async (sessionId: string) => {
  await api.delete(`assistance/decline/${sessionId}`);
};

export const updateAssistanceRequest = async (sessionId: string) => {
  const { data } = await api.patch("assistance/approve", { sessionId });
  return data;
};

export const sendEmailOTP = async (email: string) => {
  const { data } = await api.post("auth/loyalty/login", { email });
  return data;
};

export const verifyEmailOTP = async (code: number) => {
  const { data } = await api.post("auth/loyalty/verify", { code });

  setCookie("_loyalty_session", data.loyaltySession);
  return data;
};

export const getMyTotalLoyalties = async () => {
  const { data } = await api.get("my_total_loyalties");
  return data;
};

export const deleteProductItem = async (id: string) => {
 await api.delete(`/product/delete/${id}`); 
 
};
export const editProductItem = async (id: string) => {
  const response = await api.put(`products/${id}`);
  return response.data;
}


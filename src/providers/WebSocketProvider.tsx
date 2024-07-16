"use client";

import io, { Socket } from "socket.io-client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import axios, { AxiosError } from "axios";
import { OrderStatus } from "@/types/myOrder";
import { useRouter } from "next/navigation";
import { useOrdersStore, useMyOrderStore } from "@/store/orderStore";
export interface SocketEvents {
  updateStatus: (orderNo: number, status: OrderStatus) => void;
  socket: Socket | null;
  getOrders: () => void;
  getMyLatestOrderUpdate: () => void;
  addToCart: (productId: string) => void;
}

const WebSocketContext = createContext<SocketEvents | null>(null);

async function getCookies() {
  try {
    const request = await axios.get("/api/getCookies");

    return request.data;
  } catch (e) {
    console.log((e as AxiosError).message);
  }
}

export function WebSocketProvider({ children }: { children: React.ReactNode }) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const router = useRouter();
  const setLatestOrder = useMyOrderStore((store) => store.setLatestOrder);
  const setOrders = useOrdersStore((store) => store.setOrders);

  useEffect(() => {
    getCookies().then((cookies = {}) => {
      const socket = io(process.env.NEXT_PUBLIC_WS_BASE_URL as string, {
        query: {
          tableSession: cookies._table_session,
          userSession: cookies._user_session,
        },
      });

      socket.on("order status update", (data) => {
        if (data.status === "CANCELLED") router.replace("/");
        if (data.status === "COMPLETED") {
          if (data.paymentMethod === "CASH")
            router.replace("/checkout/cash-payment");
          else router.replace(data.checkoutURL as string);
        }
      });

      setSocket(socket);
    });
  }, []);

  function updateStatus(orderNo: number, status: OrderStatus) {
    socket?.emit("update order status", { orderNo, status });
  }

  function getOrders() {
    socket?.emit("get orders");

    socket?.on("orders sent", (data) => {
      setOrders(data);
    });
  }

  function addToCart(productId: string) {
    socket?.emit("add cart", { productId });
  }

  function getMyLatestOrderUpdate() {
    socket?.emit("my latest order status");

    socket?.on("latest order update", (response) => {
      if (response.status === 200) setLatestOrder(response.data);
    });
  }

  return (
    <WebSocketContext.Provider
      value={{
        updateStatus,
        socket,
        getOrders,
        getMyLatestOrderUpdate,
        addToCart,
      }}
    >
      {children}
    </WebSocketContext.Provider>
  );
}

export function useWebSocketContext() {
  return useContext(WebSocketContext);
}

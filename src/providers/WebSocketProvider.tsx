"use client";

import io, { Socket } from "socket.io-client";
import { createContext, useContext, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { OrderStatus } from "@/types/myOrder";
import { useRouter } from "next/navigation";
import { useOrdersStore, useMyOrderStore } from "@/store/orderStore";
import { useCartStore } from "@/store/cart-store";
import { getCookie, setCookie } from "cookies-next";
import { toast } from "sonner";
export interface SocketEvents {
  updateStatus: (orderNo: number, status: OrderStatus) => void;
  socket: Socket | null;
  getOrders: () => void;
  getMyLatestOrderUpdate: () => void;
  addToCart: (productId: string) => void;
  subToCart: (productId: string) => void;
  checkoutCart: (paymentMethod: "ONLINE" | "CASH") => void;
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
  const setCartItems = useCartStore((store) => store.setCartItems);

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

      socket.on("cart update", (response) => {
        setCartItems(response.data);
        setCookie("_cart_items", response.data.length, {
          secure: true,
          sameSite: "none",
        });
      });

      socket.on("error cart action", (response) => {
        console.log(response);
        toast.error(response.message || response.error);
      });

      socket.on("error", (response) => {
        const error = response.error;
        const message = error.message;
        toast.error(message ? message : error);
      });

      setSocket(socket);
    });
  }, []);

  function updateStatus(orderNo: number, status: OrderStatus) {
    socket?.emit("update order status", { orderNo, status });
  }

  function getOrders() {
    socket?.emit("get orders");

    socket?.on("orders sent", ({ data, error }) => {
      if (!error) setOrders(data);
    });
  }

  function addToCart(productId: string) {
    socket?.emit("add cart", { productId });
  }

  function subToCart(productId: string) {
    socket?.emit("sub cart", { productId });
  }

  function getMyLatestOrderUpdate() {
    socket?.emit("my latest order status");

    socket?.on("latest order update", (response) => {
      if (response.status === 200) {
        setLatestOrder(response.data);
        if (response.data.status !== "COMPLETED") {
          setCookie("_is_ordering", 1, {
            secure: true,
            sameSite: "none",
          });
        }
        router.replace("/order_waiting/order_summary");
      }
    });
  }

  function checkoutCart(paymentMethod: "ONLINE" | "CASH") {
    socket?.emit("checkout cart", { paymentMethod });
  }

  return (
    <WebSocketContext.Provider
      value={{
        updateStatus,
        socket,
        getOrders,
        getMyLatestOrderUpdate,
        addToCart,
        subToCart,
        checkoutCart,
      }}
    >
      {children}
    </WebSocketContext.Provider>
  );
}

export function useWebSocketContext() {
  return useContext(WebSocketContext);
}

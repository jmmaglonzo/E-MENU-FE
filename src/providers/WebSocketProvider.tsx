"use client";

import io, { Socket } from "socket.io-client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";
import axios, { AxiosError } from "axios";
import { SocketEvents } from "@/types/socket";
import { OrderStatus } from "@/types/myOrder";
import { useRouter } from "next/navigation";
import useMyOrderStore from "@/store/myOrder-store";

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
  const setOrderStatus = useMyOrderStore((store) => store.setOrderStatus);

  useEffect(() => {
    getCookies().then((cookies = {}) => {
      console.log(cookies);

      const socket = io(process.env.NEXT_PUBLIC_WS_BASE_URL as string, {
        query: {
          tableSession: cookies._table_session,
          userSession: cookies._user_session,
        },
      });

      socket.on("order status update", (data) => {
        console.log(data);
        if (data.status === "CANCELLED") router.replace("/");
        if (data.status === "COMPLETED") {
          if (data.paymentMethod === "CASH")
            router.replace("/checkout/cash-payment");
          else router.replace(data.checkoutURL as string);
        }

        setOrderStatus(data.status);
      });

      setSocket(socket);
    });
  }, []);

  function updateStatus(orderNo: number, status: OrderStatus) {
    socket?.emit("update order status", { orderNo, status });
  }

  return (
    <WebSocketContext.Provider value={{ updateStatus, socket }}>
      {children}
    </WebSocketContext.Provider>
  );
}

export function useWebSocketContext() {
  return useContext(WebSocketContext);
}

import { Socket } from "socket.io-client";
import { OrderStatus } from "./myOrder";

export interface SocketEvents {
    updateStatus: (orderNo: number, status: OrderStatus) => void;
    socket: Socket | null;
}
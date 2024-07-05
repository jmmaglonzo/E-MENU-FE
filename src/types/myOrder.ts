import { ItemTypes } from "./productCard"

export enum OrderStatus{
    Pending = "Pending",
    Ongoing = "Ongoing",
    Completed = "Completed",
    Serve = "Serve",
    Cancelled = "Cancelled"
}

interface Order {
    id: number,
    sessionId: string,
    tableNo: number,
    quantity: number,
    price: number,
    amount: number,
    product: ItemTypes,
    status: OrderStatus,
    transactionId: string,
    createdAt: Date
}

export interface MyOrder {
    transactionId: string,
    orders: Order[],
    orderDate: Date,
    total: number,
    status:  "Pending" | "Ongoing" | "Completed" | "Cancelled",
}
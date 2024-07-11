import { ItemTypes } from "./productCard"

export enum OrderStatus{
    PENDING = "PENDING",
    ONGOING = "ONGOING",
    SERVED = "SERVED",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

export interface Order {
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
    status:  OrderStatus
}
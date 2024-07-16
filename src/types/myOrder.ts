import { ItemTypes } from "./productCard"

export enum OrderStatus{
    PENDING = "PENDING",
    ONGOING = "ONGOING",
    SERVED = "SERVED",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

enum PaymentMethod {
    CASH = "CASH",
    ONLINE = "ONLINE"
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
    orderNo: number,
    createdAt: Date
}

export interface MyOrder {
    transactionId: string,
    orderNo: number,
    orders: Order[],
    createdAt: Date,
    total: number,
    status:  OrderStatus
}

export interface MyLatestOrder extends MyOrder{
    paymentMethod: PaymentMethod,
    checkoutURL?: string
}
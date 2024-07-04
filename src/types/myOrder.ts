import { ItemTypes } from "./productCard"

interface Order {
    id: number,
    sessionId: string,
    tableNo: number,
    quantity: number,
    price: number,
    amount: number,
    product: ItemTypes,
    status:  "Pending" | "Ongoing" | "Completed" | "Cancelled",
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
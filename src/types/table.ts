import { MyOrder } from "./myOrder";

export interface OrderTableType extends MyOrder{
  orderNo: number;
  tableNo: number;
}

export interface TableTypes {
  tableNo: number;
  guests: number;
  date: string;
  session: string;
  status: boolean;
}

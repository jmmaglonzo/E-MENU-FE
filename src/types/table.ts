export interface OrderTableTypes {
  tableNo: number;
  guests: number;
  date: string;
  orderNo: string;
  status: string;
  orderList: string[];
}

export interface TableTypes {
  tableNo: number;
  guests: number;
  createdAt: string;
  session: string;
  status: boolean;
}

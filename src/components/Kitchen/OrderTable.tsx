import { OrderTableTypes } from "@/types/table";
import KitchenOrderCard from "./Cards/KitchenOrderCard";

const OrderTable = () => {
  const orders: OrderTableTypes[] = [
    {
      tableNo: 1,
      guests: 4,
      date: "July 01, 10:30 AM",
      orderNo: "#1232",
      status: "Pending",
      orderList: ["2x Burgers", "1x Salad", "1x Fries"],
    },
    {
      tableNo: 2,
      guests: 3,
      date: "July 01, 10:30 AM",
      orderNo: "#1232",
      status: "Pending",
      orderList: ["2x Burgers", "1x Salad", "1x Fries"],
    },
    {
      tableNo: 3,
      guests: 2,
      date: "July 01, 10:30 AM",
      orderNo: "#1232",
      status: "Pending",
      orderList: ["2x Burgers", "1x Salad", "1x Fries"],
    },
    {
      tableNo: 4,
      guests: 4,
      date: "July 01, 10:30 AM",
      orderNo: "#1232",
      status: "Pending",
      orderList: ["2x Burgers", "1x Salad", "1x Fries"],
    },
    {
      tableNo: 5,
      guests: 2,
      date: "July 01, 10:30 AM",
      orderNo: "#1232",
      status: "Pending",
      orderList: ["2x Burgers", "1x Salad", "1x Fries"],
    },
    {
      tableNo: 6,
      guests: 3,
      date: "July 01, 10:30 AM",
      orderNo: "#1232",
      status: "Pending",
      orderList: ["2x Burgers", "1x Salad", "1x Fries"],
    },
    {
      tableNo: 7,
      guests: 2,
      date: "July 01, 10:30 AM",
      orderNo: "#1232",
      status: "Pending",
      orderList: ["2x Burgers", "1x Salad", "1x Fries"],
    },
    {
      tableNo: 8,
      guests: 4,
      date: "July 01, 10:30 AM",
      orderNo: "#1232",
      status: "Pending",
      orderList: ["2x Burgers", "1x Salad", "1x Fries"],
    },
  ];

  return (
    <main className="grid grid-cols-4 gap-4">
      {orders.map((order) => (
        <KitchenOrderCard key={order.tableNo} data={order} />
      ))}
    </main>
  );
};

export default OrderTable;

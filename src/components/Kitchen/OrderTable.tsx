"use client";

import { OrderTableType } from "@/types/table";
import KitchenOrderCard from "./Cards/KitchenOrderCard";
import { useGetOrders } from "@/services/queries";
import OrderModal from "./OrderModal";

const OrderTable = () => {
  const { data } = useGetOrders();
  const orders = data as OrderTableType[] || [];

  return (
    <main>
      <div className="grid grid-cols-4 gap-4">
        {orders.map((order) => (
          <KitchenOrderCard key={order.orderNo} data={order} />
        ))}
      </div>
      <OrderModal/>
    </main>
  );
};

export default OrderTable;

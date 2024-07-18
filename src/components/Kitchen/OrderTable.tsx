"use client";

import { OrderTableType } from "@/types/table";
import KitchenOrderCard from "./Cards/KitchenOrderCard";
import OrderModal from "./OrderModal";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { capitalize } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import KitchenLoader from "../common/KitchenLoader";
import { useOrdersStore } from "@/store/orderStore";
import { useWebSocketContext } from "@/providers/WebSocketProvider";

const OrderTable = () => {
  const socketEvents = useWebSocketContext();
  const orders = useOrdersStore((state) => state.orders);

  useEffect(() => {
    socketEvents?.getOrders();
  }, [socketEvents]);

  const filters = [
    "PENDING",
    "ONGOING",
    "SERVED",
    "COMPLETED",
    "CANCELLED",
  ] as const;
  type Filters = typeof filters;
  type Filter = Filters[number];
  const [selectedFilter, setSelectedFilter] = useState<Filter | null>(
    "PENDING",
  );

  if (!orders) {
    return (
      <div className="container mt-64 flex justify-center">
        <KitchenLoader />
      </div>
    );
  }

  const ordersByStatus: Record<string, OrderTableType[]> = {};

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    if (ordersByStatus[order.status]) ordersByStatus[order.status].push(order);
    else ordersByStatus[order.status] = [order];
  }

  const filteredOrder =
    (selectedFilter ? ordersByStatus[selectedFilter] : orders) || [];

  return (
    <main className="flex h-dvh flex-col justify-between gap-8">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        {filters.map((filter) => {
          let titleName: string = filter;

          if (filter === "ONGOING") titleName = "In-progress";
          const chosenFilterClass = "bg-primary text-white";
          const isChosen = filter === selectedFilter;

          function handleClick() {
            if (isChosen) return setSelectedFilter(null);
            setSelectedFilter(filter);
          }

          return (
            <Card
              key={filter}
              className={`flex-1 cursor-pointer rounded-sm duration-300 ease-in-out ${isChosen && chosenFilterClass}`}
              onClick={handleClick}
            >
              <CardHeader>
                <CardTitle className="whitespace-nowrap text-base font-medium lg:text-xl xl:text-2xl">
                  {capitalize(titleName)} Orders
                </CardTitle>
              </CardHeader>
              <CardContent className="text-5xl font-semibold">
                <div className="py-2 xl:text-5xl">
                  {ordersByStatus[filter] ? ordersByStatus[filter].length : 0}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="h-[0.08rem] bg-gray-200" />

      <ScrollArea className="size-full">
        <div className="mb-40">
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
            {filteredOrder.length > 0 ? (
              filteredOrder.map((order) => (
                <KitchenOrderCard key={order.orderNo} data={order} />
              ))
            ) : (
              <div>There are no orders.</div>
            )}
          </div>
        </div>
      </ScrollArea>
      <OrderModal />
    </main>
  );
};

export default OrderTable;

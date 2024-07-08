"use client";

import { OrderTableType } from "@/types/table";
import KitchenOrderCard from "./Cards/KitchenOrderCard";
import { useGetOrders } from "@/services/queries";
import OrderModal from "./OrderModal";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { capitalize } from "@/lib/utils";
import { OrderStatus } from "@/types/myOrder";



const OrderTable = () => {
  const { data, isSuccess } = useGetOrders();
  const orders = data as OrderTableType[] || [];


  
  const filters = ["PENDING","ONGOING","SERVED"] as const;
  type Filters = typeof filters;
  type Filter = Filters[number];
  const [selectedFilter, setSelectedFilter] = useState<Filter | null>(filters[0]);
  
  if (!isSuccess) return <></>

  const ordersByStatus: Record<string, OrderTableType[]> = {}; 

  for (let i = 0;i < orders.length;i++) {
    const order = orders[i];
    if (ordersByStatus[order.status]) 
      ordersByStatus[order.status].push(order);
    else ordersByStatus[order.status] = [order];
  }

  const filteredOrders = orders.filter(order => selectedFilter === null || order.status === selectedFilter);
  return (
    <main className="flex flex-col justify-between gap-8">
      <div className="flex gap-3">
        {
          filters.map(filter => {
            let titleName: string = filter;

            if (filter === "ONGOING") titleName = "In-progress";
            const chosenFilterClass = "bg-primary text-white";
            const isChosen = filter === selectedFilter;

            function handleClick() {
              if (isChosen) return setSelectedFilter(null);
              setSelectedFilter(filter);
            }

            return <Card key={filter} className={`flex-1 cursor-pointer rounded-sm ${isChosen ? chosenFilterClass: ""}`} onClick={handleClick}>
              <CardHeader>
                <CardTitle className="font-medium">
                  {capitalize(titleName)} Orders
                </CardTitle>
              </CardHeader>
              <CardContent className="text-5xl font-semibold">
                <div className="py-2">
                  {5}
                </div>
              </CardContent>
            </Card>
          })
        }
      </div >
      <div className="h-[0.08rem] bg-gray-200">
      </div>
      <div className="grid grid-cols-4 gap-4">
        {filteredOrders.map((order,index) => (
          <KitchenOrderCard key={order.orderNo} data={order} />
        ))}
      </div>
      <OrderModal/>
    </main>
  );
};

export default OrderTable;

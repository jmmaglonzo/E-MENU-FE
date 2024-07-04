"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronLeft, FilterIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { useGetMyOrders } from "@/services/queries";
import { MyOrder } from "@/types/myOrder";

const OrderHistory = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const { data } = useGetMyOrders();
  
  const orders = data as MyOrder[] || [];
  
  const filteredOrders =
    selectedStatus === "all"
      ? orders
      : orders.filter((order) => order.status === selectedStatus);

  return (
    <div className="container rounded-lg bg-background p-6 shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-2xl font-bold">
          <Link href="/">
            <ChevronLeft size={24} />
          </Link>
          Order History
        </h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center gap-2 bg-primary font-semibold text-white">
              <FilterIcon className="h-4 w-4" />
              <span>
                {selectedStatus === "all"
                  ? "All Orders"
                  : selectedStatus.charAt(0).toUpperCase() +
                    selectedStatus.slice(1)}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onSelect={() => setSelectedStatus("all")}>
              All Orders
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSelectedStatus("Completed")}>
              Completed
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSelectedStatus("Pending")}>
              Pending
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSelectedStatus("Ongoing")}>
              Ongoing
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSelectedStatus("Cancelled")}>
              Cancelled
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex h-dvh flex-col gap-4 overflow-y-scroll no-scrollbar">
        {
        orders.length === 0 ?
          <div className="font-bold container h-full flex items-center text-center">Not sure what to pick? Our dishes are waiting to impress!</div>
          :
          filteredOrders.map((order) => (
            <Card key={order.transactionId}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Order placed on {order.orderDate.toString()}
                  </div>
                  <Badge
                    variant={
                      order.status === "Completed"
                        ? "secondary"
                        : order.status === "Ongoing"
                          ? "outline"
                          : "destructive"
                    }
                  >
                    {order.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <h3 className="text-lg font-medium">Items Ordered</h3>
                    <ul className="grid gap-2">
                      {order.orders.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <div>
                            {item.quantity} x {item.product.name}
                          </div>
                          <div className="text-right">
                            ${item.price.toFixed(2)}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-medium">Total</div>
                    <div className="text-lg font-medium">
                      ${order.total.toFixed(2)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </div>
  );
};

export default OrderHistory;

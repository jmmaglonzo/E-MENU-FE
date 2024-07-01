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

const OrderHistory = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const orders = [
    {
      id: 1,
      date: "2023-06-01",
      items: [
        { name: "Cheeseburger", quantity: 1, price: 9.99 },
        { name: "Fries", quantity: 1, price: 3.99 },
        { name: "Soda", quantity: 1, price: 2.49 },
      ],
      total: 16.47,
      status: "delivered",
    },
    {
      id: 2,
      date: "2023-05-15",
      items: [
        { name: "Veggie Wrap", quantity: 1, price: 7.99 },
        { name: "Salad", quantity: 1, price: 5.99 },
      ],
      total: 13.98,
      status: "in progress",
    },
    {
      id: 3,
      date: "2023-04-20",
      items: [
        { name: "Pepperoni Pizza", quantity: 1, price: 14.99 },
        { name: "Breadsticks", quantity: 1, price: 4.99 },
      ],
      total: 19.98,
      status: "cancelled",
    },
    {
      id: 4,
      date: "2023-03-01",
      items: [
        { name: "Chicken Sandwich", quantity: 1, price: 8.99 },
        { name: "Onion Rings", quantity: 1, price: 3.99 },
        { name: "Iced Tea", quantity: 1, price: 2.29 },
      ],
      total: 15.27,
      status: "delivered",
    },
    {
      id: 5,
      date: "2023-02-10",
      items: [
        { name: "Burrito", quantity: 1, price: 7.99 },
        { name: "Chips & Salsa", quantity: 1, price: 3.99 },
      ],
      total: 11.98,
      status: "in progress",
    },
  ];

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
            <DropdownMenuItem onSelect={() => setSelectedStatus("delivered")}>
              Delivered
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSelectedStatus("in progress")}>
              In Progress
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSelectedStatus("cancelled")}>
              Cancelled
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex h-dvh flex-col gap-4 overflow-y-scroll no-scrollbar">
        {filteredOrders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Order placed on {order.date}
                </div>
                <Badge
                  variant={
                    order.status === "delivered"
                      ? "secondary"
                      : order.status === "in progress"
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
                    {order.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div>
                          {item.quantity} x {item.name}
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
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;

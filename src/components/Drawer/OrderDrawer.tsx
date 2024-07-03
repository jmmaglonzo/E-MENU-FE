"use client";

import { ChevronLeft } from "lucide-react";
import ViewOrder from "../Order/ViewOrder";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";

import { useGetProducts, useGetCartItems } from "@/services/queries";
import { ItemTypes } from "@/types/productCard";

import getOrderTotalAmount from "@/utils/orderTotal";

export const OrderDrawer = () => {

  const getCartItems = useGetCartItems();
  const {data} = useGetProducts();
  const productAmount = getOrderTotalAmount();

  const items = getCartItems.data || [];

  if (items.length === 0) return <></>;

  return (
    <div className="container fixed bottom-0 bg-white p-4">
      <Drawer>
        <DrawerTrigger className="inline-flex w-[90%] items-center justify-center rounded-md bg-primary text-white">
          <div className="flex w-full items-center justify-between p-2.5 px-8">
            <div className="flex size-6 w-fit items-center justify-center rounded-full border border-primary-foreground p-2">
              {items.length}
            </div>
            <span>View Orders</span>
            <span>&#8369;{productAmount}</span>
          </div>
        </DrawerTrigger>
        <DrawerContent className="container h-dvh">
          <ViewOrder
            items={items}
            data={data as ItemTypes[]}
            productAmount={productAmount}
          />
          <DrawerClose className="absolute left-8 top-[32px]">
            <ChevronLeft size={24} />
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

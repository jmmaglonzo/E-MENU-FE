"use client";
import { ChevronLeft } from "lucide-react";
import ViewOrder from "../Order/ViewOrder";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { useGetProducts, useGetCartItems } from "@/services/queries";
import { ItemTypes } from "@/types/productCard";
import getOrderTotalAmount from "@/utils/orderTotal";

export const OrderDrawer = () => {
  const getCartItems = useGetCartItems();
  const { data } = useGetProducts();
  const productAmount = getOrderTotalAmount();

  const items = getCartItems.data || [];

  if (items.length === 0) return <></>;

  return (
    <div
      className={`mobile-container fixed bottom-0 bg-white p-4 duration-300 ${items.length === 0 ? "invisible opacity-0" : "visible opacity-100"}`}
    >
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
        <DrawerContent className="mobile-container h-dvh">
          <DrawerHeader className="my-4 flex flex-col items-center justify-center gap-6 p-0">
            <DrawerTitle>Order Summary</DrawerTitle>
            <div className="flex h-1.5 w-full gap-4">
              <div className="w-1/2 rounded-lg bg-primary"></div>
              <div className={`w-1/2 rounded-lg bg-slate-300`}></div>
            </div>
          </DrawerHeader>
          <ViewOrder
            items={items}
            data={data as ItemTypes[]}
            productAmount={productAmount}
          />
          <DrawerClose className="absolute left-4 top-[36px]">
            <ChevronLeft size={24} />
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

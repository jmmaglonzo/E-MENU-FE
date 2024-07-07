"use client";

import OrderCards from "@/components/Order/OrderCards";
import TipSummary from "@/components/Order/TipSummary";
import { OrderData } from "@/utils/orderData";
import { ItemTypes } from "@/types/productCard";
import { CartItem } from "@/types/cart";
import { DrawerClose } from "../ui/drawer";

interface ViewOrderProp {
  productAmount: number;
  items: CartItem[];
  data: ItemTypes[];
}

const ViewOrder = ({ productAmount, items, data }: ViewOrderProp) => {
  return (
    <>
      <div className="flex h-[400px] flex-col gap-2 overflow-y-scroll no-scrollbar">
        {items.map(({ id, quantity }) => {
          const item = data?.find((item) => item.id == id);

          if (!item) return <></>;

          const orderItem = {
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            image: item.image,
          } as OrderData;

          return (
            <OrderCards key={item.id} data={orderItem} quantity={quantity} />
          );
        })}
      </div>
      <div className="my-1.5 w-full text-center">
        <DrawerClose className="inline-block w-full rounded-sm bg-[#fff3e6] px-6 py-1.5 text-base font-medium text-[#ff8500]">
          Add more items
        </DrawerClose>
      </div>
      <TipSummary items={items} productAmount={productAmount} />
    </>
  );
};

export default ViewOrder;

"use client";

import OrderCards from "@/components/Order/OrderCards";
import TipCard from "@/components/Order/TipCard";
import TipSelector from "@/components/Order/TipSelector";
import TipSummary from "@/components/Order/TipSummary";
import { OrderData } from "@/utils/orderData";
import Link from "next/link";
import OrderNav from "./OrderNav";
import { ItemTypes } from "@/types/productCard";
import { CartItem } from "@/types/cart";

interface ViewOrderProp {
  productAmount: number;
  items: CartItem[];
  data: ItemTypes[];
}

const ViewOrder = ({productAmount, items, data}: ViewOrderProp) => {

  return (
    <section className="container p-0">
      <OrderNav />
      <div className="flex h-[290px] flex-col gap-2 overflow-y-scroll no-scrollbar">
        {
          items.map(({id,quantity}) => {
            const item = data?.find(item => item.id == id);
            
            if (!item) return <></>;

            const orderItem = {
               id: item.id,
               name: item.name,
               description: item.description,
               price: item.price,
               image: item.image
            } as OrderData;

            return <OrderCards key={item.id} data={orderItem} quantity={quantity} />           
          })
        }
      </div>
      <div className="text-center">
        <Link href="/" className="text-base font-semibold text-primary">
          Add more items
        </Link>
      </div>
      <TipCard />
      <TipSelector />
      <TipSummary productAmount={productAmount} />
    </section>
  );
};

export default ViewOrder;

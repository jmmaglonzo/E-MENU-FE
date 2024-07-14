"use client";

import Image from "next/image";
import { OrderData } from "@/utils/orderData";
import { useAddCart, useSubCart } from "@/services/queries";
import { DrawerDescription } from "../ui/drawer";

interface OrderProps {
  data: OrderData;
  quantity: number;
}

const OrderCards = ({ data, quantity }: OrderProps) => {
  const { mutate: addCart, isPending: addPending } = useAddCart();
  const { mutate: subCart, isPending: subPending } = useSubCart();

  return (
    <section className="flex justify-between gap-1 rounded-sm p-2">
      <div className="relative aspect-square h-[72px] w-[72px] shrink-0 overflow-hidden rounded-md">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover"
          sizes="(min-width: 500px) 78px, calc(18.89vw - 13px)"
        />
      </div>
      <div className="ml-1 flex flex-col">
        <DrawerDescription className="text-sm font-semibold text-black md:text-base">
          {data.name}
        </DrawerDescription>
        <DrawerDescription className="text-base leading-4 text-gray-600">
          {data.description}
        </DrawerDescription>

        <div className="flex w-[70px] items-center gap-2">
          <button
            className="text-xl text-primary"
            onClick={() => subCart(data.id)}
            disabled={subPending}
          >
            -
          </button>
          <input
            type="text"
            className="w-full text-center text-sm font-bold outline-none"
            value={quantity}
            readOnly
          />
          <button
            className="text-xl text-primary"
            onClick={() => addCart(data.id)}
            disabled={addPending}
          >
            +
          </button>
        </div>
      </div>
      <span className="text-sm font-semibold md:text-base">
        &#8369;
        {data.price * quantity}
      </span>
    </section>
  );
};

export default OrderCards;

"use client";
import { useState } from "react";
import Image from "next/image";
import { OrderData } from "@/utils/orderData";

interface OrderProps {
  data: OrderData;
}

const OrderCards = ({ data }: OrderProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const decrement = () => setQuantity((prevQuantity) => prevQuantity - 1);

  return (
    <div className="flex justify-between gap-2 rounded-sm p-2">
      <div className="relative aspect-square h-[72px] w-[110px] overflow-hidden rounded-md">
        <Image
          src={data.image}
          alt="DummyImage"
          fill
          placeholder="blur"
          className="object-cover"
          sizes="(min-width: 500px) 78px, calc(18.89vw - 13px)"
        />
      </div>
      <div className="ml-2 flex flex-col">
        <span className="text-sm font-semibold md:text-base">{data.name}</span>
        <p className="text-xs md:text-sm">{data.description}</p>

        <div className="flex w-[70px] items-center gap-2">
          <button className="text-xl text-primary" onClick={decrement}>
            -
          </button>
          <input
            type="text"
            className="w-full text-center text-sm font-bold outline-none"
            value={quantity}
            readOnly
          />
          <button className="text-xl text-primary" onClick={increment}>
            +
          </button>
        </div>
      </div>
      <span className="text-sm font-semibold md:text-base">
        &#8369;
        {data.price * quantity}
      </span>
    </div>
  );
};

export default OrderCards;

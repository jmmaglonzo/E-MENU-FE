import React from "react";
import { dummyData, dummyDataProps } from "@/utils/dummyData";
import Image from "next/image";
import { MyOrder, Order } from "@/types/myOrder";

interface OrderSummaryItemsProp {
  data: MyOrder;
}

const OrderSummaryItems = ({ data }: OrderSummaryItemsProp) => {
  return (
    <div>
      <div className="hide-scrollbar mt-8 flex h-[300px] flex-1 flex-col gap-4 overflow-y-auto bg-gray-100 px-4 py-4 md:h-[230px] lg:mb-16">
        {data.orders.map((item: Order, index) => (
          <div
            key={index}
            className="flex justify-center gap-5 rounded-lg border border-gray-200 bg-white px-3 py-2"
          >
            <div className="relative aspect-square h-[75px] w-[75px] shrink-0">
              <Image
                src={item.product.image}
                alt={item.product.name}
                fill
                sizes="(min-width: 350px) 78px, calc(18.89vw - 13px)"
                className="object-cover"
              />
            </div>
            <div className="flex w-full flex-col">
              <h3 className="text-sm font-semibold">{item.product.name}</h3>
              <p className="mb-2 text-[0.6em] text-gray-600">
                {item.product.description}
              </p>
              <p className="mb-2 text-[0.6em] font-bold text-gray-600">
                <span className="text-primary">Quantity: </span>
                {item.quantity}
              </p>
            </div>
            <p className="text-[0.7em] font-semibold text-gray-800">
              &#8369;{item.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex flex-col px-3 text-base font-bold text-gray-600">
        <div className="my-4 text-center">
          <div className="text-lg">Total Amount To Pay</div>
          <div className="text-4xl font-bold text-black">
            &#8369;{data.total.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryItems;

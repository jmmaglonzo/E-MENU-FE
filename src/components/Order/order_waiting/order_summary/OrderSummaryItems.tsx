import React from "react";
import { dummyData, dummyDataProps } from "@/utils/dummyData";
import Image from "next/image";
import { MyOrder, Order } from "@/types/myOrder";
import TotalAmount from "@/utils/orderTotal";
interface OrderSummaryItemsProp {
  data: MyOrder;
}

const OrderSummaryItems = ({ data }: OrderSummaryItemsProp) => {
  const totalAmount =
    data &&
    data.orders.reduce((total, order) => {
      return total + order.amount;
    }, 0);
  return (
    <div>
      <div className="hide-scrollbar -mb-2 mt-8 flex h-[270px] flex-1 flex-col gap-4 overflow-y-auto rounded-md bg-gray-100 px-4 py-4">
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
      <div className="px-3text-base mt-2 flex flex-col font-bold text-gray-600">
        <div className="my-4 text-center">
          <div className="text-lg">Total Amount To Pay</div>
          <div className="text-4xl font-bold text-black">
            &#8369;{totalAmount}.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryItems;
function getOrderTotalAmount() {
  throw new Error("Function not implemented.");
}

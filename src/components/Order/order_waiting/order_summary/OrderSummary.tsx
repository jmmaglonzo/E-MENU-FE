"use client";

import Image from "next/image";
import React from "react";
import cloche from "@/../public/let-them-cook.gif";
import OrderSummaryItems from "./OrderSummaryItems";
import { Button } from "@/components/ui/button";
import { useGetMyLatestOrder, useRequestAssistance } from "@/services/queries";
import Loader from "@/components/common/Loader";
import { MyLatestOrder } from "@/types/myOrder";
import useMyOrderStore from "@/store/myOrder-store";

const OrderSummary = () => {
  const { data, isPending, isSuccess } = useGetMyLatestOrder();

  const { mutate: requestAssitance } = useRequestAssistance();

  const status = useMyOrderStore((state) => state.orderStatus);

  function handleRequestAssitance() {
    requestAssitance();
  }

  const myLatestOrder = (isSuccess ? data : []) as MyLatestOrder;

  let textStatus = "pending";
  textStatus =
    status === "ONGOING"
      ? "being prepared"
      : status === "SERVED"
        ? "ready to be served"
        : textStatus;

  return (
    <div className="mobile-container flex h-full flex-col justify-between">
      <div className="m-5 text-center text-[0.9em] font-bold">
        <h1>Order Summary</h1>
      </div>

      <header className="relative mt-2 flex flex-col items-center">
        <div className="relative aspect-square size-32 -mt-10">
          <Image
            src={cloche}
            alt="cloche-icon"
            priority
            sizes="30px"
            fill
            className="object-fill"
          />
        </div>

        <h2 className="font-bold">Your order is {textStatus}</h2>
        <span className="text-sm text-gray-500">
          Please wait while we process your order.
        </span>
      </header>

      <main className="flex-1">
        {isPending ? (
          <div className="mt-36 flex justify-center">
            <Loader />
          </div>
        ) : (
          <div className="">
            <OrderSummaryItems data={myLatestOrder} />
          </div>
        )}
      </main>
      {!isPending && (
        <div className="mb-4 flex gap-x-2">
          <Button className="w-full" onClick={handleRequestAssitance}>
            Need Assistance
          </Button>

          <Button
            className="w-full bg-green-600 text-white"
            variant="outline"
            onClick={handleRequestAssitance}
          >
            Pay Now
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;

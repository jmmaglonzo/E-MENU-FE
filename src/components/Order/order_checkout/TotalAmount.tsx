"use client";

import getOrderTotalAmount from "@/utils/orderTotal";
import React, { MouseEventHandler } from "react";

import { Button } from "@/components/ui/button";

interface TotalAmountProps {
  handleOrder: Function;
}

const TotalAmount = ({ handleOrder }: TotalAmountProps) => {
  const productAmount = getOrderTotalAmount();

  return (
    <div className="p-2">
      <div className="h-0.5 w-full bg-slate-100"></div>
      <div className="mt-5 flex flex-col items-center gap-y-2">
        <span className="text-[0.7em] font-bold">Total Amount to Pay</span>
        <span className="text-[1.8em] font-bold">
          ₱{productAmount.toFixed(2)}
        </span>
        <Button
          type="submit"
          onClick={handleOrder as MouseEventHandler}
          className="mt-2 w-full rounded-sm bg-primary py-2 text-center text-[0.8em] font-semibold text-white"
        >
          Place Order
        </Button>
        <div className="mt-4 h-0.5 w-full bg-slate-100"></div>
      </div>
    </div>
  );
};

export default TotalAmount;

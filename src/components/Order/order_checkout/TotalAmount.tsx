"use client";

import getOrderTotalAmount from "@/utils/orderTotal";
import Link from "next/link";
import React from "react";


const TotalAmount = () => {
  const productAmount = getOrderTotalAmount();
  
  return (
    <div className="p-2">
      <div className="h-0.5 w-full bg-slate-100"></div>
      <div className="mt-5 flex flex-col items-center gap-y-2">
        <span className="text-[0.7em] font-bold">Total Amount to Pay</span>
        <span className="text-[1.8em] font-bold">₱{productAmount.toFixed(2)}</span>
        <Link href="#" className="text-base">
          Vat Included <span className="text-primary">Learn more?</span>
        </Link>
        <Link
          href="#"
          className="mt-2 w-full rounded-sm bg-primary py-2 text-center text-[0.8em] font-semibold text-white"
        >
          Place Order
        </Link>
        <div className="mt-4 h-0.5 w-full bg-slate-100"></div>
      </div>
    </div>
  );
};

export default TotalAmount;

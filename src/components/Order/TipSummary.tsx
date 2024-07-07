"use client";

import { usePathname } from "next/navigation";
import { CartItem } from "@/types/cart";
import Link from "next/link";

interface TipSummaryProp {
  productAmount: number;
  items: CartItem[];
}

const TipSummary = ({ productAmount }: TipSummaryProp) => {
  const pathname = usePathname();
  return (
    <div className="mt-auto flex flex-col text-base text-gray-600">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>&#8369;{productAmount}</span>
      </div>
      <div className="my-2 h-[2px] w-full bg-gray-400"></div>
      <div className="flex flex-col justify-center text-center font-medium text-black">
        <span className="text-lg">Total amount</span>
        <span className="text-4xl font-bold">&#8369;{productAmount}</span>
      </div>

      <Link
        href="/checkout"
        className={`mt-2 rounded-sm bg-primary py-2 text-center font-semibold text-white ${
          pathname === "/checkout" ? "active" : ""
        }`}
      >
        Proceed to checkout
      </Link>
    </div>
  );
};

export default TipSummary;

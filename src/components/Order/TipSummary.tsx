"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TipSummaryProp {
  productAmount: number;
  selectedTip: number;
}

const TipSummary = ({selectedTip,productAmount}: TipSummaryProp) => {
  const pathname = usePathname();
  return (
    <div className="mt-2 flex flex-col text-base text-gray-600">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>&#8369;${productAmount}</span>
      </div>
      <div className="flex justify-between">
        <span>Tip</span>
        {
          selectedTip? 
            <span>&#8369;{selectedTip}</span>
            :
            <></>
        }
      </div>
      <div className="my-2 h-[2px] w-full bg-gray-400"></div>
      <div className="flex flex-col justify-center text-center font-medium text-black">
        <span className="text-lg">Total amount</span>
        <span className="text-4xl font-bold">&#8369;</span>
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

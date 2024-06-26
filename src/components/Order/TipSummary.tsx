"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const TipSummary = () => {
  const pathname = usePathname();
  return (
    
    <div className="mt-4 flex flex-col text-base text-gray-600">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>&#8369;800.00</span>
      </div>
      <div className="flex justify-between">
        <span>Tip</span>
        <span>&#8369;20.00</span>
      </div>
      <div className="my-2 h-[2px] w-full bg-gray-400"></div>
      <div className="flex justify-between font-bold text-black">
        <span>Total</span>
        <span>&#8369;820.00</span>
      </div>

      <Link
      href="/order_route/view-order-checkout"
      className={`mt-2 rounded-sm bg-primary py-2 text-center font-semibold text-white ${
        pathname === '/order_route/view-order-checkout' ? 'active' : ''
      }`}
    >
        Proceed to checkout
      </Link>
    </div>
  );
};

export default TipSummary;

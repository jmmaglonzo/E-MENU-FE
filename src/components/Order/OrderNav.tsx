"use client";
import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const OrderNav = () => {
  const pathname = usePathname();
  return (
    <nav className="container flex flex-col items-center gap-4 py-2 text-center">
      <div className="flex w-full items-center">
        {pathname === "/checkout" && (
          <Link href="/">
            <ChevronLeft size={20} />
          </Link>
        )}
        <span className="flex-grow font-bold">
          {pathname === "/checkout" ? "Order Checkout" : "Order Details"}
        </span>
      </div>
      <div className="flex h-1.5 w-full gap-4">
        <div className="w-1/2 rounded-lg bg-primary"></div>
        <div
          className={`w-1/2 rounded-lg ${
            pathname === "/checkout" ? "bg-primary" : "bg-gray-400"
          }`}
        ></div>
      </div>
    </nav>
  );
};

export default OrderNav;

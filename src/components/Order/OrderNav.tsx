import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const OrderNav = () => {
  return (
    <nav className="container flex flex-col items-center gap-6 py-4 text-center">
      <div className="flex w-full items-center">
        <Link href="/">
          <ChevronLeft />
        </Link>
        <span className="flex-grow font-bold">Order Details</span>
      </div>

      <div className="flex h-1.5 w-full gap-4">
        <div className="w-1/2 rounded-lg bg-primary"></div>
        <div className="w-1/2 rounded-lg bg-gray-400"></div>
      </div>
    </nav>
  );
};

export default OrderNav;

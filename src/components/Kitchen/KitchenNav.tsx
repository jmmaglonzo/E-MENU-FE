"use client";

import Image from "next/image";
import digibite from "/public/DigiBiteLogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
const KitchenNav = () => {
  const pathname = usePathname();
  return (
    <nav className="kitchen-container mx-auto flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/" className="relative h-[50px] w-[200px]">
          <Image
            src={digibite}
            alt="Menu Logo"
            fill
            className="object-contain"
          />
        </Link>
        <h1 className="text-3xl font-bold">Kitchen Dashboard</h1>
      </div>

      <ul className="flex flex-1 items-center justify-center gap-6 font-medium">
        <li>
          <Link
            href={"/kitchen"}
            className={`${pathname === "/kitchen" && "rounded-sm bg-primary px-4 py-2 font-semibold text-white"}`}
          >
            Table Queue
          </Link>
        </li>
        <li>
          <Link
            href={"/kitchen/order"}
            className={`${pathname === "/kitchen/order" && "rounded-sm bg-primary px-4 py-2 font-semibold text-white"}`}
          >
            Orders
          </Link>
        </li>
        <li>
          <Link
            href={"/kitchen/assistance"}
            className={`${pathname === "/kitchen/assistance" && "rounded-sm bg-primary px-4 py-2 font-semibold text-white"}`}
          >
            Assistance
          </Link>
        </li>
        <li>
          <Link
            href={"/kitchen/inventory"}
            className={`${pathname === "/kitchen/inventory" && "rounded-sm bg-primary px-4 py-2 font-semibold text-white"}`}
          >
            Inventory
          </Link>
        </li>
        <li>
          <Link
            href={"/kitchen/admin"}
            className={`${pathname === "/kitchen/admin" && "rounded-sm bg-primary px-4 py-2 font-semibold text-white"}`}
          >
            Analytics
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default KitchenNav;

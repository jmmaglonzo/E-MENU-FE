"use client";

import Image from "next/image";
import menuLogo from "/public/emenu-logo-dark.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
const KitchenNav = () => {
  const pathname = usePathname();
  return (
    <nav className="kitchen-container mx-auto flex items-center justify-between">
      <div className="relative h-[50px] w-[200px]">
        <Image src={menuLogo} alt="Menu Logo" fill className="object-contain" />
      </div>
      <h1 className="mt-2 font-bold">Kitchen Dashboard</h1>

      <ul className="mt-2 flex flex-1 items-center justify-center gap-6 font-medium">
        <li>
          <Link
            href={"/kitchen"}
            className={`${pathname === "/kitchen" && "border-b-2 border-primary"}`}
          >
            Table Queue
          </Link>
        </li>
        <li>
          <Link
            href={"/kitchen/order"}
            className={`${pathname === "/kitchen/order" && "border-b-2 border-primary"}`}
          >
            Orders
          </Link>
        </li>
        <li>
          <Link
            href={"/kitchen/assistance"}
            className={`${pathname === "/kitchen/assistance" && "border-b-2 border-primary"}`}
          >
            Assistance
          </Link>
        </li>
        <li>
          <Link
            href={"/kitchen/inventory"}
            className={`${pathname === "/kitchen/inventory" && "border-b-2 border-primary"}`}
          >
            Inventory
          </Link>
        </li>
        <li>
          <Link
            href={"/kitchen/admin"}
            className={`${pathname === "/kitchen/admin" && "border-b-2 border-primary"}`}
          >
            Analytics
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default KitchenNav;

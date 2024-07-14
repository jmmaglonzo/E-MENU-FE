"use client";

import Image from "next/image";
import digibite from "/public/DigiBiteLogo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { logoutUser } from "@/services/api";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "../ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MenuIcon } from "lucide-react";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";

const KitchenNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    const request = await logoutUser();

    if (request.status === 200) router.refresh();
  }

  const navLinks = [
    {
      name: "Table Queue",
      value: "/kitchen",
    },
    {
      name: "Orders",
      value: "/kitchen/order",
    },
    {
      name: "Assistance",
      value: "/kitchen/assistance",
    },
    {
      name: "Products",
      value: "/kitchen/products",
    },
    {
      name: "Analytics",
      value: "/kitchen/admin",
    },
  ];

  return (
    <nav className="container mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="relative h-[50px] w-[100px] lg:h-[50px] lg:w-[200px]"
        >
          <Image
            src={digibite}
            alt="Menu Logo"
            fill
            className="object-contain"
          />
        </Link>
        <h1 className="hidden text-base font-bold md:block lg:text-xl xl:text-3xl">
          Kitchen Dashboard
        </h1>
      </div>

      {/* Desktop and Tablet */}
      <ul className="hidden flex-1 items-center justify-center gap-6 font-medium md:flex">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.value}
              className={`${pathname === link.value && "rounded-sm bg-primary px-4 py-2 font-semibold text-white"} text-sm xl:text-base`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side={"top"} className="mobile-container">
            <SheetHeader className="pl-4 text-start">
              <SheetTitle>DIGIBITE</SheetTitle>
              <SheetDescription>Kitchen DashBoard</SheetDescription>
            </SheetHeader>

            <ul className="mt-4 flex flex-col items-start justify-evenly gap-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.value}>
                  <Link
                    href={link.value}
                    className={`${pathname === link.value ? "rounded-sm bg-primary px-4 py-1 font-semibold text-white" : "pl-4 text-base font-medium"} `}
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              ))}

              <div className="ml-3 block md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger className="rounded-sm bg-black px-4 py-0.5 text-base text-white">
                    Menu
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center gap-2">
                      <FaUserPlus size={20} />
                      Add Staff
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex items-center gap-2"
                      onClick={handleLogout}
                    >
                      <IoLogOutOutline size={20} />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:block">
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-sm bg-black px-4 py-0.5 text-base text-white">
            Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-2">
              <FaUserPlus size={20} />
              Add Staff
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={handleLogout}
            >
              <IoLogOutOutline size={20} />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default KitchenNav;

"use client";

import Image from "next/image";
import digibite from "/public/DigiBiteLogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { useLogout } from "@/services/queries";
import AddStaff from "./AddStaff/AddStaff";
import Logo from "/public/DigiBiteLogo.png";
const KitchenNav = () => {
  const pathname = usePathname();
  const { mutate: logout } = useLogout();

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
      name: "Rewards",
      value: "/kitchen/rewards",
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
              className={`${pathname === link.value && "rounded-sm bg-primary px-4 py-2 font-semibold text-white"} text-sm duration-300 ease-in-out xl:text-base`}
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
            <SheetHeader className="text-start">
              <SheetTitle className="relative aspect-auto h-[50px] w-[100px]">
                <Image
                  src={Logo}
                  alt="DigiBite Logo"
                  fill
                  className="object-contain"
                />
              </SheetTitle>
              <SheetDescription className="text-base">
                Kitchen DashBoard
              </SheetDescription>
            </SheetHeader>

            <ul className="mt-4 flex flex-col items-start justify-evenly gap-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.value}>
                  <Link
                    href={link.value}
                    className={`${pathname === link.value ? "rounded-sm bg-primary px-4 py-1 text-base font-semibold text-white" : "font-medium"} `}
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              ))}

              {/* MOBILE MENU */}
              <div className="block md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger className="rounded-sm bg-black px-4 py-0.5 text-base text-white">
                    Menu
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      <AddStaff />
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex cursor-pointer items-center gap-2"
                      onClick={() => logout()}
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

      {/* DESKTOP MENU */}
      <div className="hidden md:block">
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-sm bg-black px-4 py-0.5 text-base text-white">
            Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <AddStaff />
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex cursor-pointer items-center gap-2"
              onClick={() => logout()}
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

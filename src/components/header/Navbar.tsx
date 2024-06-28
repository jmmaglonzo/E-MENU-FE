"use client";
import Image from "next/image";
import { QrDrawer } from "../Drawer/QrDrawer";
import SearchBox from "@/components/header/searchBox";
import MenuTab from "./MenuTab";
import MenuDrawer from "../Card/MenuDrawer";
import menuLogo from "/public/emenu-logo-dark.png";
const Navbar = () => {
  return (
    <>
      <nav className="container mt-5 flex items-center justify-between">
        <div className="cursor-pointer">
          <MenuDrawer />
        </div>
        <div className="relative h-[40px] w-[160px]">
          <Image
            src={menuLogo}
            placeholder="blur"
            alt="icon-menu"
            fill
            className="object-contain"
          />
        </div>
        <QrDrawer />
      </nav>
      <SearchBox />
      <MenuTab />
    </>
  );
};

export default Navbar;

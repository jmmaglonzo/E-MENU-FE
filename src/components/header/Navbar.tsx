"use client";
import Image from "next/image";
import SearchBox from "@/components/header/searchBox";
import MenuTab from "./MenuTab";
import MenuDrawer from "../Card/MenuDrawer";
import menuLogo from "/public/emenu-logo-dark.png";
import NavDrawer from "../Drawer/NavDrawer";

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
            priority
            alt="icon-menu"
            fill
            className="object-contain"
          />
        </div>
        <NavDrawer />
      </nav>
      <SearchBox />
      <MenuTab />
    </>
  );
};

export default Navbar;

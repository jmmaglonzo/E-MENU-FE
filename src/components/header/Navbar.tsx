"use client";
import Image from "next/image";
import SearchBox from "@/components/header/searchBox";
import MenuTab from "./MenuTab";
import MenuDrawer from "../Card/MenuDrawer";
import menuLogo from "/public/emenu-logo-dark.png";
import NavDrawer from "../Drawer/NavDrawer";
import { useRouter } from "next/navigation";
import { useConfirmRegister } from "@/services/queries";
import { useEffect } from "react";
import digibiteLogo from "/public/DigiBiteLogo.png";
const Navbar = () => {
  const route = useRouter();
  const confirmRegister = useConfirmRegister();

  useEffect(() => {
    if (confirmRegister.isSuccess) {
      const cleanURL = confirmRegister.data.cleanURL;

      if (cleanURL) route.replace("/");
    }
  }, [confirmRegister.status, route, confirmRegister.isSuccess]);

  return (
    <>
      <nav className="container mt-2 flex items-center justify-between">
        <div className="cursor-pointer">
          <MenuDrawer />
        </div>
        <div className="relative h-[40px] w-[120px]">
          <Image
            src={digibiteLogo}
            priority
            alt="icon-menu"
            fill
            sizes="160px"
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

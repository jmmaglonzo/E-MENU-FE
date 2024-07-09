"use client";
import Image from "next/image";
import SearchBox from "@/components/header/searchBox";
import MenuTab from "./MenuTab";
import MenuDrawer from "../Card/MenuDrawer";
import NavDrawer from "../Drawer/NavDrawer";
import { useRouter } from "next/navigation";
import { useConfirmRegister, useGetMyTableStatus } from "@/services/queries";
import { useEffect } from "react";
import digibiteLogo from "/public/DigiBiteLogo.png";
import { toast } from "sonner";
import { AxiosError } from "axios";

const Navbar = () => {
  const route = useRouter();
  const confirmRegister = useConfirmRegister();
  const myTableStatus = useGetMyTableStatus();

  const isTableApproved = myTableStatus.isSuccess && myTableStatus.data.status;

  useEffect(() => {
    if (confirmRegister.isSuccess) {
      const cleanURL = confirmRegister.data.cleanURL;

      if (cleanURL) route.replace("/");
    }
  }, [
    confirmRegister.status,
    route,
    confirmRegister.isSuccess,
  ]);

  return (
    <>
      <nav className="container mt-2 flex items-center justify-between">
        <div className="cursor-pointer">
          <MenuDrawer isDisabled={!isTableApproved}/>
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
          <NavDrawer isDisabled={!isTableApproved} />
      </nav>
      <SearchBox />
      <MenuTab />
    </>
  );
};

export default Navbar;

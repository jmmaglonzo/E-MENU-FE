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

  if (myTableStatus.isError) {
    const errStatus = (myTableStatus.error as AxiosError).response?.request.status;

    switch (errStatus) {
      case 400: 
        toast("Go Visit Our Restaurant!");
        break;
      case 404:
        toast("Your Session Expired");
        break;
      default:
        toast("There might be a problem in our server");
    }
  }

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
          {isTableApproved && <MenuDrawer />}
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
        {isTableApproved ? <NavDrawer />: <div></div>}  
      </nav>
      <SearchBox />
      <MenuTab />
    </>
  );
};

export default Navbar;

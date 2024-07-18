"use client";
import Image from "next/image";
import SearchBox from "@/components/header/searchBox";
import MenuTab from "./MenuTab";
import MenuDrawer from "../Card/MenuDrawer";
import NavDrawer from "../Drawer/NavDrawer";
import { useRouter } from "next/navigation";
import { useConfirmRegister, useGetMyTableStatus } from "@/services/queries";
import { useEffect, useState } from "react";
import digibiteLogo from "/public/DigiBiteLogo.png";
import { CookieValueTypes, getCookie } from "cookies-next";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const tableCookie = getCookie("_table_session");
  const loyaltyCookie = getCookie("_loyalty_session");

  const [tableCookieState, setTableCookieState] =
    useState<CookieValueTypes>(tableCookie);
  const [loyaltyCookieState, setLoyaltyCookieState] =
    useState<CookieValueTypes>(loyaltyCookie);
  const [isTableStatus, setIsTableStatus] = useState<boolean>(false);

  const route = useRouter();
  const confirmRegister = useConfirmRegister();
  const myTableStatus = useGetMyTableStatus();

  let isTableApproved = myTableStatus.isSuccess && myTableStatus.data.status;

  useEffect(() => {
    if (confirmRegister.isSuccess) {
      const cleanURL = confirmRegister.data.cleanURL;

      setTableCookieState(tableCookie);
      setLoyaltyCookieState(loyaltyCookie);
      setIsTableStatus(isTableApproved);

      if (cleanURL) route.replace("/");
    }
  }, [
    confirmRegister.status,
    route,
    confirmRegister.isSuccess,
    isTableApproved,
  ]);

  return (
    <>
      <nav
        className={cn(
          "mobile-container mt-2 flex items-center",
          tableCookieState && "justify-between",
        )}
      >
        <div className="flex cursor-pointer items-center justify-center">
          <MenuDrawer cookie={loyaltyCookieState} />
        </div>
        <div
          className={cn(
            "flex-2 flex flex-col items-center",
            !tableCookieState && "mx-auto",
          )}
        >
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
          <span
            className={cn(
              "text-[12px] text-muted-foreground",
              !tableCookieState && "hidden",
            )}
          >
            ID: {tableCookieState}
          </span>
        </div>

        <NavDrawer cookie={tableCookieState} isTableApproved={isTableStatus} />
      </nav>
      <div className="mobile-container mt-2">
        <SearchBox />
      </div>

      <MenuTab />
    </>
  );
};

export default Navbar;

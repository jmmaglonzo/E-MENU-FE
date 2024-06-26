"use client";
import React, { useState } from "react";
import Image from "next/image";
import { QrDrawer } from "../Drawer/QrDrawer";
import SearchBox from "@/components/header/searchBox";
import MenuTab from "./MenuTab";
import MenuDrawer from "../Card/MenuDrawer";

const Navbar = () => {
  return (
    <>
      <nav className="container mt-5 flex items-center justify-between">
        <div className="cursor-pointer">
          <MenuDrawer />
        </div>
        <div>
          <Image
            src="/emenu-logo-white.png"
            alt="icon-menu"
            width={60}
            height={50}
            style={{ width: "auto", height: "auto" }}
            priority
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

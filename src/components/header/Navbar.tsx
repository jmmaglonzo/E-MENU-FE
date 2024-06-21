"use client";
import React, { useState } from "react";
import MenuButton from "./MenuButton";
import Image from "next/image";
import { QrDrawer } from "../QrDrawer";
import SearchBox from "@/components/ui/searchBox";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header>
      <nav className="container mt-5 flex items-center justify-between">
        <div className="cursor-pointer">
          <MenuButton
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            width={undefined}
            height={undefined}
          />
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
    </header>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import MenuButton from "./MenuButton";
import Image from "next/image";

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

        <div className="cursor-pointer">
          <Image
            src="/profile_add.png"
            alt="add-logo"
            width={15}
            height={15}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

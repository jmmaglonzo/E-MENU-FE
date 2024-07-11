import QRCode from "react-qr-code";
import { FaUserGroup } from "react-icons/fa6";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { IoClose } from "react-icons/io5";
import { MouseEvent } from "react";
import { getCookie } from "cookies-next";

interface NavDrawerProp {
  isDisabled: boolean;
}

const NavDrawer = ({isDisabled}: NavDrawerProp) => {

  function handleClick(event: MouseEvent) {
    if (isDisabled)
      event.preventDefault();
  }

  const cookie = getCookie("_table_session");

  return (
    <Drawer>
      <DrawerTrigger onClick={handleClick} className={isDisabled? "opacity-50" :""}>
        <FaUserGroup size={20} />
      </DrawerTrigger>
      <DrawerContent className="mx-auto flex max-w-[350px] items-center">
        <DrawerClose className="absolute right-4 top-2">
          <IoClose size={20} />
        </DrawerClose>
        <DrawerHeader>
          <DrawerTitle className="p-0 text-xl text-primary">
            Join me
          </DrawerTitle>
          <DrawerDescription className="mb-4">
            Scan this QR code to start adding items.
          </DrawerDescription>
          <QRCode value={process.env.NEXT_PUBLIC_API_BASE_URL + "/group/" + cookie} className="w-full" />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;

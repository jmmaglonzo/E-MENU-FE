import QRCode from "react-qr-code";
import { v4 as uuidv4 } from "uuid";
import { FaUserGroup } from "react-icons/fa6";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { IoClose } from "react-icons/io5";

const NavDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <FaUserGroup size={20} />
      </DrawerTrigger>
      <DrawerContent className="mx-auto flex max-w-[350px] items-center p-0">
        <DrawerClose className="absolute right-4 top-2">
          <IoClose size={20} />
        </DrawerClose>
        <DrawerHeader>
          <div className="flex flex-col items-start gap-y-1">
            <DrawerTitle className="text-base text-primary">
              Join me
            </DrawerTitle>
            <DrawerDescription className="mb-4">
              Scan this QR code to start adding items.
            </DrawerDescription>
          </div>

          <QRCode value={uuidv4()} className="w-full" />
        </DrawerHeader>
        <DrawerFooter className="w-full">
          <Button>Start Ordering</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;

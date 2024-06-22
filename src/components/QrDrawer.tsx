import QRCode from "react-qr-code";
import { v4 as uuidv4 } from "uuid";
import { FaUserGroup } from "react-icons/fa6";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";

export const QrDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>
          <FaUserGroup size={20} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto flex max-w-[350px] items-center p-0">
        <div>
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
          <DrawerFooter>
            <Button className="w-full">Start Ordering</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

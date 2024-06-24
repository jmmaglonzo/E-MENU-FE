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
import { useState } from "react";
import { X } from "lucide-react";

export const QrDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>
        <FaUserGroup size={20} />
      </DrawerTrigger>
      <DrawerContent className="mx-auto flex max-w-[350px] items-center p-0">
        <div className="relative">
          <X
            className="absolute right-0 size-6 cursor-pointer text-muted-foreground"
            onClick={() => setIsOpen(!isOpen)}
          />
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

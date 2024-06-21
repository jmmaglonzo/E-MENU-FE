import QRCode from "react-qr-code";
import { v4 as uuidv4 } from "uuid";
import { UserPlusIcon } from "@heroicons/react/24/solid";
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
          <UserPlusIcon className="h-6 w-6" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="container flex items-center">
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

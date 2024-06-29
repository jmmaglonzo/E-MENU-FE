import { ChevronLeft } from "lucide-react";
import ViewOrder from "../Order/ViewOrder";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
export const OrderDrawer = () => {
  return (
    <div className="container fixed bottom-0 bg-white p-4">
      <Drawer>
        <DrawerTrigger className="inline-flex w-[90%] items-center justify-center rounded-md bg-primary text-white">
          <div className="flex w-full items-center justify-between p-2.5 px-8">
            <div className="flex size-6 w-fit items-center justify-center rounded-full border border-primary-foreground p-2">
              1
            </div>
            <span>View Orders</span>
            <span>200.00</span>
          </div>
        </DrawerTrigger>
        <DrawerContent className="container h-dvh">
          <ViewOrder />
          <DrawerClose className="absolute left-8 top-[32px]">
            <ChevronLeft size={24} />
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

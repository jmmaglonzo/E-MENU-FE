import ViewOrder from "../Order/ViewOrder";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";

export const OrderDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="inline-flex w-[90%] items-center justify-center rounded-md bg-primary text-white">
        <div className="flex w-full items-center justify-between p-4">
          <div className="flex size-6 w-fit items-center justify-center rounded-full border border-primary-foreground p-2">
            1
          </div>
          <span>View Orders</span>
          <span>200.00</span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="container h-full">
        <ViewOrder />
      </DrawerContent>
    </Drawer>
  );
};

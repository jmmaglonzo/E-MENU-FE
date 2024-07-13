import { GiftIcon, ShoppingCartIcon, StarIcon, TicketIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
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
import { cardRedeem } from "@/utils/cardRedeem";
import RedeemCard from "./RedeemCard";

const RedeemDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="rounded-sm bg-primary px-6 py-1 text-sm font-medium text-white">
        Redeem
      </DrawerTrigger>
      <DrawerContent className="mobile-container">
        <DrawerHeader>
          <DrawerTitle className="text-center text-2xl font-bold">
            Redeem Rewards
          </DrawerTitle>
          <DrawerDescription className="text-center">
            Browse and redeem your accumulated loyalty points for delicious
            food-related items.
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            {cardRedeem.map((item) => (
              <RedeemCard key={item.title} data={item} />
            ))}
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default RedeemDrawer;

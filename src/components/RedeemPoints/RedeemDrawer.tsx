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
import { useGetRewardsList } from "@/services/queries";
import { ScrollArea } from "../ui/scroll-area";

const RedeemDrawer = () => {
  const { data: rewards } = useGetRewardsList();
  console.log("rewards", rewards);
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
        {rewards !== undefined && rewards?.length >= 1 && (
          <ScrollArea className="size-full">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                {rewards.map((item) => (
                  <RedeemCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </ScrollArea>
        )}

        {rewards !== undefined && rewards?.length < 1 && (
          <div className="flex h-[400px] items-center justify-center">
            <span className="text-base text-muted-foreground">
              No rewards available
            </span>
          </div>
        )}
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

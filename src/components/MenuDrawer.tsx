import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "./ui/drawer";

const InfoDrawer = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger>
        <RxHamburgerMenu size={20} />
      </DrawerTrigger>
    <DrawerContent className="max-w-[380px] mx-auto">
        <DrawerHeader className=" flex justify-center flex-col items-center">
            <section className="rounded-full w-[100px] h-[100px] bg-gray-300">
            {/* Insert company image here */}
            </section>
            <DrawerTitle className="text-xl text-orange-400">
                Restaurant Name
            </DrawerTitle>

            <h2 className="text-md text-orange-400">
                Social Icons
            </h2>

            <DrawerDescription className="text-md text-orange-400">
                Bio Descriptions
            </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter>
            <Button className="border border-orange-300 bg-white text-orange-400
            hover:text-white">Order History</Button>
            <Button>Redeem Points</Button>
            <Button>Need Help?</Button>
        </DrawerFooter>
    </DrawerContent>
    </Drawer>
  )
}

export default InfoDrawer
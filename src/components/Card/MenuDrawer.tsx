import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../ui/button";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import Link from "next/link";
import restaurantLogo from "/public/restaurant_logo.png";
import Image from "next/image";
const MenuDrawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>
        <RxHamburgerMenu size={20} />
      </DrawerTrigger>
      <DrawerContent className="mx-auto mt-10 max-w-[380px]">
        <X
          className="absolute right-0 mx-3 mt-3 size-6 cursor-pointer text-muted-foreground"
          onClick={() => setIsOpen(!isOpen)}
        />
        <DrawerHeader className="flex flex-col items-center justify-center">
          <div className="relative h-[100px] w-[100px] rounded-full">
            <Image
              src={restaurantLogo}
              alt="Restaurant Logo"
              className="rounded-full"
            />
          </div>

          <DrawerTitle className="text-xl text-black">
            Chef Morgan Restaurant
          </DrawerTitle>

          <DrawerDescription className="text-center text-base leading-4 text-gray-500">
            Located in downtown, CM Restaurant is a family-owned restaurant
            offering authentic Italian cuisine since 1998. Enjoy homemade
            pastas, wood-fired pizzas, and fresh, locally sourced ingredients in
            a warm and inviting atmosphere. Join us for a memorable dining
            experience that brings the flavors of italy to your table.
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex cursor-pointer items-center justify-center gap-x-2">
          <IoLogoFacebook className="h-[25px] w-[25px]" />
          <FaSquareInstagram className="h-[25px] w-[25px]" />
          <AiFillTikTok className="h-[25px] w-[25px]" />
        </div>
        <DrawerFooter className="text-center text-base text-gray-500">
          <Link
            href={"/order-history"}
            className="rounded-sm border border-primary bg-white py-1.5 text-primary transition active:scale-110"
          >
            Order History
          </Link>
          <Button className="transition active:scale-110">Redeem Points</Button>
          <Link href="/faq" className="hover:text-primary">
            Need Help?
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;

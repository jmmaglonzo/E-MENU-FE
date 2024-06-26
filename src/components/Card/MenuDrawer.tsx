import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../ui/button";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { X } from "lucide-react"
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerImage,
    DrawerTitle,
    DrawerTrigger,
  } from "../ui/drawer";
import Link from "next/link";

const MenuDrawer = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger>
        <RxHamburgerMenu size={20} />
      </DrawerTrigger>
    <DrawerContent className="max-w-[380px] mx-auto mt-10">
          <X
            className="absolute right-0 size-6 cursor-pointer mt-3 mx-3 text-muted-foreground"
            onClick={() => setIsOpen(!isOpen)}
          />
        <DrawerHeader className=" flex justify-center flex-col items-center">
          <div className="w-[100px] h-[100px] rounded-full">     
              <DrawerImage
              src="/restaurant_logo.png"
              alt="Restaurant Logo"
              className="rounded-full"
              />
          </div>

            <DrawerTitle className="text-xl text-black">
                Chef Morgan Restaurant
            </DrawerTitle>
          
            <DrawerDescription className="text-sm text-center text-gray-500 leading-4">
                Located in downtown, CM Restaurant is a family-owned restaurant
                  offering authentic Italian cuisine since 1998. Enjoy homemade
                  pastas, wood-fired pizzas, and fresh, locally sourced ingredients
                  in a warm and inviting atmosphere. Join us for a memorable dining
                  experience that brings the flavors of italy to your table.
            </DrawerDescription>
        </DrawerHeader>
            <div className="flex justify-center items-center cursor-pointer 
              gap-x-2">    
            <IoLogoFacebook className="w-[25px] h-[25px]" />
            <FaSquareInstagram className="w-[25px] h-[25px]"/>
            <AiFillTikTok   className="w-[25px] h-[25px]"/>
            </div>
        <DrawerFooter className="text-center text-sm text-gray-500">
            <Button className="border border-orange-300 bg-white text-orange-400
            hover:text-white">Order History</Button>
            <Button>Redeem Points</Button>
            <Link href="" className="hover:text-orange-400">Need Help?</Link> 
        </DrawerFooter>
    </DrawerContent>
    </Drawer>
  )
}

export default MenuDrawer
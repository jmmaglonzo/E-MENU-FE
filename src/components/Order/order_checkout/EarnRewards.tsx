"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import EarnPointsDrawer from '@/components/Drawer/loyalty_points_drawer/EarnPointsDrawer';
import SuccessDrawer from '@/components/Drawer/loyalty_points_drawer/SuccessDrawer';

const EarnRewards = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleOutsideClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
    <div onClick={handleOutsideClick}
     className='flex flex-col items-center justify-center mb-5 mt-8 xs:mt-1 lg:mt-16'>
        <Image
            src="/giftbox.png"
            alt="icon-menu"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
            priority
          />

        <Drawer  open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger className='w-[100%]'>
              <div  className='bg-orange-100 p-3 flex justify-center'>
                
              <span
              className='text-orange-400 font-bold
              text-[0.7em]'>Earn and Save Points</span>
            </div>
            </DrawerTrigger>
        
        <DrawerContent className='mx-5 h-[300px]'>
          
        {!showSuccess ? (
          <DrawerTitle>
            <DrawerDescription></DrawerDescription>
            <EarnPointsDrawer isOpen={isOpen} setIsOpen={setIsOpen} setShowSuccess={setShowSuccess} />
            
          </DrawerTitle>
        ) : (
          <SuccessDrawer setShowSuccess={setShowSuccess} setIsOpen={setIsOpen} />
        )}
       
        </DrawerContent>
       
        
      </Drawer>

    </div>
    </>
  )
}

export default EarnRewards;

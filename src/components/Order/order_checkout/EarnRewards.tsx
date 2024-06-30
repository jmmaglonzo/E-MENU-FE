"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { Modal, ModalContainer, ModalHeader, ModalTitle, ModalContent, ModalFooter } from "../../ui/modal"
import EarnPointsModal from '@/components/loyalty_points/EarnPointsModal';



const EarnRewards = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showCheck, setShowCheck] = useState(false);

  return (
    <>
    <EarnPointsModal isOpen={isOpen} setIsOpen={setIsOpen} />
    <div className='flex flex-col items-center justify-center mb-5 mt-8 xs:mt-1 lg:mt-16'>
        <Image
            src="/giftbox.png"
            alt="icon-menu"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        <div  className='bg-orange-100 w-[100%] p-3 flex justify-center'>
          {/*Earn points modal goes here*/}
          <button
          onClick={() => setIsOpen(true)}
          className='text-orange-400 font-bold
          text-[0.7em]'>Earn and Save Points</button>

        </div>
    </div>
    </>
  )
}

export default EarnRewards;

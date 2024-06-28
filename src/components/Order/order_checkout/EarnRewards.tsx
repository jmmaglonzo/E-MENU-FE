import React from 'react'
import Image from "next/image";
import Link from 'next/link';
const EarnRewards = () => {
  return (
    <div className='flex flex-col items-center justify-center mb-5 mt-8 xs:mt-1 lg:mt-16'>
        <Image
            src="/giftbox.png"
            alt="icon-menu"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        <div className='bg-orange-100 w-[100%] p-3 flex justify-center'>
          <Link href="#" className='text-orange-400 font-bold
          text-[0.7em]'>Earn and Save Points</Link>
        </div>
    </div>
  )
}

export default EarnRewards
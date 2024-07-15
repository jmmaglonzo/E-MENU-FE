"use client";

import Image from 'next/image'
import React from 'react'
import cloche from '@/../public/let-them-cook.gif'
import { Button } from '@/components/ui/button'
import { useRequestAssistance } from '@/services/queries'

const OrderWaiting = () => {
  const {mutate: requestAssitance} = useRequestAssistance();

  function handleRequestAssitance() {
    requestAssitance();
  }

  return (
    <div className='h-screen flex flex-col justify-between mx-2'>

      <div className='text-center m-5'>
        <h1 className='font-bold'>Waiting Order</h1>
        <span className='text-[0.6em] text-gray-400'>Your order is currently being processed. Please wait patiently.</span>
      </div>

      <main className="flex-grow flex flex-col items-center justify-center">
        <div className='relative size-40'>
          <Image
            src={cloche}
            alt="cloche-icon"
            priority
            fill
            className="object-contain"
          />
        </div>
        <h1 className='font-bold'>Your order is pending</h1>
        <span className='text-sm text-gray-500'>Please wait while we process your order.</span>
      </main>

      <div className='mb-4 w-full max-w-[350px] mx-auto'>
        <Button className='w-full' onClick={handleRequestAssitance}>Need Assistance</Button>
      </div>
    </div>
  )
}

export default OrderWaiting
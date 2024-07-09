import Image from 'next/image'
import React from 'react'
import cloche from '../../../../../public/cloche.png'
import OrderSummaryItems from './OrderSummaryItems'

const OrderSummary = () => {
  return (
   <>
    <div className='text-center m-5 font-bold text-[0.9em]'>
        <h1>Order Summary</h1>
    </div>

    <header className="relative flex items-center flex-col mt-2">
        <div className=' relative w-24 h-24'>
        <Image
        src={cloche}
        alt="cloche-icon"
        priority
        sizes="100px"
        fill
        className="object-contain"
      />
        </div>

        <h2 className='font-bold'>Your order is pending</h2>
        <span className='text-sm text-gray-500'>Please wait while we process your order.</span>
        
    </header>

    <main>
        <OrderSummaryItems  />
    </main>
   </>
  )
}

export default OrderSummary
"use client";

import Image from 'next/image'
import React from 'react'
import cloche from '@/../public/let-them-cook.gif';
import OrderSummaryItems from './OrderSummaryItems';
import { Button } from '@/components/ui/button';
import { useGetMyLatestOrder } from '@/services/queries';
import Loader from '@/components/common/Loader';
import { MyLatestOrder } from '@/types/myOrder';
import { useRouter } from 'next/navigation';

const OrderSummary = () => {
  const { data, isPending, isSuccess } = useGetMyLatestOrder();
  const router = useRouter();
  
  const myLatestOrder = (isSuccess ? data: []) as MyLatestOrder;
  let status = "PENDING";
  if (isSuccess) {
    if (data.status === "CANCELLED") return router.replace("/");
    if (data.status === "COMPLETED") {
      if (data.paymentMethod === "CASH") return router.replace("/checkout/cash-payment");
      else return router.replace(data.checkoutURL as string);
    }
    status = data.status;
  }

  let textStatus = "pending";
  textStatus = status === "ONGOING" ? "being prepared": status === "SERVED"? "ready to be served": textStatus;

  return (
   <div className='container flex flex-col h-dvh'>

    <div className='text-center m-5 font-bold text-[0.9em]'>
        <h1>Order Summary</h1>
    </div>

    <header className="relative flex items-center flex-col mt-2">
        <div className=' relative w-32 h-32'>
        <Image
        src={cloche}
        alt="cloche-icon"
        priority
        sizes="100px"
        fill
        className="object-contain"
      />
        </div>

        <h2 className='font-bold'>Your order is {textStatus}</h2>
        <span className='text-sm text-gray-500'>Please wait while we process your order.</span>
        
    </header>

    <main className='flex-1'>
      {
        isPending? 
        <div className="flex justify-center mt-44">
          <Loader />
        </div>
        :
        <OrderSummaryItems data={myLatestOrder}/>
      }
    </main>

    <div className='mb-4'>
        <Button className='w-full'>Need Assistance</Button>
    </div>
   </div>
  )
}

export default OrderSummary
import React from 'react';
import { dummyData, dummyDataProps } from '@/utils/dummyData';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const OrderSummaryItems: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
    <div className="flex flex-col gap-4 max-w-[380px] mx-[auto] mt-8 mb-6 overflow-y-auto h-[350px]"> 
      {dummyData.map((item: dummyDataProps) => (
        <div key={item.id} className="flex justify-center gap-5 border border-gray-200 p-4 rounded-lg">
         
          <div className="relative w-44 h-24">
            <Image
             src={item.image}
             alt={item.name}
             fill
            
             sizes="100px"
            className="object-fill rounded-sm" />
          </div>
          <div className='flex flex-col'>
            <h3 className="text-sm font-semibold">{item.name}</h3>
            <p className="text-gray-600 text-[0.6em] mb-2">{item.desc}</p>
            <p className="text-gray-600 text-[0.6em] font-bold mb-2"><span className='text-primary'>Qty: </span>
            {item.qty}
            </p>
          </div>
          <p className="text-gray-800 font-semibold text-[0.7em]">{item.price}</p>
        </div>
      ))}

      
    </div>
    <div className='mb-4 w-full max-w-[380px]'>
    <Button className='w-full'>Need Assistance</Button>
    </div>
    </div>

  );
};

export default OrderSummaryItems;
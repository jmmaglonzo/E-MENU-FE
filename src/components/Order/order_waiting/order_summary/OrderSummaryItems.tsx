import React from 'react';
import { dummyData, dummyDataProps } from '@/utils/dummyData';
import Image from 'next/image';

const OrderSummaryItems: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 mt-8 flex-1 h-96 overflow-y-auto hide-scrollbar bg-gray-100 py-4"> 
        {dummyData.map((item: dummyDataProps) => (
          <div key={item.id} className="flex justify-center gap-5 border border-gray-200 px-3 py-2 rounded-lg bg-white">
          
            <div className="relative w-[180px] h-[90px]">
              <Image
              src={item.image}
              alt={item.name}
              fill
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
      <div className="mt-2 flex flex-col text-base text-gray-600 px-3">
        <div className="flex justify-between">
          <span>Total</span>
          <span>&#8369;{(231).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryItems;
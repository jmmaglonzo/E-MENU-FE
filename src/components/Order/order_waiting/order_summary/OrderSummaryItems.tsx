import React from 'react';
import { dummyData, dummyDataProps } from '@/utils/dummyData';
import Image from 'next/image';
import { MyOrder, Order } from '@/types/myOrder';

interface OrderSummaryItemsProp {
  data: MyOrder
}

const OrderSummaryItems = ({data}: OrderSummaryItemsProp) => {
  return (
    <div>
      <div className="flex flex-col gap-4 mt-8 flex-1 h-[230px] lg:mb-16 overflow-y-auto hide-scrollbar bg-gray-100 py-4"> 
        {data.orders.map((item: Order,index) => (
          <div key={index} className="flex justify-center gap-5 border border-gray-200 px-3 py-2 rounded-lg bg-white">
          
            <div className="relative w-[90px] h-[90px] aspect-square shrink-0">
              <Image
              src={item.product.image}
              alt={item.product.name}
              fill 
              sizes="(min-width: 350px) 78px, calc(18.89vw - 13px)" 
              className="object-cover" />
            </div>
            <div className='flex flex-col w-full'>
              <h3 className="text-sm font-semibold">{item.product.name}</h3>
              <p className="text-gray-600 text-[0.6em] mb-2">{item.product.description}</p>
              <p className="text-gray-600 text-[0.6em] font-bold mb-2"><span className='text-primary'>Quantity: </span>
              {item.quantity}
              </p>
            </div>  
            <p className="text-gray-800 font-semibold text-[0.7em]">&#8369;{item.price.toFixed(2)}</p>
          </div>
        ))}
        
      </div>
      <div className="mt-2 flex flex-col font-bold text-base text-gray-600 px-3">
        <div className="flex justify-between">
          <span>Total</span>
          <span>&#8369;{(data.total).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryItems;
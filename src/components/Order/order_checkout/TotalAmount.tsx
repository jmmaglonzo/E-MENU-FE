import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const TotalAmount = () => {
  return (
    <div className='bg-slate-100 p-2'>
        <div className='flex flex-col items-center mt-10 gap-y-2'>
        <span className='font-bold text-[0.7em]'>Total Amount to Pay</span>
        <span className='font-bold text-[2em]'>₱100,820.00</span>
        <span className='text-[0.6em]'>Vat Included <span className='text-orange-300'>learn more?</span></span>
        <Link href="#" className=' w-[100%] mt-2 rounded-sm bg-primary py-2 text-center font-semibold text-white'>Place Order</Link>
        </div>
       
    </div>
  )
}

export default TotalAmount
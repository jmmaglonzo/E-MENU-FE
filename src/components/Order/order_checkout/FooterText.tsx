import Link from 'next/link'
import React from 'react'

const FooterText = () => {
  return (
    <div>
        <div className='text-[0.7em] flex justify-center items-center leading-4
        my-10'>
        <span className='text-center'>
             I hereby give  Chef Morgan Restaurant the permission to share my customer data
          with the Restaurant, and is applicable, their respective affiliates and subsidaries,
          for service improvement and/or other related marketing purposes.
          I can find detailed information about the customer data sharing 
          <Link className='text-orange-300 font-bold' href='#'> here.</Link>
          </span>
        </div>

        <div className='text-[0.7em] flex justify-center my-5'>
        <span className='text-center'>By completing this order, I agree to all
        <Link href="#" className='text-orange-300 font-bold'> terms and conditions</Link></span>
        </div>
    </div>
  )
}

export default FooterText
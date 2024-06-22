"use client"
import React, { useRef } from 'react'
import categoryItems from "../../../api/categoryItems"

const MenuTab = () => {
  const buttonRef = useRef<(HTMLButtonElement | null)[]>([]);

  const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
    if(e.target){
      e.target.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }
  return (
    <div className='flex justify-center text-xs mx-2 mt-10 p-2  '>
        <div className='flex justify-between overflow-x-scroll 
        no-scrollbar whitespace-nowrap gap-x-2'>
          {/* rendering tab item title */}
        {categoryItems.map((item, index) => (     
          <div key={index} className='flex flex-col justify-center items-center space-x-2'>
            <button
             ref={(e:any) =>(buttonRef.current[index] = e)}
             onFocus={handleFocus}

             className='hover:bg-zinc-100 rounded-sm flex flex-col items-center w-[80px] py-3
             focus:bg-orange-400 focus:text-white shadow-2xl'>
                {/* <span>{item.img && <img className='w-10 h-10 rounded-full bg-slate-100 focus:bg-orange-400 object-fill'
                 src={item.img} 
                 alt={item.title} />}</span> */}

                <span className='truncate'>{item.title}</span>
            </button>
            </div>
        ))}
        </div>
    </div>
  )
}
export default MenuTab
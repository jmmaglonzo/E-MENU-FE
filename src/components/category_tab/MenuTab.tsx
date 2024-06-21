import React from 'react'
import categoryItems from "../../../api/categoryItems"

const MenuTab = () => {
  return (
    <div className='flex justify-center text-xs mx-2 mt-10 p-2  '>
        <div className='flex justify-between overflow-x-scroll 
        no-scrollbar whitespace-nowrap'>
        {categoryItems.map((item, index) => (
            <button
             key={index}
             className='hover:bg-zinc-200 rounded-sm p-2 py-3
             focus:bg-orange-400 focus:text-white'>
                {item.title}
            </button>
        ))}
        </div>
    </div>
  )
}
export default MenuTab
"use client"

import React, { useState } from 'react'
import Emenu_logo from '../../../../public/emenu-logo-white.png'
import Profile_logo from '../../../../public/profile_add.png'
import MenuButton from './MenuButton'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
        <div className='flex flex-row justify-between mx-3 mt-5 items-center'>
            <div>
            <MenuButton
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)} width={undefined} height={undefined}/>
            </div>

            <div>
            <img src={Emenu_logo.src} 
            alt='icon-menu' 
            className='w-[90px] h-[34px]' />
            </div>

            <div>
            <img src={Profile_logo.src} 
            alt='add-logo'
             className='w-[30px] h-7' />
            </div>
        </div>
    
    </>
  )
}

export default Navbar
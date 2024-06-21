"use client"
import React, { useState } from 'react'
import MenuButton from './MenuButton'
import Image from 'next/image';
// import { UserPlus } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header>
        <nav className='flex justify-between mt-5  mx-5 items-center'>
            <div>
            <MenuButton
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)} width={undefined} height={undefined}/>
            </div>

            <div>
            <Image src="/emenu-logo-white.png" 
            alt='icon-menu' 
            width={60}
            height={50}
            style={{ width: 'auto', height: 'auto' }}
            priority
            />
            </div>

            <div>
            <Image
            src="/profile_add.png"
            alt='add-logo'
            width={15}
            height={15}
            style={{ width: 'auto', height: 'auto' }}
            priority />
            </div>
        </nav>
        
    
    </header>
  )
}

export default Navbar
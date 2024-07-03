import { Button } from '@/components/ui/button';
import React from 'react';
import { DrawerClose } from '@/components/ui/drawer';
import { IoClose } from 'react-icons/io5';

type SuccessProps = {
    setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SuccessDrawer: React.FC<SuccessProps> = ({ setShowSuccess, setIsOpen }) => {
    const handleCloseDrawer = () => {
        setShowSuccess(false);
        setIsOpen(false);
      };
  return (
   
      <div className='mt-[10px] -mx-[4px]'>
        <div onClick={(e: React.MouseEvent) => e.stopPropagation()} className='px-5'>

          <div className='flex flex-row justify-between'>
          <section className='leading-3 flex flex-col gap-y-2'>
            <span className='leading-4 font-bold'>Points Earned!</span>
            <span className='text-[0.6em] text-gray-500'>Congratulations, You have earned 100 loyal points.</span>
          </section>
          <span className='-mt-5'>
          <DrawerClose><IoClose size={20} /></DrawerClose>
          </span>
          </div>
          <section className='flex flex-col gap-y-5 items-center mt-24'>
            <span className=''>You have earned 100 points!</span>
            <Button onClick={handleCloseDrawer}
             className='w-full bg-primary rounded-md text-white text-[0.8em] py-2'>OK</Button>
          </section>
        </div>
      </div>
    
  );
};

export default SuccessDrawer;
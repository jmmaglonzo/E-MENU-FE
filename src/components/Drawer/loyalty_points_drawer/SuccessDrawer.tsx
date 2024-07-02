import React from 'react';

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
   
      <div>
        <div onClick={(e: React.MouseEvent) => e.stopPropagation()} className='px-5'>
          <section className='leading-3 flex flex-col gap-y-2'>
            <span className='leading-4 font-bold'>Points Earned!</span>
            <span className='text-[0.6em] text-gray-500'>Congratulations, You have earned 100 loyal points.</span>
          </section>

          <section className='flex flex-col gap-y-5 items-center mt-24'>
            <span className=''>You have earned 100 points!</span>
            <button onClick={handleCloseDrawer} className='bg-primary w-[100%] text-white text-[0.6em] p-2 rounded-[5px]'>OK</button>
          </section>
        </div>
      </div>
    
  );
};

export default SuccessDrawer;
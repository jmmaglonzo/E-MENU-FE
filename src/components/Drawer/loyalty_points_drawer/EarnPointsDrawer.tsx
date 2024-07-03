import { Drawer, DrawerClose } from '@/components/ui/drawer'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import SuccessDrawer from './SuccessDrawer';
import { IoClose } from 'react-icons/io5';
type EarnPointsProps = {
        isOpen: boolean,
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
        setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    }

const EarnPointsDrawer = ({isOpen, setIsOpen, setShowSuccess}: EarnPointsProps) => {

    const [showCheck, setShowCheck] = useState<boolean>(false);
     const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
     const [formData, setFormData] = useState({
         name: "",
         email: "",
         phone: ""
     });

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         const { name, value } = e.target;
         setFormData({
             ...formData,
             [name]: value
         });
     };
     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         console.log("Form submitted:", formData);
         setFormData({
             name: "",
             email: "",
             phone: ""
         });
         setIsSubmitted(true);
         setShowCheck(true);

         setTimeout(() => {
           setShowCheck(false);
           setIsSubmitted(false);
           setShowSuccess(true); // Open the success drawer
         }, 3000); 
       
     };
  return (
     <div className='mt-[10px]'>
    
      {isSubmitted ? (
        <div className="bg-opacity-10 flex flex-col items-center justify-center h-[300px] gap-y-3">

          <span className="font-bold text-[2em] text-gray-400 leading-3">Thank You!</span>

          <div>
          {showCheck && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className='text-green-500 bg-transparent text-[50px]'
            >
              ✔️
            </motion.div>   
          )}
           </div> 
        </div>
      ) : (
        <div className='flex flex-col'>
        <div className='flex flex-row justify-between '>
        <div className='wrapper flex flex-col  gap-y-2 mx-5'>
          <span className="font-bold text-[1.2em] leading-3">Earn Loyal Points</span>
          <span className="text-gray-400 text-[0.7em]">Fill out the form below to start earning loyal points.</span>
        </div>
        <span className='mr-4 -mt-6'>
          <DrawerClose><IoClose size={20} /></DrawerClose>
       </span>
       </div>
          <form onSubmit={handleSubmit} className="space-y-5 text-[0.8em] flex flex-col p-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border border-gray-400 rounded-[5px] p-2"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="border border-gray-400 rounded-[5px] p-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="border border-gray-400 rounded-[5px] p-2"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <div className="flex flex-row gap-x-2 justify-end">
              <button type="submit" className="text-[1em] bg-primary text-white rounded-[2px] p-1">Earn Points</button>
              <button type="button" className="text-[1em]" onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default EarnPointsDrawer
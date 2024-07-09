import { Modal, ModalContainer, ModalContent, ModalFooter } from '@/components/ui/modal'
import React from 'react'

type KitchenModalProps = {
    editModalOpen: boolean;
    setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const EditModal = ({editModalOpen, setIsEditModalOpen}: KitchenModalProps) => {
    const handleCloseModal = () =>{
        setIsEditModalOpen(false);
    }
  return (
    <div>
        {editModalOpen && (
             <Modal onClick={handleCloseModal}>
             <ModalContainer>
                 <ModalContent className='w-[380px]'  onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                    <div>
                        <h2 className='font-bold'>Edit Inventory Item</h2>
                        <span className='text-[0.6em] text-gray-400'>Make changes to the Inventory Item details</span>
                    </div>
                    <div className='flex flex-col space-y-4 mx-5 text-[0.7em] my-5'>

                        <div className='flex gap-2'>
                        <label className='ml-7'>Name</label>
                        <input type='text'
                        className='border border-gray-200
                        rounded-[5px] h-[30px] w-full p-1' />
                        </div>

                        <div className='flex gap-x-2'>
                        <label className=''>Description</label>
                        <textarea
                        
                        className='p-3 w-full h-[150px]  border border-gray-200
                        rounded-[5px] resize-none'></textarea>
                        </div>

                        <div className='flex gap-2'>
                        <label className='ml-8'>Price</label>
                        <input
                        className='border border-gray-200
                        rounded-[5px]  h-[30px] w-full '
                         type='text' />
                        </div>

                        <div className='flex gap-2'>
                        <label className='ml-4'>Quantity</label>
                        <input
                        className='border border-gray-200
                        rounded-[5px]  h-[30px] w-full'
                         type='text' />
                        </div>
                    </div>
                    <div className='flex justify-end gap-2 text-[0.7em] p-2'>
                    <button className='rounded-[5px] bg-primary text-white p-1'>Save Changes</button>
                        <button className='rounded-[5px] border border-gray-200 p-1 text-black'
                        onClick={()=> setIsEditModalOpen(false)}>Cancel</button>
                    </div>
                 </ModalContent>
             </ModalContainer>
         </Modal>
        )}
       
    </div>
  )
}

export default EditModal
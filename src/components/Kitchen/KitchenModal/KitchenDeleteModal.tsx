import { Modal, ModalContainer, ModalContent } from '@/components/ui/modal'
import React from 'react'

type KitchenDeleteModalProps = {
    deleteItemModal: boolean;
    setDeleteItemModal:React.Dispatch<React.SetStateAction<boolean>>;
}

const KitchenDeleteModal = ({deleteItemModal, setDeleteItemModal}: KitchenDeleteModalProps) => {
    const handleCloseModal = () =>{
        setDeleteItemModal(false);
    }
  return (
    <div>
        {deleteItemModal && (
              <Modal onClick={handleCloseModal}>
              <ModalContainer className='p-5'>
                  <ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                      <h2 className='font-bold -mt-3'>Delete Item</h2>
                      <span className='text-gray-400 text-[0.7em]'
                      >Are you sure you want to delete the selected item?
                       This action cannot be undone</span>
                  </ModalContent>
                <div className='flex justify-end text-[0.6em] gap-2'>
                  <button className="border border-gray-300 mt-4 text-black p-2 rounded-[5px]" onClick={() => setDeleteItemModal(false)}>
                  Cancel
                </button>
                <button className=" mt-4 bg-orange-500 text-white p-2 rounded-[5px]" onClick={() => setDeleteItemModal(false)}>
                  Delete Item
                </button>
                </div>
              </ModalContainer>
          </Modal>
        )}
      
    </div>
  )
}

export default KitchenDeleteModal
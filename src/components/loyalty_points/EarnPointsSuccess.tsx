import React from 'react';
import { Modal, ModalContainer, ModalHeader, ModalTitle, ModalContent } from '../ui/modal'; 
type EarnPointsSuccessProps = {
    setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

const EarnPointsSuccess: React.FC<EarnPointsSuccessProps> = ({ setShowSuccess }) => {
    const handleCloseModal = () => {
        setShowSuccess(false); // Function to close the modal
      };
  return (
   
      <Modal>
        <ModalContainer onClick={(e: React.MouseEvent) => e.stopPropagation()}>
          <ModalHeader className='leading-3'>
            <ModalTitle className='leading-4 font-bold'>Points Earned!</ModalTitle>
            <span className='text-[0.6em] text-gray-500'>Congratulations, You have earned 100 loyal points.</span>
          </ModalHeader>
          <ModalContent className='flex flex-col gap-y-2 items-center'>
            <span>You have earned 100 points!</span>
            <button onClick={handleCloseModal} className='bg-primary w-[100%] text-white text-[0.6em] p-2 rounded-[5px]'>OK</button>
          </ModalContent>
        </ModalContainer>
      </Modal>
    
  );
};

export default EarnPointsSuccess;
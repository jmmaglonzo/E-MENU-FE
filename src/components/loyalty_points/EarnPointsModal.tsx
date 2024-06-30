import React, { useState } from "react";
import { Modal, ModalContainer, ModalHeader, ModalTitle, ModalContent, ModalFooter } from "../ui/modal"
import { motion } from 'framer-motion';
import EarnPointsSuccess from "./EarnPointsSuccess";

type EarnPointsModal = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const EarnPointsModal = ({isOpen, setIsOpen}: EarnPointsModal) => {
    const [showCheck, setShowCheck] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
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
          setIsOpen(false); // Close the current modal
          setShowSuccess(true); // Open the success modal
        }, 3000); 
       
    };

  return (
    <>
      {isOpen && (
        <Modal onClick={() => setIsOpen(false)}>
          <ModalContainer onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className="" >
            {isSubmitted ? (
              <ModalHeader className="bg-opacity-10">
                <ModalTitle className="font-bold text-[1em] leading-3">Success!</ModalTitle>
              </ModalHeader>
            ) : (
              <ModalHeader>
                <ModalTitle className="font-bold text-[1em] leading-3">Earn Loyal Points</ModalTitle>
                <span className="text-gray-400 text-[0.6em]">Fill out the form below to start earning loyal points.</span>
              </ModalHeader>
            )}

           <ModalContent>
              {isSubmitted ? (
                <div className="flex justify-center items-center h-full">
                  {showCheck && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className='text-green-500 bg-transparent text-4xl'>
                      ✔️
                    </motion.div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-[0.5em] flex flex-col p-5">
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
                  <ModalFooter className="">
                    <button type="submit" className="text-[1em] bg-primary text-white rounded-[2px] p-1">Earn Points</button>
                    <button type="button" className="text-[1em]" onClick={() => setIsOpen(false)}>Cancel</button>
                  </ModalFooter>
                </form>
              )}
            </ModalContent>
          </ModalContainer>
        
        </Modal>
      )}
       {showSuccess && <EarnPointsSuccess setShowSuccess={setShowSuccess} />}
    </>
  );
};

export default EarnPointsModal;
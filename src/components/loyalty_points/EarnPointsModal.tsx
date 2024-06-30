import React, { useState } from "react";
import { Modal, ModalContainer, ModalHeader, ModalTitle, ModalContent, ModalFooter } from "../ui/modal"


type EarnPointsModal = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const EarnPointsModal = ({isOpen, setIsOpen}: EarnPointsModal) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const {name, email, phone} = formData;

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
        if (name === "" && email === "" && phone === "") {
            alert("Field should not be empty!");
        }
        setFormData({
            name: "",
            email: "",
            phone: ""
        });
        setIsOpen(false);
        
    };

  return (
    <>
      {isOpen && (
        <Modal onClick={() => setIsOpen(false)}>
          <ModalContainer onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className="w-[100%] mx-2" >
            <ModalHeader>
              <ModalTitle className="font-bold text-[1em] leading-3">Earn Loyal Points</ModalTitle>
              <span className="text-gray-400 text-[0.6em]">Fill out the form below to start earning loyal points.</span>
            </ModalHeader>
            <ModalContent >

            <form onSubmit={handleSubmit} className="space-y-5 text-[0.5em] flex flex-col p-5">

              <input
               type="text"
               name="name"
               placeholder="Name"
               className="border border-gray-400  rounded-[5px] p-2"
               value={formData.name}
               onChange={handleChange}/>

              <input
               type="text"
                placeholder="Email Address"
                name="email"
               className="border border-gray-400  rounded-[5px] p-2"
               value={formData.email}
               onChange={handleChange}
                />

              <input
               type="text"
               name="phone"
               placeholder="Phone Number"
               className="border border-gray-400  rounded-[5px] p-2"
               value={formData.phone}
               onChange={handleChange} />

              <ModalFooter className="">
              
              <button className="text-[1em] bg-primary text-white rounded-[2px] p-1">Earn Points</button>
              <button className="text-[1em]" onClick={() => setIsOpen(false)}>Cancel</button>
              
            </ModalFooter>
              </form>
            </ModalContent>
            
          </ModalContainer>
        </Modal>
      )}
    </>
  );
};

export default EarnPointsModal;
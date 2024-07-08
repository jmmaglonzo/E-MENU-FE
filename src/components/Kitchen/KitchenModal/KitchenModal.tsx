import { Modal, ModalContainer, ModalContent, ModalHeader, ModalTitle } from '@/components/ui/modal';
import React, { useState } from 'react';
import { MdOutlineFileUpload } from "react-icons/md";

type KitchenModalProps = {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const KitchenModal = ({ isModalOpen, setIsModalOpen }: KitchenModalProps) => {
    const [fileName, setFileName] = useState<string>('');

    const handleFileChange = (event:any) => {
      const file = event.target.files[0];
      setFileName(file ? file.name : '');
    };
    return (
        <>
          {isModalOpen && (
            <Modal className="text-[0.7em] fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white p-5 rounded shadow-lg w-full max-w-3xl">
                <h2 className="text-xl font-bold mb-4">Add New Item</h2>
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Product Name"
                    className="border rounded p-2 w-full col-span-2"
                  />
                  <input
                    type="text"
                    placeholder="Price"
                    className="border rounded p-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Cooking Time"
                    className="border rounded p-2 w-full"
                  />
                <div className="col-span-2">
                <label className="block">
                 
                  <input
                    type="file"
                    className="hidden sr-only"
                  />
                  <div className="cursor-pointer flex items-center justify-between bg-white border rounded p-2">
                    <span className={fileName ? 'text-black' : 'text-gray-500'}>
                      {fileName || 'Upload image'}
                    </span>
                    <span className="text-primary">
                      <MdOutlineFileUpload className="size-4" />
                    </span>
                  </div>
                </label>
              </div>
                </div>
                {/*Category Items*/}
                    <div className='mt-5'>
                        <h2 className="text-xl font-bold mb-4">Category</h2>
                    </div>
                <div className='flex justify-end'>
                <button className="  mt-4 bg-orange-500 text-white p-2 rounded" onClick={() => setIsModalOpen(false)}>
                  Add Item
                </button>
                </div>
              </div>
            </Modal>
          )}
        </>
      );
    };

export default KitchenModal;
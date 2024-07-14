import {
  Modal,
  ModalContainer,
  ModalContent,
  ModalFooter,
} from "@/components/ui/modal";
import React from "react";

type KitchenModalProps = {
  editModalOpen: boolean;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const EditModal = ({
  editModalOpen,
  setIsEditModalOpen,
}: KitchenModalProps) => {
  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };
  return (
    <div>
      {editModalOpen && (
        <Modal onClick={handleCloseModal}>
          <ModalContainer>
            <ModalContent
              className="w-[380px]"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div>
                <h2 className="font-bold">Edit Inventory Item</h2>
                <span className="text-[0.6em] text-gray-400">
                  Make changes to the Inventory Item details
                </span>
              </div>
              <form className="mx-5 my-5 flex flex-col space-y-4 text-[0.7em]">
                <div className="flex gap-2">
                  <label className="ml-7">Name</label>
                  <input
                    type="text"
                    className="h-[30px] w-full rounded-[5px] border border-gray-200 p-1"
                  />
                </div>

                <div className="flex gap-x-2">
                  <label className="">Description</label>
                  <textarea className="h-[150px] w-full resize-none rounded-[5px] border border-gray-200 p-3"></textarea>
                </div>

                <div className="flex gap-2">
                  <label className="ml-8">Price</label>
                  <input
                    className="h-[30px] w-full rounded-[5px] border border-gray-200"
                    type="text"
                  />
                </div>

                <div className="flex gap-2">
                  <label className="ml-4">Quantity</label>
                  <input
                    className="h-[30px] w-full rounded-[5px] border border-gray-200"
                    type="text"
                  />
                </div>

                <div className="flex justify-end gap-2 p-2 text-base">
                  <button
                    className="rounded-[5px] bg-primary p-1 text-white"
                    type="submit"
                  >
                    Save Changes
                  </button>
                  <button
                    className="rounded-[5px] border border-gray-200 p-1 text-black"
                    onClick={() => setIsEditModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </ModalContent>
          </ModalContainer>
        </Modal>
      )}
    </div>
  );
};

export default EditModal;

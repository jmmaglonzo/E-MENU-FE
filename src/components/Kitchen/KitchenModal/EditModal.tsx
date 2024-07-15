import { Modal, ModalContainer, ModalContent } from "@/components/ui/modal";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type EditField = z.infer<typeof EditFieldSchema>;

const EditFieldSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  description: z.string().min(15, {
    message: "Description must be at least 15 characters",
  }),
  price: z
    .string()
    .transform((val) => parseInt(val))
    .refine((val) => !isNaN(val), {
      message: "Price must be a number",
    }),
  quantity: z
    .string()
    .transform((val) => parseInt(val))
    .refine((val) => !isNaN(val), { message: "Quantity must be a number" }),
});

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditField>({
    resolver: zodResolver(EditFieldSchema),
  });

  const onSubmit: SubmitHandler<EditField> = (data) => {
    console.log(data);
    reset();
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
              <form
                className="mx-5 my-5 flex flex-col space-y-4 text-[0.7em]"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex gap-2">
                  <label className="ml-7">Name</label>
                  <div className="flex flex-col">
                    <input
                      {...register("name")}
                      type="text"
                      className="h-[30px] w-full rounded-[5px] border border-gray-200 p-1"
                    />
                    {errors.name && (
                      <span className="text-sm text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-x-2">
                  <label className="">Description</label>
                  <div className="flex flex-col">
                    <textarea
                      className="h-[150px] w-full resize-none rounded-[5px] border border-gray-200 p-3"
                      {...register("description")}
                    ></textarea>
                    {errors.description && (
                      <span className="text-sm text-red-500">
                        {errors.description.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <label className="ml-8">Price</label>
                  <div className="flex flex-col">
                    <input
                      {...register("price")}
                      className="h-[30px] w-full rounded-[5px] border border-gray-200"
                      type="text"
                    />
                    {errors.price && (
                      <span className="text-sm text-red-500">
                        {errors.price.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <label className="ml-4">Quantity</label>
                  <div className="flex flex-col">
                    <input
                      {...register("quantity")}
                      className="h-[30px] w-full rounded-[5px] border border-gray-200"
                      type="text"
                    />
                    {errors.quantity && (
                      <span className="text-sm text-red-500">
                        {errors.quantity.message}
                      </span>
                    )}
                  </div>
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

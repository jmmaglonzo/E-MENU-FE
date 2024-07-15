import { Modal } from "@/components/ui/modal";
import { useMenuStore } from "@/store/menuTab-store";
import KitchenCategory from "@/utils/kitchen_category_modal";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
type KitchenModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormValues = z.infer<typeof schema>;

const schema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters long",
  }),
  price: z
    .string()
    .transform((val) => parseInt(val))
    .refine((val) => !isNaN(val), {
      message: "Price must be a number",
    }),
  cookingTime: z
    .string()
    .transform((val) => parseInt(val))
    .refine((val) => !isNaN(val), {
      message: "Cooking time must be a number",
    }),
  image: z.string().url({
    message: "Invalid URL",
  }),
  category: z.string(),
  description: z.string().min(15, {
    message: "Description must be at least 15 characters long",
  }),
});

const KitchenModal = ({ isModalOpen, setIsModalOpen }: KitchenModalProps) => {
  const selected = useMenuStore((state) => state.selected);
  const setSelected = useMenuStore((state) => state.setSelected);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      {isModalOpen && (
        <Modal
          onClick={handleCloseModal}
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 px-2 text-[0.7em]"
        >
          <form
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-3xl rounded bg-white p-5 shadow-lg"
          >
            <h2 className="mb-4 text-xl font-bold">Add New Item</h2>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Product Name"
                  className="col-span-2 w-full rounded border p-2"
                  {...register("name")}
                />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="col-span-2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Price"
                  className="w-full rounded border p-2"
                  {...register("price")}
                />
                {errors.price && (
                  <span className="text-sm text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </div>
              <div className="col-span-2 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Cooking Time"
                  className="w-full rounded border p-2"
                  {...register("cookingTime")}
                />
                {errors.cookingTime && (
                  <span className="text-sm text-red-500">
                    {errors.cookingTime.message}
                  </span>
                )}
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <input
                  type="text"
                  className="w-full rounded border p-2"
                  placeholder="Image Link"
                  {...register("image")}
                />
                {errors.image && (
                  <span className="text-sm text-red-500">
                    {errors.image.message}
                  </span>
                )}
              </div>
            </div>
            {/*Category Items*/}
            <div className="mt-5">
              <div>
                <h2 className="mb-4 text-xl font-bold">Category</h2>
              </div>

              <div className="flex items-center gap-2 overflow-x-scroll whitespace-nowrap py-1 text-[0.8em] no-scrollbar">
                {KitchenCategory.map((c) => (
                  <button
                    key={c.value}
                    className={`${selected === c.value ? "bg-primary text-white" : "text-muted-foreground"} flex items-center gap-2 rounded-[5px] bg-gray-200 px-4 py-1 font-medium shadow-sm`}
                    onClick={() => setSelected(c.value)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <div className="mt-2 flex flex-col gap-2">
                <textarea
                  placeholder="Description"
                  className="h-[200px] w-full resize-none rounded-[5px] border border-gray-200 p-3"
                  {...register("description")}
                />
                {errors.description && (
                  <span className="text-sm text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="mt-4 rounded p-2 text-black"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>

              <button
                className="mt-4 rounded bg-orange-500 p-2 text-white"
                type="submit"
              >
                Add Item
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default KitchenModal;

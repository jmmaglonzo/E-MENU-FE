import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { categories } from "@/utils/kitchen_category_modal";
type FormValues = z.infer<typeof schema>;
const schema = z.object({
  product: z.string().min(6, {
    message: "Product name must be at least 6 characters long",
  }),
  price: z
    .number({
      message: "Price must be a number",
    })
    .positive({
      message: "Price must be a positive number",
    }),
  time: z
    .number({
      message: "Time must be a number",
    })
    .positive({
      message: "Time must be a positive number",
    }),
  link: z.string().url({
    message: "Link must be a valid URL",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters long",
  }),
});
const KitchenModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormValues> = (value) => {
    console.log(value);
    reset();
  };
  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          clearErrors();
        }
      }}
    >
      <DialogTrigger className="w-full rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-white">
        Add Item
      </DialogTrigger>
      <DialogContent className="flex max-w-2xl flex-col">
        <DialogHeader>
          <DialogTitle>Add New Item</DialogTitle>
          <DialogDescription>Add new Products on the List</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 flex flex-col gap-2">
              <Input
                type="text"
                placeholder="Product Name"
                {...register("product")}
              />
              {errors.product && (
                <span className="whitespace-nowrap text-sm text-red-600">
                  {errors.product.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Input
                type="number"
                placeholder="Price"
                {...register("price", {
                  valueAsNumber: true,
                })}
              />
              {errors.price && (
                <span className="whitespace-nowrap text-sm text-red-600">
                  {errors.price.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Input
                type="number"
                placeholder="Cooking Time"
                {...register("time", {
                  valueAsNumber: true,
                })}
              />
              {errors.time && (
                <span className="whitespace-nowrap text-sm text-red-600">
                  {errors.time.message}
                </span>
              )}
            </div>
            <div className="col-span-3 flex flex-col gap-2">
              <Input
                type="text"
                placeholder="Image Link"
                {...register("link")}
              />
              {errors.link && (
                <span className="whitespace-nowrap text-sm text-red-600">
                  {errors.link.message}
                </span>
              )}
            </div>
            {/* INSERT CATEGORY */}

            <div className="col-span-4 flex flex-col gap-2 px-1">
              <Textarea
                {...register("description")}
                placeholder="Enter Description"
              />
              {errors.description && (
                <span className="whitespace-nowrap text-sm text-red-600">
                  {errors.description.message}
                </span>
              )}
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="rounded-sm bg-primary px-4 py-1.5 text-sm font-medium text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default KitchenModal;

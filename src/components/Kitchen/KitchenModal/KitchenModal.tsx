import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { categories } from "@/utils/kitchen_category_modal";

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
  categories: z
    .array(z.string())
    .min(1, { message: "Select at least one category" }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters long",
  }),
});

type FormValues = z.infer<typeof schema>;

const KitchenModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      categories: [],
    },
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
      <DialogTrigger className="w-full whitespace-nowrap rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-white">
        Add Item
      </DialogTrigger>
      <DialogContent className="flex max-w-2xl flex-col">
        <DialogHeader>
          <DialogTitle>Add New Item</DialogTitle>
          <DialogDescription>Add new Products on the List</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <Input
                type="text"
                placeholder="Product Name"
                {...register("product")}
              />
              {errors.product && (
                <span className="text-sm text-red-600">
                  {errors.product.message}
                </span>
              )}
            </div>
            <div>
              <Input
                type="number"
                placeholder="Price"
                {...register("price", { valueAsNumber: true })}
              />
              {errors.price && (
                <span className="text-sm text-red-600">
                  {errors.price.message}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div>
              <Input
                type="number"
                placeholder="Cooking Time"
                {...register("time", { valueAsNumber: true })}
              />
              {errors.time && (
                <span className="text-sm text-red-600">
                  {errors.time.message}
                </span>
              )}
            </div>
            <div className="col-span-3">
              <Input
                type="text"
                placeholder="Image Link"
                {...register("link")}
              />
              {errors.link && (
                <span className="text-sm text-red-600">
                  {errors.link.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Category</h3>
            <Controller
              name="categories"
              control={control}
              render={({ field }) => (
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <label key={category} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        value={category}
                        onChange={(e) => {
                          const updatedCategories = e.target.checked
                            ? [...field.value, category]
                            : field.value.filter((c: string) => c !== category);
                          field.onChange(updatedCategories);
                        }}
                        checked={field.value.includes(category)}
                        className="hidden"
                      />
                      <span
                        className={`cursor-pointer rounded-full px-4 py-2 text-sm ${
                          field.value.includes(category)
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            />
            {errors.categories && (
              <span className="text-sm text-red-600">
                {errors.categories.message}
              </span>
            )}
          </div>

          <div>
            <Textarea
              {...register("description")}
              placeholder="Enter Description"
              className="w-full"
            />
            {errors.description && (
              <span className="text-sm text-red-600">
                {errors.description.message}
              </span>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-sm bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
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

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { Input } from '@/components/ui/input';
import { useEditItem } from '@/services/queries';
import { ItemTypes } from '@/types/productCard';

const editSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(6, {
    message: 'Name must be at least 6 characters long',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters long',
  }),
  price: z
    .number({
      message: 'Price must be a number',
    })
    .positive({
      message: 'Price must be a positive number',
    }),
  quantity: z
    .number({
      message: 'Quantity must be a number',
    })
    .positive({
      message: 'Quantity must be a positive number',
    }),
});

interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface EditModalProps {
  item: Item;
  onEdit: (updatedItem: ItemTypes) => void;
}

const EditModal: React.FC<EditModalProps> = ({ item, onEdit }) => {
  const { mutate } = useEditItem();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<z.infer<typeof editSchema>>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      id: item?.id,
      name: item?.name,
      description: item?.description,
      price: item?.price,
      quantity: item?.quantity,
    },
  });

  const handleEdit: SubmitHandler<z.infer<typeof editSchema>> = async (data) => {
    try {
    
      const updatedItem: ItemTypes = {
        id: data.id,
        name: data.name,
        description: data.description,
        quantity: data.quantity,
        price: data.price,

        image: '',
        createdAt: '',
        updatedAt: '',
        estimatedCookingTimeMin: 0,
        productCategorize: [],
        productReview: [],
        categories: [],
        ratings: 0
      };
      mutate(data.id); 
      onEdit(updatedItem); 
    } catch (error) {
      console.error('Error editing item:', error);
    }
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          clearErrors();
        }
      }}
    >
      <DialogTrigger className="cursor-pointer">
        <HiOutlinePencilAlt />
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Edit Inventory Item</DialogTitle>
          <DialogDescription>
            Make changes to the inventory item details.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={handleSubmit(handleEdit)}>
          <input type="hidden" {...register('id')} />
          <div>
            <label
              htmlFor="name"
              className="text-base font-medium text-gray-700"
            >
              Name
            </label>
            <Input
              {...register('name')}
              type="text"
              className="rounded-lg border px-3 py-2 focus:outline-none"
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="description"
              className="text-base font-medium text-gray-700"
            >
              Description
            </label>
            <Textarea
              {...register('description')}
              className="flex-1 rounded-lg border px-3 py-2 focus:outline-none"
            />
            {errors.description && (
              <span className="text-sm text-red-500">
                {errors.description.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="price"
              className="text-base font-medium text-gray-700"
            >
              Price
            </label>
            <Input
              {...register('price', {
                valueAsNumber: true,
              })}
              type="number"
              className="rounded-lg border px-3 py-2 focus:outline-none"
            />
            {errors.price && (
              <span className="text-sm text-red-500">
                {errors.price.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="quantity"
              className="text-base font-medium text-gray-700"
            >
              Quantity
            </label>
            <Input
              {...register('quantity', {
                valueAsNumber: true,
              })}
              type="number"
              className="rounded-lg border px-3 py-2 focus:outline-none"
            />
            {errors.quantity && (
              <span className="text-sm text-red-500">
                {errors.quantity.message}
              </span>
            )}
          </div>
          <div className="flex justify-end gap-2">
            <DialogClose className="rounded-sm bg-secondary px-4 py-2">
              Cancel
            </DialogClose>
            <button
              type="submit"
              onClick={() => handleEdit}
              className="rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600 focus:outline-none"
            >
              Save Changes
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
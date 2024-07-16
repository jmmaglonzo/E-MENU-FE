import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { HiOutlineTrash } from "react-icons/hi";

const KitchenDeleteModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">
        <HiOutlineTrash className="text-red-500" />
      </DialogTrigger>

      <DialogContent>
        <form>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Delete Item</DialogTitle>
            <DialogDescription className="text-lg">
              Are you sure want to delete the selected item? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose className="rounded-sm bg-secondary px-4 py-1.5 font-semibold">
              Cancel
            </DialogClose>
            <button
              type="submit"
              className="rounded-sm bg-primary px-4 py-1.5 font-semibold text-white"
            >
              Delete
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default KitchenDeleteModal;

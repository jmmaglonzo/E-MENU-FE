import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiOutlinePencilAlt } from "react-icons/hi";

const addSchema = z.object({
  rewardName: z.string().min(6, {
    message: "Name must be at least 6 characters long",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters long",
  }),
  points: z
    .number({
      message: "Points must be a number",
    })
    .positive({
      message: "Points must be a positive number",
    }),
});

const RewardEditModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<z.infer<typeof addSchema>>({
    resolver: zodResolver(addSchema),
  });
  const addRewards: SubmitHandler<z.infer<typeof addSchema>> = (value) => {
    console.log("Form submitted", value);
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
      <DialogTrigger className="cursor-pointer">
        <HiOutlinePencilAlt />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reward Items</DialogTitle>
          <DialogDescription>Add Rewards</DialogDescription>
        </DialogHeader>

        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(addRewards)}
        >
          <div>
            <label htmlFor="rewardname">Reward Name</label>
            <Input type="text" {...register("rewardName")} />
            {errors.rewardName && (
              <span className="text-base text-red-500">
                {errors.rewardName.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Textarea {...register("description")} />
            {errors.description && (
              <span className="text-base text-red-500">
                {errors.description.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="points">Reward Points</label>
            <Input type="number" {...register("points")} />
            {errors.points && (
              <span className="text-base text-red-500">
                {errors.points.message}
              </span>
            )}
          </div>

          <DialogFooter>
            <DialogClose className="rounded-sm bg-secondary px-4 py-1.5 font-semibold">
              Cancel
            </DialogClose>
            <button
              type="submit"
              className="rounded-sm bg-primary px-4 py-1.5 font-semibold text-white"
            >
              Submit
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RewardEditModal;

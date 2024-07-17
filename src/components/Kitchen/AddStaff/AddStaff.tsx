import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FaUserPlus } from "react-icons/fa6";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

const addStaffSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters long",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character",
    ),
});

const AddStaff = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<z.infer<typeof addStaffSchema>>({
    resolver: zodResolver(addStaffSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof addStaffSchema>> = (value) => {
    console.log("Form Submitted", value);
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
      <DialogTrigger className="flex cursor-pointer items-center gap-2">
        <FaUserPlus size={20} />
        Add Staffs
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-0">
          <DialogTitle>Add Staff</DialogTitle>
          <DialogDescription>
            Add a new staff member to your team
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="text-base">
              Name
            </label>
            <Input type="text" {...register("name")} />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="email" className="text-base">
              Email Address
            </label>
            <Input type="email" {...register("email")} />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="password" className="text-base">
              Password
            </label>
            <Input type="password" {...register("password")} />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="rounded-sm bg-primary px-4 py-1.5 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddStaff;

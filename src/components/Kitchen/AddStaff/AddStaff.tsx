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
import { useForm } from "react-hook-form";

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
  const { register } = useForm<z.infer<typeof addStaffSchema>>({
    resolver: zodResolver(addStaffSchema),
  });
  return (
    <Dialog>
      <DialogTrigger className="flex cursor-pointer items-center gap-2">
        <FaUserPlus size={20} />
        Add Staffs
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Staff</DialogTitle>
          <DialogDescription>
            Add a new staff member to your team
          </DialogDescription>
        </DialogHeader>

        <form>
          <div>
            <label htmlFor="name">Name</label>
            <Input type="text" {...register("name")} />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <Input type="email" {...register("email")} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Input type="password" {...register("password")} />
          </div>

          <button type="submit">Submit</button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddStaff;

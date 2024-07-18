import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRegisterNewStaff } from "@/services/queries";
import { ReactEventHandler, useState } from "react";

const addStaffSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters long",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  contact: z.coerce
    .string()
    .min(11, {
      message: "Please enter a valid phone number",
    })
    .max(16, {
      message: "Please enter a valid phone number",
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
  role: z.enum(["ADMIN", "CASHIER", "KITCHEN", "WAITER"]),
});

const AddStaff = () => {
  const { mutate: addNewStaff, isPending } = useRegisterNewStaff();

  const form = useForm<z.infer<typeof addStaffSchema>>({
    resolver: zodResolver(addStaffSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      contact: "",
      role: "CASHIER",
    },
  });

  const onSubmit = (value: z.infer<typeof addStaffSchema>) => {
    addNewStaff(value);
    form.reset();
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          form.clearErrors();
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1">
              <div className="w-full items-center">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-center gap-2">
                      <FormLabel className="flex items-center">Name:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Staff Name"
                          {...field}
                          className="flex w-full items-center justify-center"
                          onKeyDown={(e) => e.stopPropagation()}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full items-center">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-center gap-2">
                      <FormLabel>Email: </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Staff Email"
                          {...field}
                          onKeyDown={(e) => e.stopPropagation()}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full items-center">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-center gap-2">
                      <FormLabel>Password: </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          {...field}
                          type="password"
                          onKeyDown={(e) => e.stopPropagation()}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full items-center">
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field: { ref, ...field } }) => (
                    <FormItem className="flex items-center justify-center gap-2">
                      <FormLabel>Contact: </FormLabel>
                      <FormControl>
                        <PhoneInput
                          {...field}
                          inputProps={{
                            ref,
                            required: true,
                            autoFocus: true,
                          }}
                          country={"ph"}
                          specialLabel="Enter Mobile No"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mb-4 flex w-full items-center">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem className="flex w-full items-center justify-center gap-10">
                      <FormLabel>Role: </FormLabel>
                      <FormControl>
                        <div className="mx-auto w-full">
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex gap-2"
                          >
                            <FormItem>
                              <div className="flex items-center justify-center">
                                <FormControl>
                                  <RadioGroupItem value="CASHIER" />
                                </FormControl>
                                <FormLabel className="ml-2 text-base font-semibold">
                                  Cashier
                                </FormLabel>
                              </div>
                            </FormItem>
                            <FormItem>
                              <div className="flex items-center justify-center">
                                <FormControl>
                                  <RadioGroupItem value="KITCHEN" />
                                </FormControl>
                                <FormLabel className="ml-2 text-base font-semibold">
                                  Kitchen
                                </FormLabel>
                              </div>
                            </FormItem>
                            <FormItem>
                              <div className="flex items-center justify-center">
                                <FormControl>
                                  <RadioGroupItem value="WAITER" />
                                </FormControl>
                                <FormLabel className="ml-2 text-base font-semibold">
                                  Waiter
                                </FormLabel>
                              </div>
                            </FormItem>
                            <FormItem>
                              <div className="flex items-center justify-center">
                                <FormControl>
                                  <RadioGroupItem value="ADMIN" />
                                </FormControl>
                                <FormLabel className="ml-2 text-base font-semibold">
                                  Admin
                                </FormLabel>
                              </div>
                            </FormItem>
                          </RadioGroup>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                Create Account
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddStaff;

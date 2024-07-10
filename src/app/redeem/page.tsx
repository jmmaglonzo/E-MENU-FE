"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import gift from "/public/gifts.png";
import Image from "next/image";
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
});

type FormFields = z.infer<typeof formSchema>;

const RedeemPoints = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };
  return (
    <section className="flex flex-col">
      <div className="relative h-[270px] w-full">
        <Image src={gift} alt="Gift" fill className="object-cover" />
      </div>
      <form
        className="mt-32 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-center text-muted-foreground">
          Enter your email to check your loyalty points balance and redeem
          rewards.
        </p>
        <Input
          type="text"
          placeholder="Enter your email address"
          className="w-full text-center text-base"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-base text-red-500">{errors.email.message}</span>
        )}

        <Link
          href="/redeem/rewards"
          className="inline-block w-full rounded-sm bg-primary py-2 text-center font-semibold text-white"
        >
          Access Reward Points
        </Link>
      </form>
    </section>
  );
};

export default RedeemPoints;

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import gift from "/public/gifts.png";
import Image from "next/image";
import { useSendEmailOTP } from "@/services/queries";
import OTPModal from "@/components/RedeemPoints/OTPModal";
import { useEffect, useState } from "react";

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
    formState: { errors, isValid },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  const { mutate: send, isSuccess } = useSendEmailOTP();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    send(data.email);
  };

  const [isModalOpen, setIsModalOpen] = useState(!isSuccess);

  useEffect(() => {
    if (isSuccess) setIsModalOpen(true);
  }, [isSuccess]);

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

        <Button
          disabled={!isValid}
          className="inline-block w-full rounded-sm bg-primary py-2 text-center font-semibold text-white"
        >
          Access Reward Points
        </Button>
      </form>
      <OTPModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </section>
  );
};

export default RedeemPoints;

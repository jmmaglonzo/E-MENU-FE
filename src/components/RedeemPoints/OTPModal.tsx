"use client";

import React, { useEffect } from "react";
import { Modal, ModalContainer, ModalContent } from "../ui/modal";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Dispatch, SetStateAction } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "../ui/button";

import { MoveLeft } from "lucide-react";
import { deleteCookie } from "cookies-next";
import { useVerifyEmailOTP } from "@/services/queries";

interface OTPModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const FormSchema = z.object({
  code: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

export default function OTPModal({
  isModalOpen,
  setIsModalOpen,
}: OTPModalProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      code: "",
    },
  });

  const { mutate: verify, isSuccess, isPending } = useVerifyEmailOTP();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    verify(Number(data.code));
    if (!isPending && isSuccess) {
      setIsModalOpen(false);
      form.reset();
    }

    if (!isPending && !isSuccess) {
      form.reset();
    }
  }

  function handleCloseModal() {
    deleteCookie("_customer_email");
    form.reset();
    setIsModalOpen(false);
  }

  return (
    <>
      {isModalOpen && (
        <Modal>
          <ModalContainer className="mobile-container relative flex h-1/2 w-full items-center">
            <Button
              onClick={handleCloseModal}
              type="button"
              className="absolute top-6 text-muted-foreground outline-none"
              variant={"ghost"}
            >
              <MoveLeft />
            </Button>
            <ModalContent
              className="flex w-full items-center justify-center"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-3xl font-bold">
                          Verification Code
                        </FormLabel>
                        <FormDescription className="text-base text-muted-foreground">
                          We have sent the verification code to your email
                          address
                        </FormDescription>
                        <FormControl>
                          <div className="flex w-full justify-center">
                            <InputOTP maxLength={4} {...field}>
                              <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSeparator />
                                <InputOTPSlot index={1} />
                                <InputOTPSeparator />
                                <InputOTPSlot index={2} />
                                <InputOTPSeparator />
                                <InputOTPSlot index={3} />
                              </InputOTPGroup>
                            </InputOTP>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  ></FormField>
                  <Button
                    type="submit"
                    className="mt-5 w-full"
                    disabled={isPending}
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            </ModalContent>
          </ModalContainer>
        </Modal>
      )}
    </>
  );
}

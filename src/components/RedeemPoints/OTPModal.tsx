import React from "react";
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
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";

interface OTPModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const FormSchema = z.object({
  code: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

export default function OTPModal({ isModalOpen }: OTPModalProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      code: "",
    },
  });

  function handleSubmit() {}

  return (
    <>
      {isModalOpen && (
        <Modal>
          <ModalContainer className="container flex h-1/2 w-full items-center justify-center p-5">
            <ModalContent
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <Form {...form}>
                <form>
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
                  <Button type="submit" className="mt-5 w-full">
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

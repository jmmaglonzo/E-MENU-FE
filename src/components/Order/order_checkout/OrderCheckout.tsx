"use client";
import React, { useEffect, useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import Image from "next/image";
import EarnRewards from "./EarnRewards";
import OnlinePayment from "/public/online_payment.png";
import CashPayment from "/public/cash_payment.png";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useOrderItem } from "@/services/queries";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/lib/formSchema";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import TotalAmount from "@/utils/orderTotal";
import LoadingButton from "@/components/common/LoadingButton";

const OrderCheckout = () => {
  const [paymentMethod, setPaymentMethod] = useState<"ONLINE" | "CASH">(
    "ONLINE",
  );
  const router = useRouter();
  const { mutate: order, data, isSuccess, isPending } = useOrderItem();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      privacyPolicy: true,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    order({
      loyalty: false,
      paymentMethod,
    });
  };

  useEffect(() => {
    if (isSuccess && data?.data?.attributes?.checkout_url) {
      router.replace(data.data.attributes.checkout_url);
    }
  }, [isSuccess, data, router]);

  const productAmount = TotalAmount();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <section className="mt-6 flex flex-wrap justify-between md:mt-4">
          <div className="mb-3 flex items-center gap-x-2">
            <FaCreditCard className="text-orange-500" />
            <div className="text-[0.7em] font-semibold">Payment Method</div>
          </div>
        </section>

        <RadioGroup
          defaultValue="ONLINE"
          onValueChange={(value) =>
            setPaymentMethod(value as "ONLINE" | "CASH")
          }
        >
          <div className="flex items-center">
            <div className="flex w-full flex-wrap items-center gap-x-2">
              <Image
                src={OnlinePayment}
                alt="online payment"
                width={40}
                height={30}
                style={{ width: "auto", height: "auto" }}
                priority
              />
              <span className="text-[0.7em] font-bold">Online Payment</span>
            </div>
            <RadioGroupItem value="ONLINE" className="justify-end" />
          </div>

          <div className="flex items-center">
            <div className="flex w-full flex-wrap items-center gap-x-2">
              <Image
                src={CashPayment}
                alt="cash payment"
                width={40}
                height={30}
                style={{ width: "auto", height: "auto" }}
                priority
              />
              <span className="text-[0.7em] font-bold">Cash</span>
            </div>
            <RadioGroupItem value="CASH" className="justify-end" />
          </div>
        </RadioGroup>

        <section>
          <div className="p-2">
            <div className="h-0.5 w-full bg-slate-100"></div>
            <div className="mt-5 flex flex-col items-center gap-y-2">
              <span className="text-[0.7em] font-bold">
                Total Amount to Pay
              </span>
              <span className="text-[1.8em] font-bold">
                ₱{productAmount.toFixed(2)}
              </span>

              {isPending ? (
                <LoadingButton />
              ) : (
                <Button
                  type="submit"
                  className="mt-2 w-full rounded-sm bg-primary py-2 text-center text-[0.8em] font-semibold text-white"
                >
                  Place Order
                </Button>
              )}
              <div className="mt-4 h-0.5 w-full bg-slate-100"></div>
            </div>
          </div>
          <EarnRewards />
        </section>

        <footer>
          <div className="flex items-center justify-center leading-3">
            <span className="text-base text-gray-800">
              I hereby give Chef Morgan Restaurant the permission to share my
              customer data with the Restaurant, and if applicable, their
              respective affiliates and subsidiaries, for service improvement
              and/or other related marketing purposes. I can find detailed
              information about the customer data sharing{" "}
              <Link
                href="/terms-and-conditions"
                className="font-bold text-primary"
              >
                here.
              </Link>
            </span>
          </div>

          <FormField
            control={form.control}
            name="privacyPolicy"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormMessage className="text-center text-lg" />
                <div className="mt-4 flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>

                  <FormLabel className="flex items-center gap-1 text-black">
                    By completing this order, I agree to{" "}
                    <Link
                      href={"/terms-and-conditions"}
                      className="text-primary"
                    >
                      all terms and conditions
                    </Link>
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
        </footer>
      </form>
    </Form>
  );
};

export default OrderCheckout;

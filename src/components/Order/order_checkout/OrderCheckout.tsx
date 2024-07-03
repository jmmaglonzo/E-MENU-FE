import Link from "next/link";
import React from "react";
import { FaCreditCard } from "react-icons/fa";
import Image from "next/image";
import TotalAmount from "./TotalAmount";
import EarnRewards from "./EarnRewards";
import FooterText from "./FooterText";

import OnlinePayment from "/public/online_payment.png";
import CashPayment from "/public/cash_payment.png";
  
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; 

const OrderCheckout = () => {
  return (
    <>
      <section className="mt-6 flex flex-wrap justify-between md:mt-4">
        <div className="mb-3 flex items-center gap-x-2">
          <div>
            <FaCreditCard className="text-orange-500" />
          </div>
          <div className="text-[0.7em] font-semibold">Payment Method</div>
        </div>

        <div className="text-[0.7em] font-bold text-orange-400">
          <Link href="#">Edit</Link>
        </div>
      </section>

      <RadioGroup defaultValue="online">
        <div className="flex items-center">
          <div className="flex flex-wrap items-center gap-x-2 w-full">
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
          <RadioGroupItem value="online" className="justify-end"/>
        </div>
        <div className="flex items-center">
          <div className="flex flex-wrap items-center gap-x-2 w-full">
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
          <RadioGroupItem value="cash" className="justify-end"/>
        </div>
      </RadioGroup>

      <section>
        <TotalAmount />
        <EarnRewards />
      </section>

      <footer>
        <FooterText />
      </footer>
    </>
  );
};

export default OrderCheckout;

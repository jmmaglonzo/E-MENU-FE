import Link from "next/link";
import React from "react";
import { FaCreditCard } from "react-icons/fa";
import Image from "next/image";
import TotalAmount from "./TotalAmount";
import EarnRewards from "./EarnRewards";
import FooterText from "./FooterText";
import Gcash from "/public/GCash-Logo.png";
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

      <section className="flex flex-wrap items-center gap-x-2">
        <Image
          src={Gcash}
          alt="icon-menu"
          width={60}
          height={50}
          style={{ width: "auto", height: "auto" }}
          priority
        />
        <span className="text-[0.7em] font-bold">Gcash (Alipay + Partner)</span>
      </section>

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

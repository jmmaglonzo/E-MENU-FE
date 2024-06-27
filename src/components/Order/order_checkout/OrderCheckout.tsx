import Link from "next/link";
import React from "react";
import { FaCreditCard } from "react-icons/fa";
import Image from "next/image";
import TotalAmount from "./TotalAmount";
import EarnRewards from "./EarnRewards";
import FooterText from "./FooterText";
const OrderCheckout = () => {
  return (
    <>
      <main className="container">
        <section className="mt-10 flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div>
              <FaCreditCard className="text-orange-500" />
            </div>
            <div className="text-[0.8em] font-semibold">Payment Method</div>
          </div>
          <div className="text-[0.8em] font-bold text-orange-400">
            <Link href="#">Edit</Link>
          </div>
        </section>

        <section className="flex flex-wrap items-center gap-x-2">
          <Image
            src="/Gcash-Logo.png"
            alt="icon-menu"
            width={60}
            height={50}
            style={{ width: "auto", height: "auto" }}
            priority
          />
          <span className="text-[0.7em] font-bold">
            Gcash (Alipay + Partner)
          </span>
        </section>

        <section>
          <TotalAmount />
          <EarnRewards />
        </section>

        <footer>
          <FooterText />
        </footer>
      </main>
    </>
  );
};

export default OrderCheckout;

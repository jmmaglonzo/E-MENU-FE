"use client";

import { useGetMyLatestOrder } from "@/services/queries";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import QRCode from "react-qr-code";
import Loader from "@/components/common/Loader";
import { MyLatestOrder } from "@/types/myOrder";

const CashCheckout = () => {
  const { data, isSuccess } = useGetMyLatestOrder();
  const myLatestOrder = data as MyLatestOrder;
  return (
    <section className="container mt-4">
      <nav className="flex items-center gap-2">
        <Link href="/checkout">
          <ChevronLeft size={24} />
        </Link>
        <span className="text-xl font-bold">Payment Method</span>
      </nav>

      <div className="mt-4 flex flex-col items-center justify-center gap-2 text-center">
        <span className="font-bold">Cash Payment</span>
        <p className="text-gray-500">
          Please confirm your cash payment to complete the order.
        </p>
      </div>

      {
        isSuccess? 
          <>
            <div className="mt-4 flex flex-col space-y-3">
              <span className="font-bold">Digital Receipt</span>
              <div className="flex items-center justify-between">
                <span>Order #</span>
                <span>{data.orderNo}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Items</span>
                <span>{data.orders.length} items</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Total</span>
                <span>Php {data.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center space-y-8 text-gray-500">
              <div className="flex justify-center">
                <QRCode value="https://example.com" size={300} />
              </div>
              <span>Show this QR code to the cashier</span>
            </div>
            <Link
              href="/"
              className="mt-8 inline-block w-full rounded-md bg-primary py-2 text-center text-white"
            >
              Go back to Home
            </Link>
          </>
          :
          <div className="container flex justify-center mt-64">
              <Loader />
          </div> 
      }
      
    </section>
  );
};

export default CashCheckout;

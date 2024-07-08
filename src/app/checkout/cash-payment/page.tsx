import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import QRCode from "react-qr-code";

const CashCheckout = () => {
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

      <div className="mt-4 flex flex-col space-y-3">
        <span className="font-bold">Digital Receipt</span>
        <div className="flex items-center justify-between">
          <span>Order #</span>
          <span>1234</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Items</span>
          <span>3 items</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Total</span>
          <span>Php 200.00</span>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center space-y-8 text-gray-500">
        <div className="flex justify-center">
          <QRCode value="https://example.com" size={200} />
        </div>
        <span>Show this QR code to the cashier</span>
      </div>
      <Link
        href="/"
        className="mt-16 inline-block w-full rounded-md bg-primary py-2 text-center text-white"
      >
        Confirm Cash Payment
      </Link>
    </section>
  );
};

export default CashCheckout;

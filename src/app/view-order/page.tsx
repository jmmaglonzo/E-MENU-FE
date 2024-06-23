import OrderCards from "@/components/Order/OrderCards";
import TipCard from "@/components/Order/TipCard";
import TipSelector from "@/components/Order/TipSelector";
import TipSummary from "@/components/Order/TipSummary";
import { fakeOrderData } from "@/utils/orderData";
import Link from "next/link";

const ViewOrder = () => {
  return (
    <section className="container">
      <div className="flex h-[340px] flex-col gap-2 overflow-y-scroll no-scrollbar">
        {fakeOrderData.map((items) => (
          <OrderCards key={items.product_id} data={items} />
        ))}
      </div>
      <div className="text-center">
        <Link href="/" className="text-base font-semibold text-primary">
          Add more items
        </Link>
      </div>
      <TipCard />
      <TipSelector />
      <TipSummary />
    </section>
  );
};

export default ViewOrder;

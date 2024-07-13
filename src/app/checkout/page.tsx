import OrderCheckout from "@/components/Order/order_checkout/OrderCheckout";
import OrderNav from "@/components/Order/OrderNav";

const page = () => {
  return (
    <section className="mobile-container">
      <OrderNav />
      <OrderCheckout />
    </section>
  );
};

export default page;

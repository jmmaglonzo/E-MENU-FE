import OrderNav from "../OrderNav";
import OrderCheckout from "./OrderCheckout";

const ViewOrderCheckout = () => {
  return (
    <section>
      <OrderNav />
      <div className="mx-4">
        <OrderCheckout />
      </div>
    </section>
  );
};

export default ViewOrderCheckout;

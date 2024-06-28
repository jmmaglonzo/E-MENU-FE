import OrderNav from "../OrderNav";
import OrderCheckout from "./OrderCheckout";

const ViewOrderCheckout = () => {
  return (
    <section>
      <OrderNav />
      <div className=" h-screen w-screen lg:h-lvh">
        <OrderCheckout />
      </div>
    </section>
  );
};

export default ViewOrderCheckout;

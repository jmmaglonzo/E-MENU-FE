import ViewOrder from "@/components/Order/ViewOrder";
import ViewOrderCheckout from "@/components/Order/ViewOrderCheckout";
import Navbar from "@/components/header/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <header>
        <Navbar />
      </header> */}
      {/* {children} */}
      <ViewOrder />
      {/* <ViewOrderCheckout /> */}
    </>
  );
}

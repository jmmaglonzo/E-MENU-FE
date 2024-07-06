import CardContainer from "@/components/Card/CardContainer";
import { OrderDrawer } from "@/components/Drawer/OrderDrawer";

export default function Home() {
  return (
    <main className="container relative h-dvh overflow-y-scroll pb-16 no-scrollbar">
      <CardContainer />
      <OrderDrawer />
    </main>
  );
}

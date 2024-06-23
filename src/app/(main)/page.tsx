import { OrderDrawer } from "@/components/OrderDrawer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center">
      <OrderDrawer />
    </main>
  );
}

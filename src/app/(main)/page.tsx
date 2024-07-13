"use client";

import CardContainer from "@/components/Card/CardContainer";
import { OrderDrawer } from "@/components/Drawer/OrderDrawer";
import { useGetCartItems } from "@/services/queries";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function Home() {
  const { data } = useGetCartItems();
  const router = useRouter();
  useEffect(() => {
    setCookie("_cart_items", data?.length);
    router.refresh();
  }, [data]);

  return (
    <main className="container relative h-dvh overflow-y-scroll pb-16 no-scrollbar">
      <CardContainer />
      <OrderDrawer />
    </main>
  );
}

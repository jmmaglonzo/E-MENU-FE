"use client";

import Loader from "@/components/common/Loader";
import Navbar from "@/components/header/Navbar";
import { useGetProducts } from "@/services/queries";
import { Suspense } from "react";
import { Toaster } from "sonner";

function NavbarFallback() {
  return <div>Confirming Registration Failed</div>;
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useGetProducts();

  if (isLoading)
    return (
      <div className="mobile-container mt-72 flex justify-center">
        <Loader />
      </div>
    );

  return (
    <>
      <header>
        <Suspense fallback={<NavbarFallback />}>
          <Navbar />
        </Suspense>
      </header>
      <Toaster visibleToasts={1} position="top-center" richColors />
      {children}
    </>
  );
}

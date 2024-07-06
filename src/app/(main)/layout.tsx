import Navbar from "@/components/header/Navbar";
import { Suspense } from "react";
import { Toaster } from "sonner";

function NavbarFallback() {
  return <div>
    Confirming Registration Failed
  </div>
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Suspense fallback={<NavbarFallback/>}>
          <Navbar />
        </Suspense>
      </header>
      {children}
      <Toaster visibleToasts={1} position="top-center" richColors />
    </>
  );
}

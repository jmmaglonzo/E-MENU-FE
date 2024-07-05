import Navbar from "@/components/header/Navbar";
import { Toaster } from "sonner";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {children}
      <Toaster visibleToasts={1} position="top-center" richColors />
    </>
  );
}

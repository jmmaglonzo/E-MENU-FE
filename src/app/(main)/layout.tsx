import ViewOrder from "@/components/Order/ViewOrder";
import Navbar from "@/components/header/Navbar";

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
    </>
  );
}

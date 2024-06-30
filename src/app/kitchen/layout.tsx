import KitchenNav from "@/components/Kitchen/KitchenNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <KitchenNav />
      </header>
      <main className="kitchen-container mx-auto mt-6">{children}</main>
    </>
  );
}

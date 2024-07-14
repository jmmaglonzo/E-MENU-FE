import KitchenNav from "@/components/Kitchen/KitchenNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="my-2">
        <KitchenNav />
      </header>
      <main className="container mx-auto mt-6 flex-1">{children}</main>
    </>
  );
}

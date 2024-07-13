import KitchenNav from "@/components/Kitchen/KitchenNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-h-screen flex-col overflow-hidden">
      <header>
        <KitchenNav />
      </header>
      <main className="hide-scrollbar container mx-auto mt-6 flex-1 overflow-scroll">
        {children}
      </main>
    </div>
  );
}

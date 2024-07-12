import KitchenNav from "@/components/Kitchen/KitchenNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-h-screen flex flex-col overflow-hidden">
      <header>
        <KitchenNav />
      </header>
      <main className="kitchen-container mx-auto mt-6 flex-1 overflow-scroll hide-scrollbar">{children}</main>
    </div>
  );
}

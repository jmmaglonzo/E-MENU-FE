"use client";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <header className="mobile-container relative">
        <div className="flex flex-col items-center justify-between space-y-4 p-0 py-2 text-center">
          <Link
            href={pathname === "/redeem/rewards" ? "/redeem" : "/"}
            className="absolute left-0 top-6"
          >
            <ChevronLeft className="h-7 w-7 text-muted-foreground" />
          </Link>
          <span className="text-2xl font-bold">
            {pathname === "/redeem" ? "Loyalty Points" : "Available Points"}
          </span>
        </div>
      </header>
      <main className="mobile-container">{children}</main>
    </>
  );
}

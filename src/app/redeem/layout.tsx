"use client";
import { getCookie } from "cookies-next";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const cookie = getCookie("_loyalty_session");
  const [session, setSession] = useState<string>();
  let linkRoute = cookie ? "/" : "/redeem";
  const headerText = cookie ? "Available Points" : "Loyalty Points";

  useEffect(() => {
    setSession(cookie);
    router.refresh();
  }, [router, cookie]);

  return (
    <>
      <header className="mobile-container relative" suppressHydrationWarning>
        <div className="flex flex-col items-center justify-between space-y-4 p-0 py-2 text-center">
          <Link href={linkRoute} className="absolute left-0 top-6">
            <ChevronLeft className="h-7 w-7 text-muted-foreground" />
          </Link>
          <span className="text-2xl font-bold">{headerText}</span>
        </div>
      </header>
      <main className="mobile-container" suppressHydrationWarning>
        {children}
      </main>
    </>
  );
}

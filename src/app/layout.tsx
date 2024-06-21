import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";

import SearchBox from "@/components/ui/searchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Menu",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
 <SearchBox/>
        {children}
      </body>
    </html>
  );
}

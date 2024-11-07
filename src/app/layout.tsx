import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Subfooter } from "@/components/Subfooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Canyfix",
  description: "Mobile Repairing. Iphone | Samsung | Oneplus | Oppo | Vivo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Header/>
      {children}
      <Footer/>
      <Subfooter/>
      </body>
    </html>
  );
}

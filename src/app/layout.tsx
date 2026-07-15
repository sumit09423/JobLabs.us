import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joblabs",
  description: "Find your next role with Joblabs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-white text-[#1d1d1f] antialiased">
        <Navbar />
        <div className="flex flex-1 flex-col">{children}</div>
        <FooterCTA />
        <Footer />
      </body>
    </html>
  );
}

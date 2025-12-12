import type { Metadata } from "next";
import { poppins, inter } from "@/components/ui/font";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-background`}
      >
        <main className="w-screen  bg-background flex flex-col items-center justify-center  text-white relative">
          <Navbar />

          {children}
        </main>
      </body>
    </html>
  );
}

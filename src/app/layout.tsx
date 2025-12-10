import type { Metadata } from "next";
import { poppins, inter } from "@/components/ui/font";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}

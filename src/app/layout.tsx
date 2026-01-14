import { AuthProvider } from "@/components/auth/authProvider";
import Navbar from "@/components/navbar/navbar";
import { inter, poppins } from "@/components/ui/font";
import PageTransition from "@/components/ui/pageTransition";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-background overflow-x-hidden`}
      >
        <AuthProvider>
          <main className="w-full  bg-background flex flex-col items-center justify-center  text-white relative">
            <Navbar />
            <PageTransition>{children}</PageTransition>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { AuthProvider } from "@/components/auth/authProvider";
import Navbar from "@/components/navbar/navbar";
import { inter, poppins } from "@/components/ui/font";
import PageTransition from "@/components/ui/pageTransition";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HelloAnime - Discover Your Next Favorite Anime",
    template: "%s | HelloAnime",
  },
  description:
    "Explore top-rated anime, check out what's airing now, and discover new series with HelloAnime. Your ultimate guide to the world of anime.",
  keywords: [
    "anime",
    "manga",
    "jikan",
    "myanimelist",
    "tracking",
    "discovery",
    "helloanime",
    "streaming",
    "reviews",
  ],
  authors: [{ name: "Kacper Bartlomiejczak" }],
  creator: "Kacper Bartlomiejczak",
  openGraph: {
    title: "HelloAnime - Discover Your Next Favorite Anime",
    description:
      "Explore top-rated anime, check out what's airing now, and discover new series with HelloAnime.",
    url: "https://helloanime.vercel.app",
    siteName: "HelloAnime",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HelloAnime - Discover Your Next Favorite Anime",
    description:
      "Explore top-rated anime, check out what's airing now, and discover new series with HelloAnime.",
    creator: "@Bartlomiejczak",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

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

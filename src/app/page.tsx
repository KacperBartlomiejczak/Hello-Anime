import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import { getTopAnime } from "@/hooks/getTopAnime";
import { main } from "framer-motion/client";

export default async function Home() {
  const data = await getTopAnime();

  
  return (
    <main>
      <header className="w-screen  bg-background flex items-center justify-center  text-white relative">
        <Navbar />
        <Hero animes={data.data.slice(0, 5)} />
      </header>
    </main>
  );
}

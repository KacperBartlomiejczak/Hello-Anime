import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import { getTopAnime } from "@/hooks/getTopAnime";
import CardSlider from "@/components/cardSlider/cardSlider";
import AnimeNews from "@/components/animeNews/animeNews";

export default async function Home() {
  const dataAiring = await getTopAnime(true);
  const data = await getTopAnime(false);

  return (
    <>
      <header className="w-screen  bg-background flex items-center justify-center text-white relative">
        <Hero animes={dataAiring.data.slice(0, 5)} />
      </header>
      <CardSlider animes={data.data.slice(0, 10)} />
      <AnimeNews />
    </>
  );
}

import Hero from "@/components/hero/hero";

import { getTopAnime } from "@/hooks/getTopAnime";
import { Suspense } from "react";
import CardSliderServer from "@/components/cardSlider/cardSliderServer";
import CardSliderSkeleton from "@/components/cardSlider/cardSliderSkieleton";
import AnimeNews from "@/components/animeNews/animeNews";

import HeroSkeleton from "@/components/hero/heroSkeleton";

export default async function Home() {
  const topData = await getTopAnime(false);

  return (
    <>
      <header className="w-screen  bg-background flex items-center justify-center text-white relative">
        <Suspense fallback={<HeroSkeleton />}>
          <Hero animes={topData?.data.slice(0, 5)} />
        </Suspense>
      </header>
      <Suspense fallback={<CardSliderSkeleton />}>
        <CardSliderServer />
      </Suspense>
      <AnimeNews />
    </>
  );
}

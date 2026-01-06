export const dynamic = "force-dynamic";
import Hero from "@/components/hero/hero";

import { getTopAnime } from "@/hooks/getTopAnime";
import { Suspense } from "react";
import HeroServer from "@/components/hero/heroServer";
import CardSliderServer from "@/components/cardSlider/cardSliderServer";
import CardSliderSkeleton from "@/components/cardSlider/cardSliderSkieleton";
import AnimeNews from "@/components/animeNews/animeNews";

import HeroSkeleton from "@/components/hero/heroSkeleton";

import AnimeCalender from "@/components/animeCalender/animeCalender";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <header className="w-screen  bg-background flex items-center justify-center text-white relative">
        <Suspense fallback={<HeroSkeleton />}>
          <HeroServer />
        </Suspense>
      </header>
      <Suspense fallback={<CardSliderSkeleton />}>
        <CardSliderServer />
      </Suspense>
      <AnimeNews />
      <AnimeCalender />
      <Footer />
    </>
  );
}

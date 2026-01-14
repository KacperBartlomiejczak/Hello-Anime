export const dynamic = "force-dynamic";

import AnimeNews from "@/components/animeNews/animeNews";
import CardSliderServer from "@/components/cardSlider/cardSliderServer";
import CardSliderSkeleton from "@/components/cardSlider/cardSliderSkieleton";
import HeroServer from "@/components/hero/heroServer";
import { Suspense } from "react";

import HeroSkeleton from "@/components/hero/heroSkeleton";

import AnimeCalender from "@/components/animeCalender/animeCalender";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <header className="w-full  bg-background flex items-center justify-center text-white relative">
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

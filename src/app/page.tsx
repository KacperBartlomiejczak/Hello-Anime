export const dynamic = "force-dynamic";

import AnimeNews from "@/components/animeNews/animeNews";
import CardSliderServer from "@/components/cardSlider/cardSliderServer";
import HeroServer from "@/components/hero/heroServer";
import AnimeCalender from "@/components/animeCalender/animeCalender";
import Footer from "@/components/footer/footer";
import HomeLoading from "@/components/home/HomeLoading";
import { Suspense } from "react";

async function HomeContent() {
  return (
    <>
      <header className="w-full  bg-background flex items-center justify-center text-white relative">
        <HeroServer />
      </header>
      <CardSliderServer />
      <AnimeNews />
      <AnimeCalender />
      <Footer />
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<HomeLoading />}>
      <HomeContent />
    </Suspense>
  );
}

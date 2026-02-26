export const revalidate = 3600;

import AnimeNews from "@/components/animeNews/animeNews";
import CardSliderServer from "@/components/cardSlider/cardSliderServer";
import HeroServer from "@/components/hero/heroServer";
import AnimeCalender from "@/components/animeCalender/animeCalender";
import Footer from "@/components/footer/footer";
import HomeLoading from "@/components/home/HomeLoading";
import NewsListSkeleton from "@/components/animeNews/newsListSkeleton";

import { Suspense } from "react";
import HeroSkeleton from "@/components/hero/heroSkeleton";
import AnimeCalenderServer from "@/components/animeCalender/animeCalenderServer";

async function HomeContent() {
  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <header className="w-full  bg-background flex items-center justify-center text-white relative">
          <HeroServer />
        </header>
      </Suspense>
      <CardSliderServer />
      <Suspense fallback={<NewsListSkeleton />}>
        <AnimeNews />
      </Suspense>
      <AnimeCalenderServer />
      <Footer />
    </>
  );
}

export default function Home() {
  return <HomeContent />;
}

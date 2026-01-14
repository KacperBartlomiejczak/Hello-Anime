"use client";

import { Anime } from "@/types/anime";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";

import HeroDots from "./heroDots";
import HeroChevrons from "./heroChevrons";
import HeroImage from "./heroImage";
import HeroSkeleton from "./heroSkeleton";

interface HeroProps {
  animes: Anime[];
}

export default function Hero({ animes }: HeroProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dotHandler = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  const slideRightAnimeHandler = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const slideLeftAnimeHandler = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  if (!animes || animes.length === 0) {
    return <HeroSkeleton />;
  }

  return (
    <section className="relative w-full h-screen md:h-screen group">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {animes.map((anime) => (
          <SwiperSlide key={anime.mal_id}>
            <HeroImage anime={anime} />
          </SwiperSlide>
        ))}
      </Swiper>

      <HeroChevrons
        onLeftSlide={slideLeftAnimeHandler}
        onRightSlide={slideRightAnimeHandler}
      />

      <HeroDots
        currentIndex={currentIndex}
        onDot={dotHandler}
        animes={animes}
      />
    </section>
  );
}

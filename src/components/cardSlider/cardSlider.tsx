"use client";

import { Anime } from "@/types/anime";
import Title from "../ui/title";

import Card from "./card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

import Section from "../ui/section";

interface CardSliderProps {
  animes: Anime[];
}

export default function CardSlider({ animes }: CardSliderProps) {
  return (
    <Section>
      <Title>Top Anime</Title>
      <div className="w-full flex items-center justify-center p-2 gap-2">
        <Swiper
          modules={[FreeMode]}
          freeMode={true}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={"auto"}
          className="w-full flex items-center justify-center gap-4"
          breakpoints={{
            640: { spaceBetween: 20 },
            1020: { spaceBetween: 30 },
          }}
        >
          {animes.map((anime) => {
            return (
              <SwiperSlide key={anime.mal_id} className="w-auto!">
                <Card {...anime} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Section>
  );
}

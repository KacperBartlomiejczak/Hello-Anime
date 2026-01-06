"use client";

import { Anime } from "@/types/anime";
import Title from "../ui/title";

import Card from "../ui/card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

import Section from "../ui/section";
import { ReactNode } from "react";
import CardPlaceholder from "./cardPlaceholder";

interface CardSliderProps {
  animes: Anime[];
  title: string;
  children?: ReactNode;
  isLoading?: boolean;
}

export default function CardSlider({
  animes,
  title,
  children,
  isLoading,
}: CardSliderProps) {
  const uniqueAnimes = animes.filter(
    (anime, index, self) =>
      index === self.findIndex((t) => t.mal_id === anime.mal_id)
  );

  return (
    <Section>
      <Title>{title}</Title>
      {children}
      <div className="w-full flex items-center justify-center p-2 gap-2">
        <Swiper
          modules={[FreeMode]}
          freeMode={true}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={"auto"}
          className="w-full flex items-center justify-center gap-4 py-4"
          breakpoints={{
            640: { spaceBetween: 20 },
            1020: { spaceBetween: 30 },
          }}
        >
          {isLoading
            ? Array.from({ length: 5 }).map((_, index) => (
                <SwiperSlide key={`skeleton-${index}`} className="w-auto!">
                  <CardPlaceholder />
                </SwiperSlide>
              ))
            : uniqueAnimes.map((anime) => {
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

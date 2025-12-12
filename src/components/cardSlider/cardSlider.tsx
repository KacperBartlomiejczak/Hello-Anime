"use client";

import { Anime } from "@/types/anime";
import Title from "../ui/title";

import Card from "./card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

interface CardSliderProps {
  animes: Anime[];
}

export default function CardSlider({ animes }: CardSliderProps) {
  return (
    <section className="bg-background p-4 w-full">
      <div className="relative container gap-4 mx-auto flex flex-col font-poppins font-bold text-xl p-4 md:text-2xl">
        <Title title="Top Anime" />
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
      </div>

      {/* Container for cards */}
    </section>
  );
}

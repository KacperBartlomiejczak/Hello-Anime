"use client";

import { Anime } from "@/types/anime";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

export default function AnimeSelectionNews({
  data,
  onClick,
  activeAnime,
}: {
  data: Anime[];
  onClick: (animeId: number) => void;
  activeAnime: number;
}) {
  return (
    <Swiper
      modules={[FreeMode]}
      freeMode={true}
      grabCursor={true}
      spaceBetween={20}
      slidesPerView={1.3}
      className="w-full flex"
      breakpoints={{
        640: { spaceBetween: 20, slidesPerView: 2.5 },
        1020: { spaceBetween: 30, slidesPerView: 3.6 },
        1200: { spaceBetween: 20, slidesPerView: 4.5 },
        1400: { spaceBetween: 10, slidesPerView: 6 },
      }}
    >
      {data.map((anime) => (
        <SwiperSlide key={anime.mal_id}>
          <div>
            <button
              onClick={() => onClick(anime.mal_id)}
              className={`flex items-center justify-center p-4 rounded-lg w-50 h-18 overflow-hidden hover:bg-brand transition-colors duration-300 ${activeAnime === anime.mal_id ? "bg-brand" : "bg-secondary-background"} cursor-pointer`}
            >
              <p className="line-clamp-2">{anime.title}</p>
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

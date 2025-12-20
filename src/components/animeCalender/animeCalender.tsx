"use client";

import { Day, getAnimeAiring } from "@/hooks/getAnimeAiring";
import { useEffect, useState } from "react";
import Title from "../ui/title";
import { Anime } from "@/types/anime";
import Card from "../ui/card";
import Section from "../ui/section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AnimeCalender() {
  const [day, setDay] = useState<Day>("monday");
  const [animeAiring, setAnimeAiring] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAiringAnime = async () => {
      setLoading(true);
      const data = await getAnimeAiring(day);
      setAnimeAiring(data);
      setLoading(false);
    };

    fetchAiringAnime();
  }, [day]);

  return (
    <Section>
      <Title>Anime Scheduled</Title>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container mx-auto relative px-8">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-calender",
              prevEl: ".swiper-button-prev-calender",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },

              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {animeAiring.map((anime) => (
              <SwiperSlide key={anime.mal_id} className="flex justify-center">
                <Card {...anime} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev-calender absolute top-1/2 -translate-y-1/2 left-0 z-10 p-2 rounded-full bg-black/50 cursor-pointer">
            <ChevronLeft />
          </div>
          <div className="swiper-button-next-calender absolute top-1/2 -translate-y-1/2 right-0 z-10 p-2 rounded-full bg-black/50 cursor-pointer">
            <ChevronRight />
          </div>
        </div>
      )}
    </Section>
  );
}

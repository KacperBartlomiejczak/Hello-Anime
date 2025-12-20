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
import { daysOptions } from "@/hooks/getAnimeAiring";
import { cn } from "@/lib/utils";

import CardPlaceholder from "../cardSlider/cardPlaceholder";
import AnimeCalenderSwiper from "./animeCalenderSwiper";
import AnimeCalenderButtons from "./animeCalenderButtons";

export default function AnimeCalender() {
  const [day, setDay] = useState<Day>("monday");
  const [animeAiring, setAnimeAiring] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);

  const changeDayHandler = (dayChanger: Day) => {
    if (day === dayChanger) return;
    setDay(dayChanger);
  };

  useEffect(() => {
    const fetchAiringAnime = async () => {
      setLoading(true);
      setAnimeAiring([]);
      const data = await getAnimeAiring(day);
      setAnimeAiring(data);
      setLoading(false);
    };

    fetchAiringAnime();
  }, [day]);

  return (
    <Section>
      <Title>Anime Scheduled</Title>
      <div className="container mx-auto relative ">
        <AnimeCalenderButtons
          day={day}
          daysOption={daysOptions}
          onDayChange={changeDayHandler}
        />
        <AnimeCalenderSwiper>
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <SwiperSlide
                  key={`skeleton-${index}`}
                  className="flex justify-center items-center"
                >
                  <CardPlaceholder />
                </SwiperSlide>
              ))
            : animeAiring.map((anime) => (
                <SwiperSlide key={anime.mal_id} className="flex justify-center">
                  <Card {...anime} />
                </SwiperSlide>
              ))}
        </AnimeCalenderSwiper>
        <div className="swiper-button-prev-calender absolute top-1/2 -translate-y-1/2 left-0 z-10 p-2 rounded-full bg-black/50 cursor-pointer">
          <ChevronLeft />
        </div>
        <div className="swiper-button-next-calender absolute top-1/2 -translate-y-1/2 right-0 z-10 p-2 rounded-full bg-black/50 cursor-pointer">
          <ChevronRight />
        </div>
      </div>
    </Section>
  );
}

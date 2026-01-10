"use client";

import { Anime } from "@/types/anime";
import Title from "../ui/title";
import Card from "../ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import Section from "../ui/section";
import { ReactNode, useState, useEffect } from "react";
import CardPlaceholder from "./cardPlaceholder";
import { getTopAnimeAction } from "@/actions/anime";
import { AnimeCategory } from "@/hooks/getTopAnime";
import { ChevronDown } from "lucide-react";

interface CardSliderProps {
  animes: Anime[];
  title: string;
  children?: ReactNode;
  isLoading?: boolean;
  hideDropdown?: boolean;
}

export default function CardSlider({
  animes: initialAnimes,
  title,
  children,
  isLoading: initialLoading,
  hideDropdown,
}: CardSliderProps) {
  const [animes, setAnimes] = useState(initialAnimes);
  const [selectedFilter, setSelectedFilter] =
    useState<AnimeCategory>("upcoming");
  const [isLoading, setIsLoading] = useState(initialLoading || false);

  // Sync internal state with props when parent updates them
  useEffect(() => {
    setAnimes(initialAnimes);
  }, [initialAnimes]);

  useEffect(() => {
    if (initialLoading !== undefined) {
      setIsLoading(initialLoading);
    }
  }, [initialLoading]);

  const handleFilterChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newFilter = e.target.value as AnimeCategory;
    setSelectedFilter(newFilter);
    setIsLoading(true);
    try {
      const result = await getTopAnimeAction(newFilter);
      if (result && result.data) {
        setAnimes(result.data);
      }
    } catch {
      console.error("Error while filtering");
    } finally {
      setIsLoading(false);
    }
  };

  const getTitle = () => {
    switch (selectedFilter) {
      case "airing":
        return "Airing Anime";
      case "bypopularity":
        return "Popular Anime";
      default:
        return title; // Default to the passed prop ("Upcoming Anime")
    }
  };

  const uniqueAnimes = animes.filter(
    (anime, index, self) =>
      index === self.findIndex((t) => t.mal_id === anime.mal_id)
  );

  return (
    <Section>
      <div className="flex items-center gap-4 mb-4">
        <Title>{getTitle()}</Title>
        {!hideDropdown && (
          <div className="relative">
            <select
              value={selectedFilter}
              onChange={handleFilterChange}
              className="appearance-none bg-secondary/50 text-white px-4 py-1 pr-8 rounded-lg cursor-pointer hover:bg-secondary/70 transition-colors outline-hidden border border-white/10 text-sm font-medium"
            >
              <option value="upcoming">Upcoming</option>
              <option value="airing">Airing</option>
              <option value="bypopularity">Popular</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-white/50" />
          </div>
        )}
      </div>
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
          <AnimatePresence mode="wait">
            {isLoading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <SwiperSlide key={`skeleton-${index}`} className="w-auto!">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardPlaceholder />
                    </motion.div>
                  </SwiperSlide>
                ))
              : uniqueAnimes.map((anime, index) => {
                  return (
                    <SwiperSlide key={anime.mal_id} className="w-auto!">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <Card {...anime} />
                      </motion.div>
                    </SwiperSlide>
                  );
                })}
          </AnimatePresence>
        </Swiper>
      </div>
    </Section>
  );
}

"use client";

import { Anime } from "@/types/anime";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { useEffect, useState } from "react";
import { News } from "@/types/news";
import { getAnimeNews } from "@/hooks/getAnimeNews";

import Image from "next/image";
import Link from "next/link";
import AnimeSelectionNews from "./animeSelectionNews";
import { motion, AnimatePresence } from "framer-motion";
import AnimeNewsSekeleton from "./animeNewsSkeleton";

export default function AnimeNewsSlider({
  data,
  news,
}: {
  data: Anime[];
  news: News[];
}) {
  const [activeAnime, setActiveAnime] = useState<number>(data[0].mal_id);
  const [actualNews, setActualNews] = useState(news);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const clickHandler = (animeId: number) => {
    if (activeAnime === animeId) {
      return;
    }
    setActiveAnime(animeId);
  };

  useEffect(() => {
    const getAnime = async () => {
      setIsLoading(true);
      try {
        const news = await getAnimeNews(activeAnime);
        setActualNews(news);
      } finally {
        setIsLoading(false);
      }
    };

    getAnime();
  }, [activeAnime]);

  let content = <AnimeNewsSekeleton />;
  if (isLoading) {
    content = <AnimeNewsSekeleton />;
  }
  if (!isLoading && actualNews.length > 0) {
    content = (
      <>
        {actualNews.length > 0 ? (
          <Swiper
            modules={[FreeMode]}
            freeMode={true}
            grabCursor={true}
            spaceBetween={30}
            slidesPerView={1.2}
            className="w-full flex mt-10"
            breakpoints={{
              640: { spaceBetween: 20, slidesPerView: 2.5 },
              1020: { spaceBetween: 30, slidesPerView: 3.6 },
              1200: { spaceBetween: 20, slidesPerView: 4.5 },
              1400: { spaceBetween: 25, slidesPerView: 5.6 },
            }}
          >
            {actualNews.map((anime) => (
              <SwiperSlide key={anime.mal_id}>
                <Link
                  href={anime.url}
                  target="_blank"
                  className="flex flex-col items-center group"
                >
                  <div className="relative w-60 aspect-2/3 mb-2 overflow-hidden rounded-lg">
                    <Image
                      src={anime.images.jpg.image_url}
                      fill
                      alt={anime.title}
                      className="rounded-lg object-cover group-hover:scale-102 transition-transform"
                      sizes="240px"
                      loading="lazy"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJhAPk7trinQAAAABJRU5ErkJggg=="
                    />
                    <div className="absolute w-full h-full rounded-lg bg-black/30 group-hover:scale-102 transition-transform"></div>
                  </div>
                  <h3 className="text-center line-clamp-2 group-hover:text-brand transition-colors">
                    {anime.title}
                  </h3>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <AnimeNewsSekeleton />
        )}
      </>
    );
  }
  if (!isLoading && actualNews.length === 0) {
    content = (
      <>
        <div className="min-h-[450px] flex items-center justify-center mt-10">
          <p>There is no news for this Anime</p>
        </div>
      </>
    );
  }

  return (
    <>
      <AnimeSelectionNews
        data={data}
        onClick={clickHandler}
        activeAnime={activeAnime}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeAnime}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="max-h-[450px] min-h-[450px]"
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

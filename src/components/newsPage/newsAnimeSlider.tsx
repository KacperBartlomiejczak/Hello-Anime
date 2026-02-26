import { Anime } from "@/types/anime";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode } from "swiper/modules";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NewsAnimeSliderProps {
  animes: Anime[];
  onChangeNews: (index: number) => void;
  currentActive: number;
}

export default function NewsAnimeSlider({
  animes,
  onChangeNews,
  currentActive,
}: NewsAnimeSliderProps) {
  const classesHeading = `px-5 text-center text-xs md:text-sm lg:text-base md:text-sm lg:text-base  transition-colors duration-30 line-clamp-2`;

  return (
    <Swiper
      modules={[FreeMode]}
      freeMode={true}
      grabCursor={true}
      spaceBetween={10}
      slidesPerView={2}
      slidesOffsetBefore={16}
      slidesOffsetAfter={16}
      breakpoints={{
        640: { spaceBetween: 10, slidesPerView: 3 },
        1020: { spaceBetween: 30, slidesPerView: 4 },
        1440: { spaceBetween: 50, slidesPerView: 6 },
      }}
    >
      {animes.map((anime, index) => (
        <SwiperSlide key={anime.mal_id} className="mt-10">
          <button
            onClick={() => onChangeNews(index)}
            className={cn(
              "flex flex-col items-center gap-4 h-[300px] md:h-[400px] group w-full max-w-[150px] md:max-w-[200px] mx-auto",
            )}
            aria-label={`Read news about ${anime.title}`}
          >
            <div className="relative w-full h-2/3 rounded-xl flex justify-center items-center">
              {anime.mal_id === currentActive && (
                <motion.div
                  layoutId="active-glow"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    boxShadow:
                      "0px 0px 15px 0px #ff2e63, 0px 0px 30px 5px rgba(255, 46, 99, 0.5)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
              <motion.div
                animate={{ scale: anime.mal_id === currentActive ? 1.05 : 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative w-full h-full rounded-xl overflow-hidden z-10"
              >
                <Image
                  src={anime.images.webp.image_url}
                  alt={anime.title}
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
              </motion.div>
            </div>

            {anime.mal_id === currentActive ? (
              <motion.h3 className={cn(classesHeading, "text-brand")}>
                {anime.title}
              </motion.h3>
            ) : (
              <motion.h3
                className={cn(classesHeading, "group-hover:text-brand")}
              >
                {anime.title}
              </motion.h3>
            )}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

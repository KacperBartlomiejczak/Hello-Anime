"use client"; // Jeśli będziesz dodawać obsługę kliknięć

import { Anime } from "@/types/anime";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Star, ChevronLeft, ChevronRight, Play } from "lucide-react"; // Dodałem ikony
import { useEffect, useState } from "react";
import HeroContent from "./heroContent";
import { AnimatePresence, motion } from "framer-motion";
import HeroDots from "./heroDots";
import HeroChevrons from "./heroChevrons";

interface HeroProps {
  animes: Anime[];
}

export default function Hero({ animes }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const anime = animes?.[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex === animes.length - 1 ? 0 : prevIndex + 1;
      });
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex, animes.length]);

  const dotHandler = (index: number) => {
    setCurrentIndex(index);
  };

  const slideRightAnimeHandler = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === animes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const slideLeftAnimeHandler = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? animes.length - 1 : prevIndex + -1
    );
  };
  return (
    <section className="relative w-screen h-screen md:h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={anime.mal_id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={anime.images.webp.large_image_url}
            alt={anime.title}
            className="object-cover object-center "
            fill
            priority
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-background/90 lg:bg-linear-to-r lg:from-[#0f172a] lg:via-[#0f172a]/60 lg:to-transparent z-0"></div>
          <HeroContent anime={anime} />
        </motion.div>
      </AnimatePresence>

      <HeroChevrons
        onLeftSlide={slideLeftAnimeHandler}
        onRightSlide={slideRightAnimeHandler}
      />

      <HeroDots currentIndex={currentIndex} onDot={dotHandler} />
    </section>
  );
}

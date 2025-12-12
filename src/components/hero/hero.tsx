"use client";

import { Anime } from "@/types/anime";

import { useEffect, useState } from "react";

import HeroDots from "./heroDots";
import HeroChevrons from "./heroChevrons";
import HeroImage from "./heroImage";

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
      <HeroImage anime={anime} />

      <HeroChevrons
        onLeftSlide={slideLeftAnimeHandler}
        onRightSlide={slideRightAnimeHandler}
      />

      <HeroDots currentIndex={currentIndex} onDot={dotHandler} />
    </section>
  );
}

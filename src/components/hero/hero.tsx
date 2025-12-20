"use client";

import { Anime } from "@/types/anime";

import { useEffect, useState } from "react";

import HeroDots from "./heroDots";
import HeroChevrons from "./heroChevrons";
import HeroImage from "./heroImage";
import HeroSkeleton from "./heroSkeleton";

interface HeroProps {
  animes: Anime[];
}

export default function Hero({ animes }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const anime = animes?.[currentIndex];

  useEffect(() => {
    if (!animes || animes.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex === animes.length - 1 ? 0 : prevIndex + 1;
      });
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex, animes]);

  const dotHandler = (index: number) => {
    setCurrentIndex(index);
  };

  const slideRightAnimeHandler = () => {
    if (!animes || animes.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === animes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const slideLeftAnimeHandler = () => {
    if (!animes || animes.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? animes.length - 1 : prevIndex + -1
    );
  };

  if (!animes || animes.length === 0) {
    return <HeroSkeleton />;
  }
  return (
    <section className="relative w-screen h-screen md:h-screen">
      <HeroImage anime={anime} />

      <HeroChevrons
        onLeftSlide={slideLeftAnimeHandler}
        onRightSlide={slideRightAnimeHandler}
      />

      <HeroDots currentIndex={currentIndex} onDot={dotHandler} animes={animes} />
    </section>
  );
}

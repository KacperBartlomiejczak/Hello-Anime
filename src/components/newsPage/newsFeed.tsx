"use client";
import { Anime } from "@/types/anime";
import { useState } from "react";
import NewsAnimeSlider from "./newsAnimeSlider";


interface NewsFeedProps {
  animes: Anime[];
}

export default function NewsFeed({ animes }: NewsFeedProps) {
  const [currentActive, setCurrentActive] = useState(animes[0].mal_id);

  const handleNewsChange = (index: number) => {
    setCurrentActive(animes[index].mal_id);
  };

  let selectedAnime = animes.find((anime) => anime.mal_id === currentActive);

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center gap-4">
        <NewsAnimeSlider
          animes={animes}
          onChangeNews={handleNewsChange}
          currentActive={currentActive}
        />
      </div>

      <h3 className="font-poppins font-bold">
        News for <span className="text-brand">{selectedAnime?.title}</span>
      </h3>
    </div>
  );
}

"use client";
import { Anime } from "@/types/anime";
import { useState } from "react";
import NewsAnimeSlider from "./newsAnimeSlider";
import { AnimeNewsItem } from "@/hooks/getAnimeNews";
import MainNews from "../animeNews/mainNews";

interface NewsFeedProps {
  animes: Anime[];
  preloadedNews: Record<number, AnimeNewsItem[]>;
}

export default function NewsFeed({ animes, preloadedNews }: NewsFeedProps) {
  const [currentActive, setCurrentActive] = useState(animes[0].mal_id);

  const handleNewsChange = (index: number) => {
    setCurrentActive(animes[index].mal_id);
  };

  const selectedAnime = animes.find((anime) => anime.mal_id === currentActive);
  const news = preloadedNews[currentActive] || [];

  if (news.length === 0) {
    return (
      <div className="w-full flex flex-col gap-8">
        <div className="w-full max-w-full items-center justify-center gap-4">
          <NewsAnimeSlider
            animes={animes}
            onChangeNews={handleNewsChange}
            currentActive={currentActive}
          />
        </div>

        <div className="flex flex-col gap-6 px-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-2">
            <h3 className="font-poppins font-bold text-2xl">
              News for{" "}
              <span className="text-brand">{selectedAnime?.title}</span>
            </h3>
          </div>

          <div className="w-full min-h-[300px]">
            <p>There is no news for this anime</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full max-h-1/2 min-h-0 max-w-full ">
        <NewsAnimeSlider
          animes={animes}
          onChangeNews={handleNewsChange}
          currentActive={currentActive}
        />
      </div>

      <div className="flex flex-col gap-6 px-4 md:px-8 lg:px-12">
        <div className="flex items-center gap-2">
          <h3 className="font-poppins font-bold text-2xl">
            News for <span className="text-brand">{selectedAnime?.title}</span>
          </h3>
        </div>

        <div className="w-full min-h-[300px]">
          {news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item) => (
                <MainNews
                  key={item.mal_id + item.title}
                  news={item}
                  className="w-full xl:w-full"
                />
              ))}
            </div>
          ) : (
            <div className="w-full h-[200px] flex items-center justify-center text-white/50">
              No news found for this anime.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

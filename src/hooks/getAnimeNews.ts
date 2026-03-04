import { jikanRateLimiter } from "@/lib/jikanRateLimiter";
import { Anime } from "@/types/anime";
import { News } from "@/types/news";

import { unstable_cache } from "next/cache";

export interface AnimeNewsItem {
  mal_id: number;
  url: string;
  title: string;
  date: string;
  author_username: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  forum_url: string;
  excerpt: string;
}



export const fetchAnimeNews = async (id: string | number) => {
  const baseUrl = "https://api.jikan.moe/v4/anime";

  try {
    const response = await jikanRateLimiter.schedule(() =>
      fetch(`${baseUrl}/${id}/news`),
    );
    if (response.status === 429) {
      console.warn("⚠️ Limit API osiągnięty! Używam danych testowych.");
      return { data: [] };
    }

    if (!response.ok) {
      throw new Error(
        `Error just happend and couldnt get anime news ${response.status}`,
      );
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.log("Couldnt get anime news", err);
    return { data: [] };
  }
};

export const getAnimeNews = unstable_cache(
  async (id: string | number) => fetchAnimeNews(id),
  ["anime-news-cache-token"],
  { revalidate: 3600, tags: ["anime-news"] },
);

export async function getMixedAnimeNews(data: Anime[]) {
  try {
    const topAnime = data;

    if (!topAnime || !topAnime.length) return [];

    const top7 = topAnime.slice(0, 7);

    // Fetch news sequentially to respect rate limit (3 requests/second)
    const newsResults = [];
    for (const anime of top7) {
      const news = await getAnimeNews(anime.mal_id);
      newsResults.push(news);
    }

    const allNews = newsResults.flatMap((news) =>
      news && news.data ? news.data : [],
    );

    const sortedNews = allNews.sort(
      (a: News, b: News) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    return sortedNews;
  } catch (err) {
    console.error("Error with aggragate news", err);
    return [];
  }
}

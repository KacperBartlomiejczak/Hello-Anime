import { jikanRateLimiter } from "@/lib/jikanRateLimiter";
import { Anime } from "@/types/anime";
import { News } from "@/types/news";

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

const FAKE_NEWS_RESPONSE: { data: AnimeNewsItem[] } = {
  data: [
    {
      mal_id: 1,
      url: "https://myanimelist.net/news/1",
      title: "To jest testowy news nr 1",
      date: "2025-10-15T10:00:00+00:00", // Data w przyszłości, żeby był pierwszy
      author_username: "Bartek",
      images: {
        jpg: {
          image_url:
            "https://cdn.myanimelist.net/s/common/uploaded_files/1765556312-11fff2d4eec923893ce8dd25284bea0d.jpeg",
        },
      },
      forum_url: "#",
      excerpt:
        "To jest przykładowy wstęp do newsa, który jest bardzo ciekawy...",
    },
    {
      mal_id: 2,
      url: "https://myanimelist.net/news/2",
      title: "To jest testowy news nr 2 (starszy)",
      date: "2023-10-10T12:00:00+00:00",
      author_username: "Mentor",
      images: {
        jpg: {
          image_url:
            "https://cdn.myanimelist.net/s/common/uploaded_files/1765556312-11fff2d4eec923893ce8dd25284bea0d.jpeg",
        },
      },
      forum_url: "#",
      excerpt:
        "Kolejny niesamowity news ze świata anime, który musisz przeczytać...",
    },
  ],
};

export async function getAnimeNews(id: string | number) {
  const baseUrl = "https://api.jikan.moe/v4/anime";

  try {
    const response = await jikanRateLimiter.schedule(() =>
      fetch(`${baseUrl}/${id}/news`, {
        next: { revalidate: 3600 },
      })
    );
    if (response.status === 429) {
      console.warn("⚠️ Limit API osiągnięty! Używam danych testowych.");
      return FAKE_NEWS_RESPONSE;
    }

    if (!response.ok) {
      throw new Error(
        `Error just happend and couldnt get anime news ${response.status}`
      );
    }

    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      return FAKE_NEWS_RESPONSE;
    }

    return data;
  } catch (err) {
    console.log("Couldnt get anime news", err);
    return { data: [] };
  }
}

export async function getMixedAnimeNews(data: Anime[]) {
  try {
    const topAnime = data;

    if (!topAnime || !topAnime.length) return [];

    const top10 = topAnime.slice(0, 10);

    const newsPromises = top10.map((anime: Anime) =>
      getAnimeNews(anime.mal_id)
    );
    const newsResults = await Promise.all(newsPromises);

    const allNews = newsResults.flatMap((news) =>
      news && news.data ? news.data : []
    );

    const sortedNews = allNews.sort(
      (a: News, b: News) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return sortedNews.slice(0, 12);
  } catch (err) {
    console.error("Error with aggragate news", err);
    return [];
  }
}

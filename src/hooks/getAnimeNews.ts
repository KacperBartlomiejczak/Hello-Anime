import { getTopAnime } from "./getTopAnime";
import { Anime } from "@/types/anime";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const FAKE_NEWS_RESPONSE = {
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
    },
  ],
};

async function getAnimeNews(id: string) {
  const baseUrl = "https://api.jikan.moe/v4/anime";

  try {
    const response = await fetch(`${baseUrl}/${id}/news`, {
      next: { revalidate: 3600 },
    });
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
    return data;
  } catch (err) {
    console.log("Couldnt get anime news", err);
    return { data: [] };
  }
}

export async function getMixedAnimeNews(data: any) {
  try {
    const topAnime = data;

    if (!topAnime || !topAnime.data) return [];

    const top6 = topAnime.data.slice(0, 6);
    const allNews = [];

    for (const anime of top6) {
      const news = await getAnimeNews(anime.mal_id);

      if (news && news.data) {
        allNews.push(...news.data);
      }
    }

    const sortedNews = allNews.sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return sortedNews.slice(0, 6);
  } catch (err) {
    console.error("Error with aggragate news", err);
    return [];
  }
}

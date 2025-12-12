import { getTopAnime } from "./getTopAnime";
import { Anime } from "@/types/anime";

async function getAnimeNews(id: string) {
  const baseUrl = "https://api.jikan.moe/v4/anime";

  try {
    const response = await fetch(`${baseUrl}/${id}/news`);

    if (!response.ok) {
      throw new Error(
        `Error just happend and couldnt get anime news ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Couldnt get anime news", err);
    return [];
  }
}

export async function getMixedAnimeNews() {
  try {
    const topAnime = await getTopAnime(true);

    if (!topAnime || !topAnime.data) return [];

    const top3 = topAnime.data.slice(0, 3);

    const newsPromises = top3.map((anime: Anime) => getAnimeNews(anime.mal_id));
    const newsResponses = await Promise.all(newsPromises);

    const allNews = newsResponses
      .filter((response) => response !== null)
      .map((response) => response.data)
      .flat();

    const sortedNews = allNews.sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return sortedNews.slice(0, 5);
  } catch (err) {
    console.error("Error with aggragate news", err);
    return [];
  }
}

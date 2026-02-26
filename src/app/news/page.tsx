export const revalidate = 3600

import { getTopAnime } from "@/hooks/getTopAnime";
import { getAnimeNews } from "@/hooks/getAnimeNews";
import { Anime } from "@/types/anime";
import Title from "@/components/ui/title";
import NewsFeed from "@/components/newsPage/newsFeed";

export default async function Page() {
  const topAnimeData = await getTopAnime("upcoming");
  let topAnime = topAnimeData.data;
  topAnime = topAnime.slice(0, 10);

  // Pre-fetch news for all anime to avoid client-side loading delays
  const newsPromises = topAnime.map(async (anime: Anime) => {
    const newsData = await getAnimeNews(anime.mal_id);
    return {
      animeId: anime.mal_id,
      news: newsData?.data || [],
    };
  });

  // Execute sequentially to respect rate limits
  const allNews = [];
  for (const promise of newsPromises) {
    const result = await promise;
    allNews.push(result);
  }

  // Convert to map for easy lookup
  const newsMap = Object.fromEntries(
    allNews.map((item) => [item.animeId, item.news]),
  );

  return (
    <section className="w-full  mt-30">
      <div className="container mx-auto px-4">
        <Title>See the latest anime news</Title>
        <div className="w-full flex  items-center justify-center gap-4">
          <NewsFeed animes={topAnime} preloadedNews={newsMap} />
        </div>
      </div>
    </section>
  );
}

import { getTopAnime } from "@/hooks/getTopAnime";

import Title from "@/components/ui/title";

import NewsFeed from "@/components/newsPage/newsFeed";

export default async function Page() {
  const topAnimeData = await getTopAnime("upcoming");
  let topAnime = topAnimeData.data;
  topAnime = topAnime.slice(0, 10);

  return (
    <section className="w-full  mt-30">
      <div className="container mx-auto px-4">
        <Title>See the latest anime news</Title>
        <div className="w-full flex  items-center justify-center gap-4">
          <NewsFeed animes={topAnime} />
        </div>
      </div>
    </section>
  );
}

import Title from "../ui/title";
import Section from "../ui/section";
import NewsList from "./newsList";
import { getMixedAnimeNews } from "@/hooks/getAnimeNews";
import { getTopAnime } from "@/hooks/getTopAnime";

export default async function AnimeNews() {
  const data = await getTopAnime("upcoming");
  const news = await getMixedAnimeNews(data.data);
  return (
    <Section className="bg-secondary-background max-h-dvh lg:max-h-[110dvh] xl:max-h-[80dvh]">
      <Title>Anime News</Title>

      <NewsList news={news} />
    </Section>
  );
}

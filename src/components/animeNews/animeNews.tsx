import Title from "../ui/title";
import Section from "../ui/section";
import NewsList from "./newsList";
import { getMixedAnimeNews } from "@/hooks/getAnimeNews";
import { AnimeFilter, getTopAnime } from "@/hooks/getTopAnime";

export default async function AnimeNews() {
  const data = await getTopAnime(AnimeFilter.Upcoming);
  const news = await getMixedAnimeNews(data);
  return (
    <Section className="bg-secondary-background">
      <Title>Anime News</Title>

      <NewsList news={news} />
    </Section>
  );
}

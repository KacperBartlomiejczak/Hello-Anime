

import Section from "../ui/section";
import Title from "../ui/title";
import { getTopAnime } from "@/hooks/getTopAnime";
import AnimeNewsSlider from "./animeNewsSlider";
import { getAnimeNews } from "@/hooks/getAnimeNews";
export default async function AnimeNews() {
  const { data } = await getTopAnime("airing", 1, 10);

  const result = await getAnimeNews(data[0].mal_id);

  return (
    <Section>
      <Title>Anime News</Title>
      <div className="w-full">
        <AnimeNewsSlider data={data} news={result} />
      </div>
    </Section>
  );
}

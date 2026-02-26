
import { getAnimeAiring } from "@/hooks/getAnimeAiring";
import AnimeCalender from "./animeCalender";
export default async function AnimeCalenderServer() {
  const result = await getAnimeAiring("monday");

  return <AnimeCalender data={result} />;
}

import { getTopAnime } from "@/hooks/getTopAnime";
import Hero from "./hero";

export default async function HeroServer() {
  const topData = await getTopAnime("bypopularity");
  return <Hero animes={topData?.data.slice(0, 5)} />;
}

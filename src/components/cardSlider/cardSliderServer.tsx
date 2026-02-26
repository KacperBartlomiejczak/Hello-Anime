import { getTopAnime } from "@/hooks/getTopAnime";
import CardSlider from "./cardSlider";

export default async function CardSliderServer() {
  const upComing = await getTopAnime("airing", 1, 9);

  return <CardSlider animes={upComing.data} title="Airing Anime" />;
}

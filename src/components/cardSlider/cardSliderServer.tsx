import { getTopAnime } from "@/hooks/getTopAnime";
import CardSlider from "./cardSlider";
import { Anime } from "@/types/anime";

export default async function CardSliderServer() {
  const upComing = await getTopAnime("upcoming");

  return <CardSlider animes={upComing.data} />;
}

import { getTopAnime } from "@/hooks/getTopAnime";
import CardSlider from "./cardSlider";
import { Anime } from "@/types/anime";

export default async function CardSliderServer() {
  const upComing = await getTopAnime("upcoming", 1, 9);

  return <CardSlider animes={upComing.data} />;
}

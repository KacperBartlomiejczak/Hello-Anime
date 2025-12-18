import { getTopAnime } from "@/hooks/getTopAnime";
import CardSlider from "./cardSlider";

export default async function CardSliderServer() {
  const response = await getTopAnime(true);
  
  if (!response || !response.data) {
    return <div>Failed to load anime</div>;
  }
  
  return <CardSlider animes={response.data} />;
}

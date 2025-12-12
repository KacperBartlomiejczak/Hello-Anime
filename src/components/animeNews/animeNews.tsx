import { getMixedAnimeNews } from "@/hooks/getAnimeNews";
import Title from "../ui/title";
import Section from "../ui/section";
import Image from "next/image";
import { News } from "@/types/news";

export default async function AnimeNews() {
  const news: News[] = await getMixedAnimeNews();
  console.log(news);

  return (
    <Section>
      <Title>Anime News</Title>
      <div className="relative w-full h-34">
        <Image
          src={news[0].images.jpg.image_url}
          alt={news[0].title}
          fill
          sizes="100%"
        />
      </div>
    </Section>
  );
}

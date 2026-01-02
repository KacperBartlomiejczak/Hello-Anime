import CharactersGrid from "@/components/animeDetails/animeCharacter";
import AnimeDetails from "@/components/animeDetails/animeDetails";

import { getAnimeCharacters } from "@/hooks/getAnimeCharacters";
import { getAnimeDetails } from "@/hooks/getAnimeDetails";
import { getAnimeRecomendations } from "@/hooks/getAnimeRecomendations";
import { getTopAnime } from "@/hooks/getTopAnime";

import RecommendationsSection from "@/components/animeDetails/animeRecommendations";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const data = await getAnimeDetails(id);

  const characters = await getAnimeCharacters(id);

  let recommendations = await getAnimeRecomendations(id);
  let recommendationsTitle = "Recommendations";

  if (!recommendations || recommendations.length === 0) {
    const topAnime = await getTopAnime("bypopularity");
    if (topAnime?.data) {
      // Map Top Anime to Recommendation structure
      recommendations = topAnime.data.slice(0, 5).map((anime: any) => ({
        entry: {
          mal_id: anime.mal_id,
          url: anime.url,
          images: anime.images,
          title: anime.title,
        },
        url: anime.url,
        votes: 0,
      }));
      recommendationsTitle = "Popular Anime";
    }
  }

  return (
    <div className="flex justify-start mx-auto items-center flex-col container min-h-screen pt-30 gap-2">
      <AnimeDetails anime={data.data} />
      <CharactersGrid characters={characters} />

      <RecommendationsSection
        recommendations={recommendations}
        title={recommendationsTitle}
      />
    </div>
  );
}

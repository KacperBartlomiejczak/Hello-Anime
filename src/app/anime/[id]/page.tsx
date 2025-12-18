import CharactersGrid from "@/components/animeDetails/animeCharacter";
import AnimeDetails from "@/components/animeDetails/animeDetails";
import Card from "@/components/ui/card";
import { getAnimeCharacters } from "@/hooks/getAnimeCharacters";
import { getAnimeDetails } from "@/hooks/getAnimeDetails";
import { getAnimeRecomendations } from "@/hooks/getAnimeRecomendations";
import Link from "next/link";
import Image from "next/image";
import RecommendationsSection from "@/components/animeDetails/animeRecommendations";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Helper function to add delay between requests
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const data = await getAnimeDetails(id);

  const characters = await getAnimeCharacters(id);

  const recommendations = await getAnimeRecomendations(id);

  return (
    <div className="flex justify-start mx-auto items-center flex-col container min-h-screen pt-30 gap-2">
      <AnimeDetails anime={data.data} />
      <CharactersGrid characters={characters} />

      {recommendations.length > 0 ? (
        <RecommendationsSection recommendations={recommendations} />
      ) : (
        <p className="p-4">We have no anime recommendations yet!</p>
      )}
    </div>
  );
}

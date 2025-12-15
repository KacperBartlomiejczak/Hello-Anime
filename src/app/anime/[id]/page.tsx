import CharactersGrid from "@/components/animeDetails/animeCharacter";
import AnimeDetails from "@/components/animeDetails/animeDetails";
import { getAnimeCharacters } from "@/hooks/getAnimeCharacters";
import { getAnimeDetails } from "@/hooks/getAnimeDetails";
import { Anime } from "@/types/anime";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const data = await getAnimeDetails(id);
  const characters = await getAnimeCharacters(id);

  console.log(data);
  return (
    <div className="flex justify-start mx-auto items-center flex-col container min-h-screen pt-30 gap-2">
      <AnimeDetails anime={data.data} />
      <CharactersGrid characters={characters} />
    </div>
  );
}

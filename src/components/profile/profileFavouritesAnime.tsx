
import { getFavouriteAime } from "@/actions/getFavouriteAnime";
import Image from "next/image";
import Title from "../ui/title";
import Link from "next/link";
export default async function ProfileFavouriteAnimes() {
    const result = await getFavouriteAime();
    return(
        <div className="container mx-auto flex flex-col gap-4">
          {result.length > 0 && <>
          <Title>Favourite Anime</Title>
          <div className="flex items-center justify-center wrap flex-col gap-10 md:grid md:grid-cols-4 lg:grid-cols-5 md:gap-4 overflow-hidden">
            {result.map((anime) => (
              <Link
                key={anime.animeId}
                href={`/anime/${anime.animeId}`}
                className="flex flex-col h-70 w-55 items-center group"
              >
                <div className="relative w-40 aspect-2/3">
                  <Image
                    src={anime.animeImage || "https://placehold.co/600x400"}
                    alt={`This is poster for anime ${anime.animeName}}`}
                    className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                    fill
                  />
                </div>
                <h3 className="text-center group-hover:text-brand mt-2 transition-all">
                  {anime.animeName}
                </h3>
              </Link>
            ))}
          </div></>}
          
        </div>
    )
}
'use client'

import { getAnimeDetails } from "@/hooks/getAnimeDetails";
import { Anime } from "@/types/anime";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const data = await getAnimeDetails(id);
  const animeDetails: Anime = data.data;

  console.log(data);
  return (
    <div className="flex justify-start mx-auto items-center flex-col container min-h-screen pt-30 gap-2">
      <Image
        src={animeDetails.images.webp.large_image_url}
        alt={animeDetails.title}
        className="object-cover object-center rounded-xl"
        width="212"
        height="300"
      />
      <div className="w-3/4 text-center">
        <h2 className="font-poppins font-bold text-xl">{animeDetails.title}</h2>
        <p className="text-sm/loose">{animeDetails.synopsis}</p>
      </div>
    </div>
  );
}

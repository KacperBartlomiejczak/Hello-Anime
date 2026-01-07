"use server";

import { getTopAnime, AnimeCategory } from "@/hooks/getTopAnime";

export async function getTopAnimeAction(filter: AnimeCategory) {
  try {
    const result = await getTopAnime(filter);
    return result;
  } catch (error) {
    console.error("Error in getTopAnimeAction:", error);
    return { data: [] };
  }
}

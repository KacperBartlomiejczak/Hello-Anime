"use server";

import { getAnimeAiring, Day } from "@/hooks/getAnimeAiring";
import { Anime } from "@/types/anime";

export async function getAnimeAiringAction(day: Day): Promise<Anime[]> {
  try {
    const result = await getAnimeAiring(day);
    return result;
  } catch (error) {
    console.error("Error in getAnimeAiringAction:", error);
    return [];
  }
}

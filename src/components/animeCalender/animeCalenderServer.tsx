import { getAnimeAiring } from "@/hooks/getAnimeAiring";
import AnimeCalender from "./animeCalender";
import { Suspense } from "react";
import { Anime } from "@/types/anime";

export default async function AnimeCalenderServer() {
  let result: Anime[] = [];
  try {
    result = await getAnimeAiring("monday");
  } catch (error) {
    console.error(
      "Error fetching monday schedule in AnimeCalenderServer",
      error,
    );
  }

  return (
    <Suspense>
      <AnimeCalender data={result} />
    </Suspense>
  );
}

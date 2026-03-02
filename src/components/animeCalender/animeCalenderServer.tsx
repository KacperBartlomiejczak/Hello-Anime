import { getAnimeAiring } from "@/hooks/getAnimeAiring";
import AnimeCalender from "./animeCalender";
import { Suspense } from "react";
export default async function AnimeCalenderServer() {
  const result = await getAnimeAiring("monday");

  return (
    <Suspense>
      <AnimeCalender data={result} />
    </Suspense>
  );
}

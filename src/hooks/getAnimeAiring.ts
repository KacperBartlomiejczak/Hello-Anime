import { jikanRateLimiter } from "@/lib/jikanRateLimiter";
import { Anime } from "@/types/anime";
import { unstable_cache } from "next/cache";

export type Day =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export const daysOptions: { value: Day; label: string }[] = [
  { value: "monday", label: "Mon" },
  { value: "tuesday", label: "Tue" },
  { value: "wednesday", label: "Wed" },
  { value: "thursday", label: "Thu" },
  { value: "friday", label: "Fri" },
  { value: "saturday", label: "Sat" },
  { value: "sunday", label: "Sun" },
];

export const fetchAnimeAiring = async (day: Day) => {
  const url = "https://api.jikan.moe/v4";
  const endpoint = "/schedules";
  try {
    const response = await jikanRateLimiter.schedule(() =>
      fetch(
        `${url}${endpoint}?filter=${day}&sfw=true&limit=20&kids=false&type=tv`,
      ),
    );

    if (response.status === 504 || response.status === 429) {
      console.warn(
        `Jikan API overload for ${day}, throwing error to avoid caching empty slice.`,
      );
      throw new Error(`Jikan API overload for ${day}`);
    }

    if (!response.ok) {
      throw new Error(`Couldn't connect with api ${response.status}`);
    }
    const data = await response.json();
    return data.data.sort(
      (a: Anime, b: Anime) => (b.score || 0) - (a.score || 0),
    );
  } catch (err) {
    console.error(`there was a problem to connect with api ${err}`);
    throw err;
  }
};

export const getAnimeAiring = unstable_cache(
  async (day: Day) => fetchAnimeAiring(day),
  ["airing-anime-cache"],
  { revalidate: 3600, tags: ["airing-anime"] },
);

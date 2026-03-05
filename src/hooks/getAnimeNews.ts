import { jikanRateLimiter } from "@/lib/jikanRateLimiter";

export async function getAnimeNews(animeId: number) {
  const baseUrl = "https://api.jikan.moe/v4";
  try {
    const response = await jikanRateLimiter.schedule(() =>
      fetch(`${baseUrl}/anime/${animeId}/news`, {
        next: { revalidate: 3600 },
      }),
    );
    if (response.status === 504) {
      return [];
    }
    if (!response.ok) {
      throw new Error(
        `Failed to fetch anime news ${response.status} ${response.statusText}`,
      );
    }
    if (response.status === 404) {
      return [];
    }

    const { data } = await response.json();

    return data.slice(0, 10);
  } catch (err) {
    console.error("There was a problem connecting with API ", err);
    return [];
  }
}

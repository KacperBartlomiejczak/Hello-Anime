import { jikanRateLimiter } from "@/lib/jikanRateLimiter";

export async function getAnimeDetails(id: string) {
  const url = "https://api.jikan.moe/v4";

  try {
    const response = await jikanRateLimiter.schedule(() =>
      fetch(`${url}/anime/${id}/full`),
    );

    if (!response.ok) {
      throw new Error(`Error with connection to API ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`Error connection to API ${err}`);
  }
}

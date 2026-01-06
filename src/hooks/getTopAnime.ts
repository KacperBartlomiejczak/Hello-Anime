export type AnimeCategory = "upcoming" | "airing" | "bypopularity";
import { jikanRateLimiter } from "@/lib/jikanRateLimiter";
export async function getTopAnime(
  filter: AnimeCategory,
  page: number = 1,
  limit: number = 25,
  genreId?: string
) {
  const url = "https://api.jikan.moe/v4";
  let finalUrl = "";

  if (genreId) {
    
    const statusParam = filter === "bypopularity" ? "" : `&status=${filter}`;
    const orderByParam = "&order_by=score&sort=desc";
    
    finalUrl = `${url}/anime?sfw=true&type=tv&limit=${limit}&page=${page}&genres=${genreId}${statusParam}${orderByParam}`;
  } else {
   
    finalUrl = `${url}/top/anime?sfw=true&type=tv&limit=${limit}&page=${page}&filter=${filter}`;
  }

  try {
    const response = await jikanRateLimiter.schedule( () => fetch(finalUrl, {
      next: { revalidate: 3600 },
    }));

    if (!response.ok) {
      throw new Error(`Couldn't connected with api ${response.status}`);
    }
    const result = await response.json();

    // Deduplicate data to avoid key collisions
    if (result.data && Array.isArray(result.data)) {
      const seen = new Set();
      result.data = result.data.filter((anime: any) => {
        const duplicate = seen.has(anime.mal_id);
        seen.add(anime.mal_id);
        return !duplicate;
      });
    }

    return result;
  } catch (error) {
    console.error("Error just ocurred ", error);
    return { data: [] };
  }
}

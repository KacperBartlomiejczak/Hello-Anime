import { jikanRateLimiter } from "@/lib/jikanRateLimiter";

export async function getGenres() {
  const url = "https://api.jikan.moe/v4/genres/anime";

  try {
    // Fetch sequentially to respect rate limit
    const genresRes = await jikanRateLimiter.schedule(() =>
      fetch(`${url}?filter=genres`, { next: { revalidate: 86400 } }),
    );
    const demographicsRes = await jikanRateLimiter.schedule(() =>
      fetch(`${url}?filter=demographics`, { next: { revalidate: 86400 } }),
    );
    const themesRes = await jikanRateLimiter.schedule(() =>
      fetch(`${url}?filter=themes`, { next: { revalidate: 86400 } }),
    );

    if (!genresRes.ok || !demographicsRes.ok || !themesRes.ok) {
      throw new Error(`Error fetching genres`);
    }

    const genresData = await genresRes.json();
    const demographicsData = await demographicsRes.json();
    const themesData = await themesRes.json();

    // Combine all unique genres
    const allGenres = [
      ...(genresData.data || []),
      ...(demographicsData.data || []),
      ...(themesData.data || []),
    ];

    // Filter for popular genres (count > 1000)
    const popularGenres = allGenres.filter((g: any) => g.count > 1000);

    // Deduplicate just in case
    const uniqueGenres = Array.from(
      new Map(popularGenres.map((g: any) => [g.mal_id, g])).values(),
    );

    return uniqueGenres;
  } catch (error) {
    console.error("Failed to fetch genres", error);
    return [];
  }
}

export async function getGenres() {
  const url = "https://api.jikan.moe/v4/genres/anime";

  try {
    const [genresRes, demographicsRes, themesRes] = await Promise.all([
      fetch(`${url}?filter=genres`, { next: { revalidate: 86400 } }),
      fetch(`${url}?filter=demographics`, { next: { revalidate: 86400 } }),
      fetch(`${url}?filter=themes`, { next: { revalidate: 86400 } }),
    ]);

    if (!genresRes.ok || !demographicsRes.ok || !themesRes.ok) {
      throw new Error(`Error fetching genres`);
    }

    const [genresData, demographicsData, themesData] = await Promise.all([
      genresRes.json(),
      demographicsRes.json(),
      themesRes.json(),
    ]);

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
      new Map(popularGenres.map((g: any) => [g.mal_id, g])).values()
    );

    return uniqueGenres;
  } catch (error) {
    console.error("Failed to fetch genres", error);
    return [];
  }
}

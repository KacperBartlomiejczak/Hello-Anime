export async function searchAnime(query: string) {
  const baseUrl = "https://api.jikan.moe/v4";
  try {
    const params = new URLSearchParams({
      q: query,
      limit: "4",
      sfw: "true",
    });

    const response = await fetch(`${baseUrl}/anime?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`Couldn't connect with api ${response.status}`);
    }
    const data = response.json();
    return data;
  } catch (err) {
    console.error("Search error", err);
    return null;
  }
}

export async function searchAnime(query: string) {
  const baseUrl = "https://api.jikan.moe/v4";
  try {
    const params = new URLSearchParams({
      q: query,
      limit: "6",
      sfw: "false",
    });

    const response = await fetch(
      `${baseUrl}/anime?${params.toString()}&type=tv`
    );

    if (!response.ok) {
      throw new Error(`Couldn't connect with api ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Search error", err);
    return null;
  }
}

export async function getAnimeRecomendations(id: string) {
  const url = "https://api.jikan.moe/v4";

  try {
    const response = await fetch(`${url}/anime/${id}/recommendations`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(
        `There was a problem to connection with API ${response.status}`
      );
    }

    const data = await response.json();
    return data.data.slice(0, 5);
  } catch (err) {
    console.error(`There was a problem to connection with API ${err}`);
    return [];
  }
}

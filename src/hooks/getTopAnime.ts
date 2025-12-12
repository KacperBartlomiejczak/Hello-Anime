export async function getTopAnime(isAiring: boolean) {
  const url = "https://api.jikan.moe/v4/";

  try {
    const response = await fetch(
      `${url}top/anime?type=tv&${isAiring && "filter=airing"}`
    );

    if (!response.ok) {
      throw new Error("Couldn't connected with api");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error just ocurred ", error);
  }
}

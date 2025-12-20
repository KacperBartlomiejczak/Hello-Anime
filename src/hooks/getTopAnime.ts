export enum AnimeFilter {
  Upcoming = "upcoming",
  Airing = "airing",
  Popularity = "bypopularity",
}

export async function getTopAnime(filter: AnimeFilter) {
  const url = "https://api.jikan.moe/v4";

  let endpoint = "/top/anime";

  try {
    const response = await fetch(
      `${url}${endpoint}?sfw=true&type=tv&limit=10&filter=${filter}
      `,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`Couldn't connected with api ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error just ocurred ", error);
    return { data: [] };
  }
}

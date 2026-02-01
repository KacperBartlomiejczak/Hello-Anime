import { Character } from "@/types/character";
import { jikanRateLimiter } from "@/lib/jikanRateLimiter";

export async function getAnimeCharacters(id: string) {
  const url = "https://api.jikan.moe/v4";

  try {
    const response = await jikanRateLimiter.schedule(() =>
      fetch(`${url}/anime/${id}/characters`),
    );

    if (!response.ok) {
      throw new Error(
        `There was a problem to connecting with API ${response.status}`,
      );
    }
    const data = await response.json();
    const characters = data.data || [];

    const sorted = characters.sort((a: Character) => {
      return a.role === "Main" ? -1 : 1;
    });

    return sorted.slice(0, 12);
  } catch (err) {
    console.error(`Error to connect with database ${err}`);
  }
}

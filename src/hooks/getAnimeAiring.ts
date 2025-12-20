export type Day =
  | "monday"
  | "tuesday"
  | "Wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getAnimeAiring(day: Day) {
  const url = "https://api.jikan.moe/v4";
  const endpoint = "/schedules";

  try {
    await delay(350);
    const response = await fetch(
      `${url}${endpoint}?filter=${day}&sfw=true&limit=8&kids=false&type=tv`
    );
    if (!response.ok) {
      throw new Error(`Couldn't connect with api ${response.status}`);
    }

    const data = await response.json();

    return data.data;
  } catch (err) {
    console.error(`there was a problem to connect with api ${err}`);
    return [];
  }
}

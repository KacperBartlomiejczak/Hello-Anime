export type Day =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export const daysOptions: { value: Day; label: string }[] = [
  { value: "monday", label: "Mon" },
  { value: "tuesday", label: "Tue" },
  { value: "wednesday", label: "Wed" },
  { value: "thursday", label: "Thu" },
  { value: "friday", label: "Fri" },
  { value: "saturday", label: "Sat" },
  { value: "sunday", label: "Sun" },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getAnimeAiring(day: Day) {
  const url = "https://api.jikan.moe/v4";
  const endpoint = "/schedules";

  try {
    await delay(1000);
    const response = await fetch(
      `${url}${endpoint}?filter=${day}&sfw=true&limit=20&kids=false&type=tv`
    );
    if (!response.ok) {
      throw new Error(`Couldn't connect with api ${response.status}`);
    }

    const data = await response.json();
    const sortedAnime = data.data.sort(
      (a: any, b: any) => (b.score || 0) - (a.score || 0)
    );

    return sortedAnime;
  } catch (err) {
    console.error(`there was a problem to connect with api ${err}`);
    return [];
  }
}

import { getTopAnime } from "../getTopAnime";

jest.mock("@/lib/jikanRateLimiter", () => ({
  jikanRateLimiter: { schedule: (fn: any) => fn() },
}));
describe("getTopAnime", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    global.fetch = jest.fn();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("Should return happy path when called", async () => {
    let data = { data: [{ mal_id: 1, title: "Naruto" }] };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => data,
    });
    const result = await getTopAnime("airing");
    expect(result).toEqual(data);
  });

  it("Should return unique data when passed the same values", async () => {
    let data = {
      data: [
        { mal_id: 1, title: "Naruto" },
        { mal_id: 1, title: "Naruto" },
        { mal_id: 2, title: "Bleach" },
      ],
    };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => data,
    });

    const result = await getTopAnime("airing");

    expect(result.data).toHaveLength(2);
  });

  it("Should return empty array when error was found", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
    });

    const result = await getTopAnime("airing");
    expect(result).toEqual({ data: [] });
  });

  it("Should return empty array when user lost internet", async () => {
    (global.fetch as jest.Mock).mockRejectedValue({
      ok: false,
    });
    const result = await getTopAnime("airing");

    expect(result).toEqual({ data: [] });
  });
  it("Should return valid url when user dont add genreId", async () => {
    let data = {
      data: [
        { mal_id: 1, title: "Naruto" },
        { mal_id: 2, title: "Bleach" },
        { mal_id: 1, title: "Naruto" },
      ],
    };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => data,
    });
    let result = getTopAnime("airing", 2, 10);

    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.jikan.moe/v4/top/anime?sfw=true&type=tv&limit=10&page=2&filter=airing`,
      { next: { revalidate: 3600 } },
    );
  });
  it("Should return valid url when user add genreId and change from airing to bypopularity", async () => {
    let data = {
      data: [
        { mal_id: 1, title: "Naruto" },
        { mal_id: 2, title: "Bleach" },
        { mal_id: 1, title: "Naruto" },
      ],
    };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => data,
    });

    const result = getTopAnime("bypopularity", 1, 10, "adventure");

    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.jikan.moe/v4/anime?sfw=true&type=tv&limit=10&page=1&genres=adventure&order_by=score&sort=desc",
      { next: { revalidate: 3600 } },
    );
  });
});

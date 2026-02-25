import { searchAnime } from "../searchAnime";

jest.mock("@/lib/jikanRateLimiter", () => ({
  jikanRateLimiter: {
    schedule: (fn: any) => fn(),
  },
}));

describe("searchAnime", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  it("Should return data from API normaly", async () => {
    let data = { data: [{ mal_id: 1, title: "Naruto" }] };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => data,
    });

    const result = await searchAnime("Naruto");

    expect(result).toEqual(data);
  });
  it("Should return null when the status of API is 500", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
    });
    const result = await searchAnime("Naruto");
    expect(result).toBe(null);
  });
  it("Should return null when user lost internet connection", async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

    const result = await searchAnime("Naruto");
    expect(result).toEqual(null);
  });

  it("Should return valid url when called", async () => {
    let data = { data: [{ mal_id: 1, title: "Naruto" }] };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => data,
    });
    const result = await searchAnime("Naruto");

    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.jikan.moe/v4/anime?q=Naruto&limit=6&sfw=false&type=tv",
    );
  });

  it("Should return query url when called", async () => {
    let data = { data: [{ mal_id: 1, title: "Naruto" }] };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => data,
    });
    const result = await searchAnime("Bleach");

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("q=Bleach"),
    );
  });
});

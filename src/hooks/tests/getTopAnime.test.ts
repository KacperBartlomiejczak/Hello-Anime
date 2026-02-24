import { getTopAnime } from "../getTopAnime";

jest.mock("@/lib/jikanRateLimiter", () => ({
  jikanRateLimiter: { schedule: (fn: any) => fn() },
}));
describe("getTopAnime", () => {
  let data = { data: [{ mal_id: 1, title: "Naruto" }] };
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("Should return happy path when called", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => data,
    });
    const result = await getTopAnime("airing");
    expect(result.json).toEqual(data);
  });
});

import { RateLimiter } from "../jikanRateLimiter";

describe("RateLimiter", () => {
  let limiter: RateLimiter;

  beforeEach(() => {
    jest.useFakeTimers();
    limiter = new RateLimiter();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("executes task and returns its result", async () => {
    const result = await limiter.schedule(() => Promise.resolve("string"));
    expect(result).toBe("string");
  });
  it("delays execution when all tokens are consumed", async () => {
    const mockFn = jest.fn(() => Promise.resolve("done"));
    limiter.schedule(mockFn);
    limiter.schedule(mockFn);
    limiter.schedule(mockFn);

    await jest.advanceTimersByTimeAsync(0);
    expect(mockFn).toHaveBeenCalledTimes(1);
    await jest.advanceTimersByTimeAsync(400);
    expect(mockFn).toHaveBeenCalledTimes(2);
    await jest.advanceTimersByTimeAsync(800);
    expect(mockFn).toHaveBeenCalledTimes(3);
  });
  it("Checking what if we add to many tokens but with array", async () => {
    const order: number[] = [];
    limiter.schedule(() => Promise.resolve(order.push(1)));

    expect(order).toEqual([1]);
    await jest.advanceTimersByTimeAsync(400);
    limiter.schedule(() => Promise.resolve(order.push(2)));
    expect(order).toEqual([1, 2]);
  });

  it("rejects when scheduled function throws", async () => {
    const result = limiter.schedule(() => Promise.reject(new Error("boom")));
    await expect(result).rejects.toThrow("boom");
  });

  it("Should return valid value after delay when two fetch function was called in the same time", async () => {
    const order: number[] = [];
    limiter.schedule(() => Promise.resolve(order.push(1)));
    limiter.schedule(() => Promise.resolve(order.push(2)));
    await jest.advanceTimersByTimeAsync(0);
    expect(order).toEqual([1]);
    await jest.advanceTimersByTimeAsync(400);
    expect(order).toEqual([1, 2]);
  });
});

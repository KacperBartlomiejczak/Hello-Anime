import { RateLimiter } from "../jikanRateLimiter";


describe("RateLimiter", () => {
    let limiter: RateLimiter

    beforeEach(() => {
        jest.useFakeTimers()
        limiter = new RateLimiter()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    it("executes task and returns its result", async () => {
        const result = await limiter.schedule(() => Promise.resolve("string"))
        expect(result).toBe("string")
    })
    it("delays execution when all tokens are consumed", async () => {
        const mockFn = jest.fn(() => Promise.resolve("done"))
        limiter.schedule(mockFn)
        limiter.schedule(mockFn)
        limiter.schedule(mockFn)
        limiter.schedule(mockFn)

        expect(mockFn).toHaveBeenCalledTimes(3)
        await jest.advanceTimersByTimeAsync(335)
        expect(mockFn).toHaveBeenCalledTimes(4)
    })
    it("Checking what if we add to many tokens but with array", async () => {
        const numbers: number[] = []
        limiter.schedule(() => Promise.resolve(numbers.push(1)))
        limiter.schedule(() => Promise.resolve(numbers.push(2)))
        limiter.schedule(() => Promise.resolve(numbers.push(3)))
        limiter.schedule(() => Promise.resolve(numbers.push(4)))
        expect(numbers).toEqual([1, 2, 3])
        await jest.advanceTimersByTimeAsync(335)
        expect(numbers).toEqual([1, 2, 3, 4])


    })

    it("rejects when scheduled function throws", async() => {
        const result = limiter.schedule(() => Promise.reject(new Error("boom")))
        await expect(result).rejects.toThrow("boom")
    })
})
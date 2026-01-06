export class RateLimiter {
  private queue: Array<() => void> = [];
  private tokens: number = 3; // Jikan API allows 3 requests per second/duration, but to be safe we use a token bucket
  private lastRefill: number = Date.now();
  private readonly REFILL_RATE_MS = 335; // slightly more than 1000ms / 3 to be safe (~3 requests per second)
  private readonly MAX_TOKENS = 3;
  private processing: boolean = false;

  constructor() {}

  /**
   * Schedules a function to be executed when a token is available.
   * @param fn The function that returns a promise.
   */
  async schedule<T>(fn: () => Promise<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await fn();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      this.processQueue();
    });
  }

  private async processQueue() {
    if (this.processing) return;
    this.processing = true;

    while (this.queue.length > 0) {
      if (this.tokens > 0) {
        this.tokens--;
        const task = this.queue.shift();
        if (task) {
          task(); // Execute without awaiting to allow others to be processed if we had parallel execution logic (but here we want to respect rate limit precisely)
          // Actually, we should probably just fire it. The rate limit is about STARTING requests.
        }
      } else {
        // Wait for refill
        const now = Date.now();
        const timeToWait = this.REFILL_RATE_MS - (now - this.lastRefill);
        if (timeToWait > 0) {
            await new Promise((resolve) => setTimeout(resolve, timeToWait));
        }
        this.tokens = 1; // Refill one token
        this.lastRefill = Date.now();
      }
    }

    this.processing = false;
  }
}

// Export a singleton instance
export const jikanRateLimiter = new RateLimiter();

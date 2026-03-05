export class RateLimiter {
  private queue: Array<() => Promise<void>> = [];
  // Jikan API allows 3 requests per second/duration, but to be safe we use a token bucket

  // slightly more than 1000ms / 3 to be safe (~3 requests per second)

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

  async processQueue() {
    if (this.processing) return;

    this.processing = true;
    while (this.queue.length > 0) {
      const task = this.queue.shift();
      if (task) {
        await task();
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    }
    this.processing = false;
  }
}

// Export a singleton instance
export const jikanRateLimiter = new RateLimiter();

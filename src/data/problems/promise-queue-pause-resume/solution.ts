type Task<T> = () => T | Promise<T>;

type Job<T> = {
  task: Task<T>
  resolve: (value: T) => void
  reject: (reason?: unknown) => void
};

export default class PromiseQueue {
  private running = 0;

  private paused = false;

  private readonly queue: Array<Job<unknown>> = [];

  constructor(private readonly concurrency: number) {}

  add<T>(task: Task<T>): Promise<T> {
    const promise = new Promise<T>((resolve, reject) => {
      this.queue.push({ task, resolve, reject } as Job<unknown>);
    });

    this.runNext();
    return promise;
  }

  pause(): void {
    this.paused = true;
  }

  resume(): void {
    this.paused = false;
    this.runNext();
  }

  clear(reason: unknown = 'Cleared'): void {
    const queued = this.queue.splice(0);

    for (const job of queued) {
      job.reject(reason);
    }
  }

  private runNext(): void {
    while (!this.paused && this.running < this.concurrency && this.queue.length > 0) {
      const job = this.queue.shift() as Job<unknown>;
      this.running += 1;

      Promise.resolve()
        .then(job.task)
        .then(job.resolve, job.reject)
        .finally(() => {
          this.running -= 1;
          this.runNext();
        });
    }
  }
}

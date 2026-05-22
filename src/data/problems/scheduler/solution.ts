type Task<T> = () => T | Promise<T>;

type Scheduled<T> = {
  promise: Promise<T>
  cancel: () => void
};

type Job<T> = {
  task: Task<T>
  priority: number
  sequence: number
  cancelled: boolean
  started?: boolean
  resolve: (value: T) => void
  reject: (reason?: unknown) => void
};

export default class Scheduler {
  private running = 0;

  private sequence = 0;

  private queue: Array<Job<unknown>> = [];

  constructor(private readonly concurrency: number) {}

  schedule<T>(task: Task<T>, priority = 0): Scheduled<T> {
    const job = {
      task,
      priority,
      sequence: this.sequence,
      cancelled: false,
    } as Job<T>;
    this.sequence += 1;

    const promise = new Promise<T>((resolve, reject) => {
      job.resolve = resolve;
      job.reject = reject;
    });

    this.queue.push(job as Job<unknown>);
    this.queue.sort((a, b) => b.priority - a.priority || a.sequence - b.sequence);
    this.runNext();

    return {
      promise,
      cancel: () => {
        if (job.started || job.cancelled) {
          return;
        }

        job.cancelled = true;
        this.queue = this.queue.filter((queuedJob) => queuedJob !== job);
        job.reject('Cancelled');
      },
    };
  }

  private runNext(): void {
    while (this.running < this.concurrency && this.queue.length > 0) {
      const job = this.queue.shift() as Job<unknown>;

      if (job.cancelled) {
        continue;
      }

      job.started = true;
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

export default class Scheduler {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.running = 0;
    this.sequence = 0;
    this.queue = [];
  }

  schedule(task, priority = 0) {
    const job = {
      task,
      priority,
      sequence: this.sequence,
      cancelled: false,
    };
    this.sequence += 1;

    const promise = new Promise((resolve, reject) => {
      job.resolve = resolve;
      job.reject = reject;
    });

    this.queue.push(job);
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

  runNext() {
    while (this.running < this.concurrency && this.queue.length > 0) {
      const job = this.queue.shift();

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

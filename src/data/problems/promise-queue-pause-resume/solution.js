export default class PromiseQueue {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.running = 0;
    this.paused = false;
    this.queue = [];
  }

  add(task) {
    const promise = new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
    });

    this.runNext();
    return promise;
  }

  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
    this.runNext();
  }

  clear(reason = 'Cleared') {
    const queued = this.queue.splice(0);

    for (const job of queued) {
      job.reject(reason);
    }
  }

  runNext() {
    while (!this.paused && this.running < this.concurrency && this.queue.length > 0) {
      const job = this.queue.shift();
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

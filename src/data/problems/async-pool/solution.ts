type Task<T, R> = (item: T, index: number) => R | Promise<R>;

export default async function asyncPool<T, R>(
  limit: number,
  items: T[],
  task: Task<T, R>,
): Promise<R[]> {
  const results = new Array<R>(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await task(items[currentIndex], currentIndex);
    }
  }

  const workerCount = Math.min(limit, items.length);
  const workers = Array.from({ length: workerCount }, worker);
  await Promise.all(workers);
  return results;
}

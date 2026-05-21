type AsyncMapper<T, U> = (
  value: T,
  index: number,
  array: T[]
) => U | Promise<U>

export default async function mapAsyncLimit<T, U>(
  array: T[],
  callbackFn: AsyncMapper<T, U>,
  size: number = Infinity
): Promise<U[]> {
  const results = new Array<U>(array.length);
  const limit = Math.min(size, array.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < array.length) {
      const index = nextIndex;
      nextIndex += 1;
      // Store by original index so completion order does not affect output order.
      results[index] = await callbackFn(array[index], index, array);
    }
  }

  await Promise.all(
    Array.from({ length: limit }, () => worker()),
  );

  return results;
}

export default async function mapAsyncLimit(array, callbackFn, size = Infinity) {
  const results = new Array(array.length);
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

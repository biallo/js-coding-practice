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
  const results: U[] = [];

  for (let start = 0; start < array.length; start += size) {
    const chunk = array.slice(start, start + size);
    // Each chunk runs concurrently; the next chunk waits for the current one.
    const mappedChunk = await Promise.all(
      chunk.map((item, offset) => callbackFn(item, start + offset, array)),
    );

    results.push(...mappedChunk);
  }

  return results;
}

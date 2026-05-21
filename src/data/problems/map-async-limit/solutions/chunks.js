export default async function mapAsyncLimit(array, callbackFn, size = Infinity) {
  const results = [];

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

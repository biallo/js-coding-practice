type AsyncMapper<T, U> = (
  value: T,
  index: number,
  array: T[]
) => U | Promise<U>

export default function mapAsync<T, U>(
  array: T[],
  callbackFn: AsyncMapper<T, U>
): Promise<U[]> {
  // Array.map preserves order; Promise.all waits for every mapped promise.
  return Promise.all(
    array.map((item, index) => callbackFn(item, index, array)),
  );
}

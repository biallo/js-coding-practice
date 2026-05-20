type NestedArray<T> = Array<T | NestedArray<T>>

export default function flatten<T>(array: NestedArray<T>): T[] {
  // Keep the input array unchanged by collecting values in a new result array.
  const result: T[] = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      // Recursively flatten nested arrays before appending their values.
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

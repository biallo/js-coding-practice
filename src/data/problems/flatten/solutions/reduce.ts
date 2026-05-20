type NestedArray<T> = Array<T | NestedArray<T>>

export default function flatten<T>(array: NestedArray<T>): T[] {
  return array.reduce<T[]>((result, item) => {
    if (Array.isArray(item)) {
      // Merge each flattened child array into the accumulator.
      result.push(...flatten(item));
    } else {
      result.push(item);
    }

    return result;
  }, []);
}

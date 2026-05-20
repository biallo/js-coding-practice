type MultiDimensionalArray = Array<number | MultiDimensionalArray>

export default function flat(
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  const result: MultiDimensionalArray = [];

  function flatten(items: MultiDimensionalArray, depth: number) {
    for (const item of items) {
      if (Array.isArray(item) && depth < n) {
        // Only remove one array layer while the current depth is still below n.
        flatten(item, depth + 1);
      } else {
        result.push(item);
      }
    }
  }

  flatten(arr, 0);
  return result;
}

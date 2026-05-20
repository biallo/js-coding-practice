type MultiDimensionalArray = Array<number | MultiDimensionalArray>
type StackItem = [number | MultiDimensionalArray, number]

export default function flat(
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  const result: MultiDimensionalArray = [];
  // Store each value with the depth of the array it currently belongs to.
  const stack: StackItem[] = arr.map((item) => [item, 0]).reverse();

  while (stack.length > 0) {
    const [item, depth] = stack.pop() as StackItem;

    if (Array.isArray(item) && depth < n) {
      // Push children in reverse order because the stack is last-in, first-out.
      for (let i = item.length - 1; i >= 0; i -= 1) {
        stack.push([item[i], depth + 1]);
      }
    } else {
      result.push(item);
    }
  }

  return result;
}

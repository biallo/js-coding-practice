type NestedArray<T> = Array<T | NestedArray<T>>

export default function flatten<T>(array: NestedArray<T>): T[] {
  const result: T[] = [];
  // Use a stack so deeply nested input does not depend on the call stack.
  const stack: Array<T | NestedArray<T>> = [...array];

  while (stack.length > 0) {
    const item = stack.pop() as T | NestedArray<T>;

    if (Array.isArray(item)) {
      // Push nested items back onto the stack to process them one level at a time.
      stack.push(...item);
    } else {
      result.push(item);
    }
  }

  return result.reverse();
}

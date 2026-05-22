type MultiDimensionalArray = Array<number | MultiDimensionalArray>;

type StackFrame = {
  array: MultiDimensionalArray
  index: number
};

export default function* inorderTraversal(
  arr: MultiDimensionalArray,
): Generator<number, void, unknown> {
  const stack: StackFrame[] = [{ array: arr, index: 0 }];

  while (stack.length > 0) {
    const frame = stack[stack.length - 1];

    if (frame.index >= frame.array.length) {
      stack.pop();
      continue;
    }

    const value = frame.array[frame.index];
    frame.index += 1;

    if (Array.isArray(value)) {
      stack.push({ array: value, index: 0 });
    } else {
      yield value;
    }
  }
}

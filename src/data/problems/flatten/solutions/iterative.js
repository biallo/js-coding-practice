export default function flatten(array) {
  const result = [];
  // Use a stack so deeply nested input does not depend on the call stack.
  const stack = [...array];

  while (stack.length > 0) {
    const item = stack.pop();

    if (Array.isArray(item)) {
      // Push nested items back onto the stack to process them one level at a time.
      stack.push(...item);
    } else {
      result.push(item);
    }
  }

  return result.reverse();
}

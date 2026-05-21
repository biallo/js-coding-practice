export default function cycle<T>(...values: T[]): () => T {
  let index = 0;

  return function nextValue() {
    const value = values[index];
    index += 1;

    if (index === values.length) {
      index = 0;
    }

    return value;
  };
}

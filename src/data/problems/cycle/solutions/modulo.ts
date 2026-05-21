export default function cycle<T>(...values: T[]): () => T {
  let index = 0;

  return function nextValue() {
    const value = values[index % values.length];
    index += 1;
    return value;
  };
}

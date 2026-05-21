type Comparable = string | number | bigint | boolean | Date

export default function minBy<T>(
  array: T[],
  iteratee: (value: T) => Comparable | null | undefined,
): T | undefined {
  let minElement: T | undefined;
  let minValue: Comparable | undefined;

  for (const element of array) {
    const value = iteratee(element);

    if (value == null) {
      continue;
    }

    if (minValue === undefined || value < minValue) {
      minValue = value;
      minElement = element;
    }
  }

  return minElement;
}

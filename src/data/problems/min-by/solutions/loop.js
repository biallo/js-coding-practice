export default function minBy(array, iteratee) {
  let minElement;
  let minValue;

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

export default function flatten(array) {
  return array.reduce((result, item) => {
    if (Array.isArray(item)) {
      // Merge each flattened child array into the accumulator.
      result.push(...flatten(item));
    } else {
      result.push(item);
    }

    return result;
  }, []);
}

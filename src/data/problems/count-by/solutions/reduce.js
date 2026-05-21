export default function countBy(array, iteratee) {
  return array.reduce((counts, value) => {
    const key = iteratee(value);
    counts[key] = (counts[key] ?? 0) + 1;
    return counts;
  }, {});
}

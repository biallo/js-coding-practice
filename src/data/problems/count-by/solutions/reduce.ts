type CountKey = string | number | symbol | null | undefined

export default function countBy<T>(
  array: T[],
  iteratee: (value: T) => CountKey,
): Record<PropertyKey, number> {
  return array.reduce<Record<PropertyKey, number>>((counts, value) => {
    const key = iteratee(value) as PropertyKey;
    counts[key] = (counts[key] ?? 0) + 1;
    return counts;
  }, {});
}

type Fn<T> = (value: T) => number;

export default function sortBy<T>(arr: T[], fn: Fn<T>): T[] {
  return [...arr].sort((a, b) => fn(a) - fn(b));
}

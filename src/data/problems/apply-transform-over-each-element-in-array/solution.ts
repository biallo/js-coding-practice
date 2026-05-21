type Fn = (value: number, index: number) => number;

export default function map(arr: number[], fn: Fn): number[] {
  const transformed: number[] = [];

  for (let index = 0; index < arr.length; index += 1) {
    transformed.push(fn(arr[index], index));
  }

  return transformed;
}

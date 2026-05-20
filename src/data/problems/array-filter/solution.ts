type Fn = (value: number, index: number) => unknown

export default function filter(arr: number[], fn: Fn): number[] {
  const filteredArr: number[] = [];

  for (let i = 0; i < arr.length; i += 1) {
    // Keep the element only when the callback returns a truthy value.
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}

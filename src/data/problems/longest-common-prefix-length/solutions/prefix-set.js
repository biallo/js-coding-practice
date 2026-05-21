export default function longestCommonPrefix(arr1, arr2) {
  const prefixes = new Set();

  for (const num of arr1) {
    const value = String(num);

    for (let length = 1; length <= value.length; length += 1) {
      prefixes.add(value.slice(0, length));
    }
  }

  let longest = 0;

  for (const num of arr2) {
    const value = String(num);

    for (let length = 1; length <= value.length; length += 1) {
      if (prefixes.has(value.slice(0, length))) {
        longest = Math.max(longest, length);
      }
    }
  }

  return longest;
}

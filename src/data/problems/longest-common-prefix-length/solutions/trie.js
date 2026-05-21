function createNode() {
  return { children: new Map() };
}

export default function longestCommonPrefix(arr1, arr2) {
  const root = createNode();

  for (const num of arr1) {
    let node = root;

    for (const digit of String(num)) {
      if (!node.children.has(digit)) {
        node.children.set(digit, createNode());
      }

      node = node.children.get(digit);
    }
  }

  let longest = 0;

  for (const num of arr2) {
    let node = root;
    let length = 0;

    for (const digit of String(num)) {
      if (!node.children.has(digit)) {
        break;
      }

      node = node.children.get(digit);
      length += 1;
    }

    longest = Math.max(longest, length);
  }

  return longest;
}

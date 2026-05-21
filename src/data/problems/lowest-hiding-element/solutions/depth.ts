function getDepth(element: Element): number {
  let depth = 0;
  let current: Element = element;

  while (current.parentElement !== null) {
    depth += 1;
    current = current.parentElement;
  }

  return depth;
}

export default function lowestHidingElement(elements: Element[]): Element {
  const nodes = [...elements];
  const depths = nodes.map(getDepth);

  while (!nodes.every((node) => node === nodes[0])) {
    const maxDepth = Math.max(...depths);

    for (let i = 0; i < nodes.length; i += 1) {
      if (depths[i] === maxDepth) {
        // Move the deepest nodes upward until all nodes meet.
        nodes[i] = nodes[i].parentElement as Element;
        depths[i] -= 1;
      }
    }
  }

  return nodes[0];
}

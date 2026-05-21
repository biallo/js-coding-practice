function getAncestors(element: Element): Element[] {
  const ancestors: Element[] = [];
  let current: Element | null = element;

  while (current !== null) {
    ancestors.push(current);
    current = current.parentElement;
  }

  return ancestors;
}

export default function lowestHidingElement(elements: Element[]): Element {
  const firstAncestors = getAncestors(elements[0]);
  const ancestorSets = elements
    .slice(1)
    .map((element) => new Set(getAncestors(element)));

  // The first ancestor shared by every element is the deepest shared container.
  return firstAncestors.find((ancestor) =>
    ancestorSets.every((ancestorSet) => ancestorSet.has(ancestor)),
  ) as Element;
}
